import connect_to_server.ConnectToServer;

import java.io.IOException;

public class HomeControlControlled {
    static private String  serverHost     = "";
    static private int     serverPort     = 0;
    static private String  myServerHost   = "";
    static private int     myServerPort   = 0;
    static private boolean isWorkMyServer = false;
    static private boolean isServerBuffer = false;

    // SERVICES
    static private ConnectToServer connectToServer = null;

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

        initUI();
    }

    // HTTP LISTENER
    public static void createHTTPListener(String host, int port) {
        if(host.equals("") || port == 0) {
            throw ERROR_FIELD_IS_EMPTY;
        }

        serverHost = host;
        serverPort = port;


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
    }

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

    }


    // USED COMMAND
    public static void usedCommand(int commandID, String stringCommandBuffer) {

    }


    // COMMON BUFFER
    public static void initCommonBuffer() {

    }

    public static boolean getIsServerBuffer() { return isServerBuffer; }

    public static void setIsServerBuffer(boolean isServerBuffer) {
        HomeControlControlled.isServerBuffer = isServerBuffer;
    }

}
