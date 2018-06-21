package indie.http_listener;

import indie.HomeControlControlled;

import java.io.IOException;

public class UseController {
    public static String[] usedCommandController(byte[] body) {
        String[] response = new String[3];
        String msg;

        try {
            msg = HomeControlControlled.usedCommand(body);
        } catch (IOException e) {
            response[0] = "500";
            response[1] = "BAD";
            response[2] = "error: used command";
            return response;
        }

        response[0] = "200";
        response[1] = "OK";
        response[2] = msg;
        return response;
    }
}
