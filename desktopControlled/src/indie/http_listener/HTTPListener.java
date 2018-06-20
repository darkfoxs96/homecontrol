package indie.http_listener;

import java.io.IOException;
import java.net.InetAddress;
import java.net.UnknownHostException;

import org.glassfish.grizzly.Buffer;
import org.glassfish.grizzly.http.server.*;

import indie.HomeControlControlled;

public class HTTPListener extends Thread{
    private int        port   = 8086;
    private HttpServer server = null;

    public HTTPListener() {
        HomeControlControlled.setMyServerPort(port);
        start();
    }

    public void run() {
        String host = "localhost";
        try {
            host = InetAddress.getLocalHost().getHostAddress();
        } catch (UnknownHostException e) {
            e.printStackTrace();
        }
        System.out.println("controlled ip: " + host);

        server = HttpServer.createSimpleServer(host, port);

        NetworkListener listener = new NetworkListener("grizzly", host, port);
        server.addListener(listener);

        server.getServerConfiguration().addHttpHandler(
                new HttpHandler() {
                    public void service(Request request, Response response) throws IOException {
                        String msg = "";
                        Buffer body = null;

                        try {
                            body = request.getPostBody(100000);
                        } catch (IOException e) {
                            msg = "error: body reading";
                            response.setContentType("text/plain");
                            response.setContentLength(msg.length());
                            response.setStatus(400);
                            response.getWriter().write(msg);
                            return;
                        }

                        byte[] bodyBytes = new byte[body.remaining()];
                        body.get(bodyBytes);
                        if(bodyBytes.length == 0) {
                            msg = "error: body empty";
                            response.setContentType("text/plain");
                            response.setContentLength(msg.length());
                            response.setStatus(400);
                            response.getWriter().write(msg);
                            return;
                        }

                        try {
                            msg = HomeControlControlled.usedCommand(bodyBytes);
                        } catch (IOException e) {
                            msg = "error: used command";
                            response.setContentType("text/plain");
                            response.setContentLength(msg.length());
                            response.setStatus(500);
                            response.getWriter().write(msg);
                            return;
                        }

                        response.setContentType("text/plain");
                        response.setContentLength(msg.length());
                        response.setStatus(200);
                        response.getWriter().write(msg);
                    }
                },
                "/used/command");
        try {
            server.start();
            System.out.println("Press any key to stop the server...");
            System.in.read();
        } catch (Exception e) {
            System.err.println(e);
        }
    }

    public void serverStop() {
        if(server != null) {
            server.stop();
        }
    }
}
