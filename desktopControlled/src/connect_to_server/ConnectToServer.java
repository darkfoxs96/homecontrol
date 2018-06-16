package connect_to_server;

import java.io.*;
import java.net.*;

public class ConnectToServer {
    private String serverHost   = "";
    private int    serverPort   = 0;
    private int    controlledID = 0;

    //Error
    private static final Error ERROR_STATUS_BAD = new Error("server response bad status");

    public ConnectToServer(String serverHost, int serverPort) {
        this.serverHost = serverHost;
        this.serverPort = serverPort;
    }

    public int getControlledID() { return controlledID; }

    // connect: add or update controlled to server
    public void connect(String myHost, int myPort, String name) throws IOException {
        if(this.serverHost.equals("") || this.serverPort == 0) {
            new Error("serverHost or serverPort is empty");
        }

        String JSONToServer = "{" +
                "\"common_buffer\": 0," +
                "\"home_control_id\": \"\"," +
                "\"host\": \"" + myHost + "\"," +
                "\"name\": \"" + name   + "\"," +
                "\"port\": \"" + myPort + "\"" +
                "}";

        if(this.controlledID == 0) {
            this.requestToServer(JSONToServer, "POST", "/controlled");
        } else {
            this.requestToServer(JSONToServer, "PUT", "/controlled/" + this.controlledID);
        }
    }

    // report to server
    public void report(String msg) throws IOException {
        String JSONToServer = "{" +
                "\"controlled_id\": " + this.controlledID + "," +
                "\"message\": \"" + msg + "\"" +
                "}";

        this.requestToServer(JSONToServer, "POST", "controlled/message");
    }

    //update buffer
    public void updateBuffer(String newBuffer) throws IOException {
        String JSONToServer = "{" +
                "\"buffer\": \"" + newBuffer + "\"" +
                "}";

        // TODO: settings
        this.requestToServer(JSONToServer, "POST", "/controlled/buffer");
    }

    public void requestToServer(String body, String method, String apiURL) throws IOException {
        Socket socet = null;

        socet = new Socket(this.serverHost, this.serverPort);

        OutputStream wr = socet.getOutputStream();

        body = method + " /api" + apiURL + " HTTP/1.1\r\n" +
                "Host: " + this.serverHost + "\r\n" +
                "Content-Type: application/json \r\n" +
                "Content-Length: " + body.length() +
                "\r\n\r\n" + body;

        wr.write(body.getBytes());

        InputStream is = socet.getInputStream();

        BufferedReader rd = new BufferedReader(new InputStreamReader(is));
        StringBuilder response = new StringBuilder();
        String line;
        while (!(line = rd.readLine()).isEmpty()) {
            response.append(line);
            response.append('\n');
        }

        StringBuilder bodyResponse = new StringBuilder();
        char[] postData = new char[500];
        while (rd.ready()) {
            int count = rd.read(postData);
            bodyResponse.append(postData, 0, count);
        }

        is.close();
        socet.close();
        rd.close();

        String status = response.toString().substring(9, 12);

        if(!status.equals("200")) {
            throw new Error(ERROR_STATUS_BAD.toString() + " " + status + " msg: " + bodyResponse.toString());
        }

        if(apiURL.equals("/controlled")) {
            this.controlledID = Integer.parseInt(bodyResponse.toString());
        }
    }
}
