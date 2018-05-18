# homecontrol

Server: https://github.com/darkfoxs96/homecontrol/tree/master/goserver lang: golang

HTTP API:

Controlled desktop: https://github.com/darkfoxs96/homecontrol/tree/master/desktopControlled lang: java

Controlled android: https://github.com/darkfoxs96/homecontrol/tree/master/androidControlled lang: java

Controlled iOS: https://github.com/darkfoxs96/homecontrol/tree/master/iOSControlled lang: java

Interpretation command for controlled:
//Command:  0 - Put buffer,     1 - Open page, 2 - Stop
//Command:  3 - Sound off,  	4 - Sound on,  5 - off
//Command:  6 - Open youtube,   7 - Open vk,   8 - Open ok
//Command:  9 - Open fecebook, 10 - Open,     11 - Used code in terminal
//Command: 12 - testWork
//First 4 bytes = Command(int32)
//Next bytes = stringCommand(string)

Control web: https://github.com/darkfoxs96/homecontrol/tree/master/goserver/static 
and https://github.com/darkfoxs96/homecontrol/tree/master/goserver/views            lang javascript

Third-party home control systems: https://github.com/darkfoxs96/homecontrol/tree/master/goserver/thirdpartyhomecontrol 
Interface local:
https://github.com/darkfoxs96/homecontrol/tree/master/goserver/services/controlsystemhome lang golang

Interpretation command for Third-party home control systems:
//Command: 1000 - 1999 Noolite4

Bot messengers: 
https://github.com/darkfoxs96/homecontrol/tree/master/goserver/botsmessengers 
Interface local:
https://github.com/darkfoxs96/homecontrol/tree/master/goserver/services/botmessenger lang golang
