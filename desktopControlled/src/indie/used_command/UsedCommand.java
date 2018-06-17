package indie.used_command;

import java.awt.*;
import java.awt.datatransfer.Clipboard;
import java.awt.datatransfer.StringSelection;
import java.io.IOException;
import javax.sound.sampled.*;

import com.sun.glass.events.KeyEvent;
import indie.HomeControlControlled;

public class UsedCommand {
    private String  OSName     = "";
    private Runtime rt         = null;
    private float   lastVolume = 1;
    private Robot   robot      = null;

    public UsedCommand() {
        OSName = System.getProperty("os.name");
        rt = Runtime.getRuntime();
        try {
            robot = new Robot();
        } catch (AWTException e) {
            e.printStackTrace();
        }
    }

    public void used() throws IOException {



    }

    // putBuffer: command ID = 0
    private void putBuffer(String newBuffer) {
        HomeControlControlled.setIsServerBuffer(true);

        Clipboard cp = Toolkit.getDefaultToolkit().getSystemClipboard();
        StringSelection s = new StringSelection(newBuffer);
        cp.setContents(s,s);
    }

    // openPage: command ID = 1
    private void openPage(String urlPage) throws IOException {
        if (OSName.contains("win")) {
            // не поддерживаются ссылки формата "leodev.html#someTag"
            rt.exec("rundll32 url.dll,FileProtocolHandler " + urlPage); // если windows, открываем урлу через командную строку
        } else if (OSName.contains("mac")) {
            rt.exec("open " + urlPage); // аналогично в MAC
        } else if (OSName.contains("nix") || OSName.contains("nux")) {
            // c nix системами все несколько проблемотичнее
            String[] browsers = {"epiphany", "firefox", "mozilla", "konqueror", "netscape", "opera", "links", "lynx", "chrome"};

            // Формируем строку с вызовом всем браузеров через логическое ИЛИ в shell консоли
            // "browser0 "URI" || browser1 "URI" ||..."
            StringBuilder cmd = new StringBuilder();

            for (int i = 0; i < browsers.length; i++) {
                cmd.append(i == 0 ? "" : " || ").append(browsers[i]).append(" \"").append(urlPage).append("\" ");
            }

            rt.exec(new String[]{"sh", "-c", cmd.toString()});
        }
    }


    // TODO: not work mac
    // stop: command ID = 2
    private void stopPlay() {
        robot.setAutoWaitForIdle(true);
        robot.setAutoDelay(40);

        robot.keyPress(KeyEvent.VK_SPACE);
        robot.keyRelease(KeyEvent.VK_SPACE);
    }

    // valueOff: command ID = 3
    private void valueOff() {
        Mixer.Info[] infos = AudioSystem.getMixerInfo();

        for (Mixer.Info info: infos) {
            Mixer mixer = AudioSystem.getMixer(info);

            if (mixer.isLineSupported(Port.Info.SPEAKER)) {
                Port port = null;

                try {
                    port = (Port)mixer.getLine(Port.Info.SPEAKER);
                    port.open();
                } catch (LineUnavailableException e) {
                    e.printStackTrace();
                }

                if (port.isControlSupported(FloatControl.Type.VOLUME)) {
                    FloatControl volume = (FloatControl)port.getControl(FloatControl.Type.VOLUME);
                    lastVolume = volume.getValue();
                    volume.setValue(volume.getValue() - volume.getValue());
                }

                port.close();
            }
        }
    }

    // valueOn: command ID = 4
    private void valueOn() {
        Mixer.Info[] infos = AudioSystem.getMixerInfo();

        for (Mixer.Info info: infos) {
            Mixer mixer = AudioSystem.getMixer(info);

            if (mixer.isLineSupported(Port.Info.SPEAKER)) {
                Port port = null;

                try {
                    port = (Port)mixer.getLine(Port.Info.SPEAKER);
                    port.open();
                } catch (LineUnavailableException e) {
                    e.printStackTrace();
                }

                if (port.isControlSupported(FloatControl.Type.VOLUME)) {
                    FloatControl volume = (FloatControl)port.getControl(FloatControl.Type.VOLUME);
                    volume.setValue(lastVolume);
                }

                port.close();
            }
        }
    }

    // off: command ID = 5
    private void off() throws IOException {
        if (OSName.contains("win")) {
            rt.exec(new String[]{"shutdown", "-s", "f"});   // Windows
        } else if (OSName.contains("mac")) {
            rt.exec(new String[]{"shutdown", "-h", "now"}); // Mac
        } else if (OSName.contains("nix") || OSName.contains("nux")) {
            rt.exec(new String[]{"shutdown", "-h", "now"}); // Linux
        }
    }

    // openYoutube: command ID = 6
    private void openYoutube() throws IOException {
        openPage("https://www.youtube.com/");
    }

    // openVk: command ID = 7
    private void openVk() throws IOException {
        openPage("https://vk.com/");
    }

    // openOk: command ID = 8
    private void openOk() throws IOException {
        openPage("https://ok.ru/");
    }

    // openFecebook: command ID = 9
    private void openFecebook() throws IOException {
        openPage("https://www.facebook.com/");
    }

    // TODO: server not support
    // open: command ID = 10
    private void open() { }

    // Used code in terminal: command ID = 11
    private void usedCodeInTerminal(String code) throws IOException {
        rt.exec(code);
    }

    // testWork: command ID = 999
    private boolean testWork() {
        return true;
    }
}
