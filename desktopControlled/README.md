#ControlledDesktopHomeControl

Http server:
-------
###### Grizzly ######  

API Documentation:  
method POST '/used/command'  
Body request:  
//First 4 bytes = Command(int32)   
//Next bytes = stringCommand(string)

Artifact out to: [desktopControlledHomeControl.jar](../out/artifacts/desktopControlledHomeControl_jar)