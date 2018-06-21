package indie.http_listener;

import java.io.*;
import java.net.Socket;

public class HttpController implements Runnable {
    private Socket       s;
    private InputStream  is;
    private OutputStream os;

    public HttpController(Socket s) throws Throwable {
        this.s  = s;
        this.is = s.getInputStream();
        this.os = s.getOutputStream();
    }

    public void run() {
        try {
            String[] response = readRequest();
            System.out.println("Response: " + response[0] + " " + response[1]);

            writeResponse(response[2], response[0] + " " + response[1]);
        } catch (Throwable t) {
            t.printStackTrace();
        } finally {
            try {
                s.close();
            } catch (Throwable t) {
                t.printStackTrace();
            }
        }
    }

    // example status: "200 OK" or "400 BAD"
    private void writeResponse(String body, String status) throws Throwable {
        String response = "HTTP/1.1 " + status + "\r\n" +
                "Server: YarServer/2009-09-09\r\n" +
                "Content-Type: text/plain\r\n" +
                "Content-Length: " + body.length() + "\r\n" +
                "Connection: close\r\n\r\n";
        String result = response + body;
        os.write(result.getBytes());
        os.flush();
    }

    // example return response[]: response[0] = "200", response[1] = "OK", response[2] = "body"
    private String[] readRequest() throws IOException {
        String[] response = new String[3];

        BufferedReader rd = new BufferedReader(new InputStreamReader(is));
        StringBuilder request = new StringBuilder();
        String line;
        while (!(line = rd.readLine()).isEmpty()) {
            request.append(line);
            request.append('\n');
        }

        StringBuilder bodyRequest = new StringBuilder();
        char[] postData = new char[500];
        while (rd.ready()) {
            int count = rd.read(postData);
            bodyRequest.append(postData, 0, count);
        }

        byte[] body = bodyRequest.toString().getBytes();

        if(body.length == 0) {
            response[0] = "400";
            response[1] = "BAD";
            response[2] = "error: body empty";
            return response;
        }

        response = UseController.usedCommandController(body);
        return response;
    }
}
