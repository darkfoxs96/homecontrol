package indie;

import java.io.IOException;
import java.net.InetAddress;

import indie.common_buffer.CommonBuffer;
import indie.connect_to_server.ConnectToServer;
import indie.http_listener.HTTPListener;
import indie.use_control.UseControl;
import indie.used_command.UsedCommand;

public class HomeControlControlled {
    static private String  serverHost     = "";
    static private int     serverPort     = 0;
    static private String  myServerHost   = "";
    static private int     myServerPort   = 0;
    static private int     myServerID     = 0;
    static private boolean isWorkMyServer = false;
    static private boolean isServerBuffer = false;

    // SERVICES
    static private ConnectToServer connectToServer = null;
    static private UsedCommand     goUsedCommand   = null;
    static private HTTPListener    httpListener    = null;
    static private CommonBuffer    commonBuffer    = null;
    static private UseControl      useControl      = null;

    // ERROR
    private static final Error ERROR_MY_SERVER_NOT_WORK = new Error("the controlled not work");
    private static final Error ERROR_FIELD_IS_EMPTY     = new Error("field is empty");

    // GET
    public static String getServerHost() {
        return serverHost;
    }

    public static int getServerPort() {
        return serverPort;
    }

    public static String getMyServerHost() { return myServerHost; }

    public static int getMyServerPort() { return myServerPort; }

    public static boolean getIsWorkMyServer() { return isWorkMyServer; }

    public static void main(String[] args) {
        try {
            createHTTPListener("192.168.111.182", 8085, "SuperPC");
        } catch (IOException e) {
            e.printStackTrace();
        }
    }

    // HTTP LISTENER
    public static void createHTTPListener(String host, int port, String name) throws IOException {
        if(host.equals("") || port == 0) {
            throw ERROR_FIELD_IS_EMPTY;
        }

        serverHost = host;
        serverPort = port;

        if(httpListener != null) {
            httpListener.stop();
        }

        httpListener = new HTTPListener();

        myServerHost = InetAddress.getLocalHost().getHostAddress();

        isWorkMyServer = true;

        connectToServer(myServerHost, myServerPort, name);
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

    }

    // USE CONTROL
    public static void initUseControl() {
        if(useControl != null) {
            useControl.stop();
        }

        useControl = new UseControl();
    }

    // USED COMMAND
    public static String usedCommand(byte[] command) throws IOException {
        if(goUsedCommand == null) {
            goUsedCommand = new UsedCommand();
        }

        return goUsedCommand.used(command);
    }

    // COMMON BUFFER
    public static void initCommonBuffer() {
        if(commonBuffer != null) {
            commonBuffer.stop();
        }

        commonBuffer = new CommonBuffer();
    }

    public static boolean getIsServerBuffer() { return isServerBuffer; }

    public static void setIsServerBuffer(boolean isServerBuffer) { HomeControlControlled.isServerBuffer = isServerBuffer; }

    // CLOSE
    public static void close() {
        commonBuffer.stop();
        httpListener.stop();
        useControl.stop();
    }
}
