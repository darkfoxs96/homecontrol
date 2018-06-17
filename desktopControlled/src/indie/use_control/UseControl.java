package indie.use_control;

import java.awt.*;
import java.io.IOException;

import indie.HomeControlControlled;

public class UseControl extends Thread {
    double      x, y; //Mouse position
    PointerInfo mousePointer;
    int         iterating = 0;

    public UseControl() {
        mousePointer = MouseInfo.getPointerInfo();

        Point mousePoint = mousePointer.getLocation();
        x = mousePoint.getX();
        y = mousePoint.getY();

        start();
    }

    public void run() {
        Point mousePoint;
        double lastX;
        double lastY;

        while(true) {
            mousePointer = MouseInfo.getPointerInfo();
            mousePoint = mousePointer.getLocation();
            lastX      = mousePoint.getX();
            lastY      = mousePoint.getY();

            if(lastX != x || lastY != y) {
                x = lastX;
                y = lastY;
                movedMouse();
            }

            try {
                Thread.sleep(3000);
            } catch (InterruptedException e) {
                e.printStackTrace();
            }
        }
    }

    private void movedMouse() {
        if(iterating == 0) {
            try {
                HomeControlControlled.reportUseControlToServer("Moved the mouse");
                iterating = 101;
            } catch (IOException e) {
                e.printStackTrace();
            }
        }
        iterating--;
    }
}
