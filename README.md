# HomeControl

Dowload v1.0.0:  
-------  
###### server ######  
[linux x64](https://yadi.sk/d/SuqQyuHC3Y7PEH)  
[linux x32](https://yadi.sk/d/yjL1okW33Y7PFm)  
[windows x64](https://yadi.sk/d/ZEG0APdd3Y7PNL)  
[windows x32](https://yadi.sk/d/v-Q8YzUt3Y7PLN)  
[mac x64](https://yadi.sk/d/_G4_maT83Y7PH5)  
[mac x32](https://yadi.sk/d/itYOF9c73Y7PK7)  
Run file  
Server open web control: ip:8085/  
ip = device ip  

###### controlled desktop ######  
[linux, windows, mac & all JVM java](https://yadi.sk/d/yHijZIaP3YAGsj)  
put port = 8086

###### controlled mobile ######  
[androidOS not](/)  
[iOS not](/)  

Server:
-------  
###### golang ######  
https://github.com/darkfoxs96/homecontrol/tree/master/goserver  

Documentation HTTP API:  
/swagger

LOCAL SYSTEM!!!

Controlled:
-------  
###### java ######  
Controlled desktop: https://github.com/darkfoxs96/homecontrol/tree/master/desktopControlled  
Controlled android: https://github.com/darkfoxs96/homecontrol/tree/master/androidControlled  
Controlled iOS: https://github.com/darkfoxs96/homecontrol/tree/master/iOSControlled  

Interpretation command for controlled:

| №       | Command                         | Use stringCommand  |
| ------- | :------------------------------ | :----------------: |
| 0       | Put buffer                      | +                  |
| 1       | Open page                       | +                  |
| 2       | Stop                            |                    |
| 3       | Sound off                       |                    |
| 4       | Sound on                        |                    |
| 5       | off                             |                    |
| 6       | Open youtube                    |                    |
| 7       | Open vk                         |                    |
| 8       | Open ok                         |                    |
| 9       | Open fecebook                   |                    |
| 10      | Open                            |                    |
| 11      | Used code in terminal           | +                  |
| 999     | testWork                        |                    |

Controlled HTTP OPEN API:  
method POST '/used/command'  
Body request:  
//First 4 bytes = Command(int32)   
//Next bytes = stringCommand(string)

HTTP OPEN API for controlled:  
method POST '/api/controlled'  
method PUT '/api/controlled'  
method POST '/api/controlled/message'

Control web:
-------  
###### AngularJS 6 ######  
https://github.com/darkfoxs96/homecontrol/tree/master/goserver/webhomecontrol

Third-party home control systems:
-------
###### golang ######  
https://github.com/darkfoxs96/homecontrol/tree/master/goserver/thirdpartyhomecontrol   
Interface local:  
https://github.com/darkfoxs96/homecontrol/tree/master/goserver/services/controlsystemhome  

Interpretation command for Third-party home control systems:  

| first command | last command | system home control name |
| :-----------: | :----------: | ------------------------ |
| 1000          | 1999         | Noolite4                 |

Bot messengers:
-------
###### golang ######  
https://github.com/darkfoxs96/homecontrol/tree/master/goserver/botsmessengers   
Interface local:  
https://github.com/darkfoxs96/homecontrol/tree/master/goserver/services/botmessenger

Sound parsings:
-------
###### golang ######  
https://github.com/darkfoxs96/homecontrol/tree/master/goserver/soundparsing  
Interface local:  
https://github.com/darkfoxs96/homecontrol/tree/master/goserver/services/soundparsing

### To all interfaces: ###
Interpretation settings:  
```func GetParamHTMLForInsertingSettings()```  
HTTP:  
```GET api/botmessanger/settings```  
```GET api/soundparsing/settings```  
```GET api/tphomecontrol/settings```  

| Name          | type         | value                    | result                      | JSON from the client |
| :------------ | :----------: | :----------------------- | :-------------------------- | :------------------- |
| key           | string       | sdfd                     | input, string, value=sdfd   | "key": "sdfd"        |
| year          | int          | 1910                     | input, number, value=1910   | "year": 1910         |
| lang          | list         | uk-UK,ru-RU,en-US,uk-UK  | select, first act. "uk-UK"  | "lang": "uk-UK"      |
| used          | bool         | true                     | checkbox, active            | "used": "on"         |
| usse          | bool         | false                    | checkbox, no active         | empty                |
| SpeechKit     | url          | https://developer/       | a, href=value, html=Name    |                      |
