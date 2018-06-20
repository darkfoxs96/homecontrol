package indie.ui;

import javax.imageio.ImageIO;
import javax.swing.*;
import java.awt.*;
import java.awt.event.*;
import java.io.IOException;

import indie.HomeControlControlled;

public class UIControlled extends JFrame{
    public static UIControlled app;
    public boolean chetTray = false; //переменная, чтобы был вывод сообщения в трее только при первом сворачивании

    private JTextField textField1;
    private JTextField textField2;
    private JTextField textField3;
    private JLabel     outError;
    private JButton    playButton;
    private JPanel     panel;
    private TrayIcon   iconTr;
    private SystemTray sT = SystemTray.getSystemTray();

    public UIControlled(String name){
        super(name);
        setVisible(true);
        add(panel);

        //Settings size
        setSize(400,600);
        setLocation(300,300);




        textField1.setText(HomeControlControlled.getServerHost());
        textField2.setText("" + HomeControlControlled.getServerPort());
        textField3.setText(HomeControlControlled.getMyServerName());

        playButton.addActionListener(new ActionListener() {
            @Override
            public void actionPerformed(ActionEvent e) {
                try {
                    HomeControlControlled.createHTTPListener(textField1.getText(),Integer.parseInt(textField2.getText()), textField3.getText());
                    outError.setText("Work");
                } catch (IOException | IllegalArgumentException e1) {
                    e1.printStackTrace();
                    outError.setText(e1.getMessage());
                }
            }
        });

        addWindowListener(new WindowListener() {
            public void windowClosing(WindowEvent winEvent) {
                HomeControlControlled.close();// close

                System.exit(0);//при закрытии окна завершаем программу
            }
            public void windowActivated(WindowEvent winEvent) {}
            public void windowClosed(WindowEvent winEvent) {}
            public void windowDeactivated(WindowEvent winEvent) {}
            public void windowDeiconified(WindowEvent winEvent) {}
            public void windowIconified(WindowEvent winEvent) {}
            public void windowOpened(WindowEvent winEvent) {}
        });

        try {
            iconTr = new TrayIcon(ImageIO.read(getClass().getResourceAsStream("/indie/res/icon.gif")), "HomeControl: controlled"); //Ikonka.png - изображение, которое будет показываться в трее - картинка в каталоге исполняемого приложения
        } catch (IOException e) {
            System.out.println("Exception load image: " + e);
            outError.setText(e.getMessage());
        }

        iconTr.addActionListener(new ActionListener() {
            public void actionPerformed(ActionEvent ev) {
                setVisible(true);
                setState(JFrame.NORMAL);
                removeTr();
            }
        });

        //обработчик мыши
        MouseListener mouS = new MouseListener() {
            public void mouseClicked(MouseEvent ev) { }
            public void mouseEntered(MouseEvent ev) { }
            public void mouseExited(MouseEvent ev)  { }
            public void mousePressed(MouseEvent ev) { }
            public void mouseReleased(MouseEvent ev){ }
        };
        iconTr.addMouseListener(mouS);
        MouseMotionListener mouM = new MouseMotionListener() {
            public void mouseDragged(MouseEvent ev) { }
            //при наведении
            public void mouseMoved(MouseEvent ev) {
                boolean flg = false;
                iconTr.setToolTip("Двойной щелчок - развернуть");
            }
        };

        iconTr.addMouseMotionListener(mouM);
        addWindowStateListener(new WindowStateListener() {
            public void windowStateChanged(WindowEvent ev) {
                if(ev.getNewState() == JFrame.ICONIFIED) {
                    setVisible(false);
                    addT();
                }
            }
        });

        if(HomeControlControlled.getUIСurl()) {
            outError.setText("Work");
            setVisible(false);
            addT();
        }
    }

    // метод удаления из трея
    private void removeTr(){ sT.remove(iconTr);}

    // метод добавления в трей
    private void addT() {
        try {
            sT.add(iconTr);
            if (chetTray==false) { iconTr.displayMessage("HomeControl: controlled", "Go to trey", TrayIcon.MessageType.INFO); }
            chetTray = true;
        }
        catch(AWTException ex) {
            ex.printStackTrace();
            outError.setText(ex.getMessage());
        }
    }
}






