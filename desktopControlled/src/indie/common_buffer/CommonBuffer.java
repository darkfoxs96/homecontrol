package indie.common_buffer;

import java.awt.*;
import java.awt.datatransfer.*;
import java.io.IOException;

import indie.HomeControlControlled;

public class CommonBuffer extends Thread {
    private String    buffer = "";
    private Clipboard clip   = Toolkit.getDefaultToolkit().getSystemClipboard();

    public CommonBuffer() {
        start();
    }

    public void run() {
        String newBuf = "";
        while (true) {
            try {
                newBuf = (String) clip.getData(DataFlavor.stringFlavor);
                if(!newBuf.equals(buffer)) {
                    buffer = newBuf;
                    newBuffer();
                }

                Thread.sleep(1000);
            } catch (UnsupportedFlavorException | IOException | InterruptedException e) { }
        }
    }

    private void newBuffer() {
        if(HomeControlControlled.getIsServerBuffer()) {
            HomeControlControlled.setIsServerBuffer(false);
            return;
        }

        try {
            HomeControlControlled.updateBufferToServer(buffer);
        } catch (IOException e) { }
    }
}
