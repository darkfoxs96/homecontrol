package indie.used_command;

import java.awt.*;
import java.awt.datatransfer.Clipboard;
import java.awt.datatransfer.StringSelection;
import java.io.IOException;

import indie.HomeControlControlled;

public class UsedCommand {
    private String  OSName = "";
    private Runtime rt     = null;

    public UsedCommand() {
        OSName = System.getProperty("os.name");
        rt = Runtime.getRuntime();
    }

    public void used(Byte[] command) throws IOException {


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
            for (int i = 0; i < browsers.length; i++)
                cmd.append(i == 0 ? "" : " || ").append(browsers[i]).append(" \"").append(urlPage).append("\" ");
            rt.exec(new String[]{"sh", "-c", cmd.toString()});
        }
    }
}
