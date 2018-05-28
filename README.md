# homecontrol

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
metod POST '/'  
Body request:  
//First 4 bytes = Command(int32)   
//Next bytes = stringCommand(string)

HTTP OPEN API for controlled:  
metod POST '/api/controlled'  
metod PUT '/api/controlled'  
metod POST '/api/controlled/message'

Control web:
-------  
###### AngularJS 6 ######  
https://github.com/darkfoxs96/homecontrol/tree/master/goserver/static  
and https://github.com/darkfoxs96/homecontrol/tree/master/goserver/views  

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
func GetParamHTMLForInsertingSettings()  

| Name          | type         | value                    | result                      | JSON from the client |
| :------------ | :----------: | :----------------------- | :-------------------------- | :------------------- |
| key           | string       | sdfd                     | input, string, value=sdfd   | "key": "sdfd"        |
| year          | int          | 1910                     | input, number, value=1910   | "year": 1910         |
| lang          | list         | uk-UK,ru-RU,en-US,uk-UK  | select, first act. "uk-UK"  | "lang": "uk-UK"      |
| used          | bool         | true                     | radio button, active        | "used": true         |
| SpeechKit     | url          | https://developer/       | a, href=value, html=Name    |                      |