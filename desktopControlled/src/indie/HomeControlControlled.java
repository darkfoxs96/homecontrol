package indie;

import java.io.IOException;
import java.net.InetAddress;
import java.util.prefs.Preferences;

import indie.common_buffer.CommonBuffer;
import indie.connect_to_server.ConnectToServer;
import indie.http_listener.HTTPListener;
import indie.ui.UIControlled;
import indie.use_control.UseControl;
import indie.used_command.UsedCommand;

public class HomeControlControlled {
    static private String  serverHost     = "";
    static private int     serverPort     = 0;
    static private String  myServerHost   = "";
    static private int     myServerPort   = 0;
    static private int     myServerID     = 0;
    static private String  myServerName   = "";
    static private boolean isWorkMyServer = false;
    static private boolean isServerBuffer = false;
    static private boolean uiСurl         = false;

    // SERVICES
    static private ConnectToServer connectToServer = null;
    static private UsedCommand     goUsedCommand   = null;
    static private HTTPListener    httpListener    = null;
    static private CommonBuffer    commonBuffer    = null;
    static private UseControl      useControl      = null;
    // Store
    static private Preferences     settings        = null;

    // ERROR
    static private final Error ERROR_MY_SERVER_NOT_WORK = new Error("the controlled not work");
    static private final Error ERROR_FIELD_IS_EMPTY     = new Error("field is empty");

    public static void main(String[] args) {
        load();

        if(myServerID != 0 &&  serverHost != "" && serverPort != 0) {
            try {
                createHTTPListener(serverHost, serverPort, myServerName);
                uiСurl = true;
            } catch (IOException e) {
                e.printStackTrace();
            } catch (RuntimeException e) {
                if(e.getMessage().equals("server response bad status 500: Models: Not found record 'Controlled' for update")) {
                    myServerID = 0;
                    try {
                        connectToServer.connect(myServerHost, myServerPort, myServerName);
                        uiСurl = true;
                    } catch (IOException e1) {
                        e1.printStackTrace();
                    }
                } else {
                    e.printStackTrace();
                }
            }
        }

        initUI();
    }

    private static void load() {
        if(settings == null) {
            settings = Preferences.userRoot().node(SettingsHCControlled.class.getName());
        }

        myServerName = settings.get   ("myServerName", "");
        myServerID   = settings.getInt("myServerID", 0);
        serverHost   = settings.get   ("serverHost", "");
        serverPort   = settings.getInt("serverPort", 0);
    }

    // HTTP LISTENER
    public static void createHTTPListener(String host, int port, String name) throws IOException {
        if(host.equals("") || port == 0) {
            throw ERROR_FIELD_IS_EMPTY;
        }

        serverHost = host;
        serverPort = port;

        if(httpListener == null) {
            httpListener = new HTTPListener();
        }

        myServerHost = InetAddress.getLocalHost().getHostAddress();
        isWorkMyServer = true;
        myServerName = name;

        connectToServer(myServerHost, myServerPort, myServerName);
    }

    public static void setMyServerPort(int myServerPort) {
        HomeControlControlled.myServerPort = myServerPort;
    }

    // CONNECT TO SERVER
    public static void connectToServer(String myHost, int myPort, String name) throws IOException {
        if(myHost.equals("") || myPort == 0) {
            throw ERROR_FIELD_IS_EMPTY;
        }
        if(!isWorkMyServer) {
            throw ERROR_MY_SERVER_NOT_WORK;
        }

        myServerHost = myHost;
        myServerPort = myPort;

        connectToServer = new ConnectToServer(serverHost, serverPort);

        connectToServer.connect(myHost, myPort, name);


        initUseControl();
        initCommonBuffer();

        save();
    }

    public static int getMyServerID() { return myServerID; }

    public static void setMyServerID(int myServerID) { HomeControlControlled.myServerID = myServerID; }

    public static void reportUseControlToServer(String report) throws IOException {
        if(connectToServer != null) {
            connectToServer.report(report);
        }
    }

    public static void updateBufferToServer(String newBuffer) throws IOException {
        if(connectToServer != null) {
            connectToServer.updateBuffer(newBuffer);
        }
    }

    // UI
    public static void initUI() {
        new UIControlled("HomeControl: controlled");
    }

    public static boolean getUIСurl() { return uiСurl; }

    // USE CONTROL
    public static void initUseControl() {
        if(useControl == null) {
            useControl = new UseControl();
        }
    }

    public static String getServerHost() { return serverHost; }

    public static int getServerPort() { return serverPort; }

    public static String getMyServerName() { return myServerName; }

    // USED COMMAND
    public static String usedCommand(byte[] command) throws IOException {
        if(goUsedCommand == null) {
            goUsedCommand = new UsedCommand();
        }

        return goUsedCommand.used(command);
    }

    // COMMON BUFFER
    public static void initCommonBuffer() {
        if(commonBuffer == null) {
            commonBuffer = new CommonBuffer();
        }
    }

    public static boolean getIsServerBuffer() { return isServerBuffer; }

    public static void setIsServerBuffer(boolean isServerBuffer) { HomeControlControlled.isServerBuffer = isServerBuffer; }

    // CLOSE
    public static void close() {
        if(httpListener != null) {
            httpListener.serverStop();
        }

        save();
    }

    public static void save() {
        if(settings == null) {
            settings = Preferences.userRoot().node(SettingsHCControlled.class.getName());
        }

        settings.put   ("myServerName", myServerName);
        settings.putInt("myServerID", myServerID);
        settings.put   ("serverHost", serverHost);
        settings.putInt("serverPort", serverPort);
    }
}
