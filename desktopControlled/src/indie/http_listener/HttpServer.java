package indie.http_listener;

import java.net.UnknownHostException;
import java.io.IOException;
import java.net.InetAddress;
import java.net.ServerSocket;
import java.net.Socket;

import indie.HomeControlControlled;

public class HttpServer extends Thread {
    private int port = 8087;
    ServerSocket ss;

    public HttpServer() {
        try {
            ss = new ServerSocket(port);
        } catch (IOException e) {
            e.printStackTrace();
        }

        HomeControlControlled.setMyServerPort(port);

        start();
    }

    public void run() {
        Socket s = null;

        String host = "not work";
        try {
            host = InetAddress.getLocalHost().getHostAddress();
        } catch (UnknownHostException e) {
            e.printStackTrace();
        }
        System.out.println("controlled ip: " + host + " port: " + port);

        while (true) {
            try {
                s = ss.accept();
            } catch (IOException e) {
                e.printStackTrace();
            }

            try {
                new Thread(new HttpController(s)).start();
            } catch (Throwable t) {
                t.printStackTrace();
            }
        }
    }

}
