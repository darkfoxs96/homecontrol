package indie.common_buffer;

import java.awt.*;
import java.awt.datatransfer.*;
import java.io.IOException;

import indie.HomeControlControlled;

public class CommonBuffer extends Thread {
    private String    buffer = "";
    private Clipboard clip   = Toolkit.getDefaultToolkit().getSystemClipboard();
    private String    newBuf =  "";

    public CommonBuffer() {
        start();
    }

    public void run() {
        while (true) {
            try {
                Thread.sleep(1000);

                newBuf = (String) clip.getData(DataFlavor.stringFlavor);

                if(!newBuf.equals(buffer)) {
                    buffer = newBuf;

                    newBuffer();
                }
            } catch (UnsupportedFlavorException | IOException | InterruptedException | IllegalArgumentException e) {
                e.printStackTrace();
            }
        }
    }

    private void newBuffer() {
        if(HomeControlControlled.getIsServerBuffer()) {
            HomeControlControlled.setIsServerBuffer(false);
            return;
        }

        try {
            HomeControlControlled.updateBufferToServer(buffer);
        } catch (IOException | IllegalArgumentException e) {
            e.printStackTrace();
        }
    }
}
