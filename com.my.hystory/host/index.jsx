function getAppName(){
  var a = app.name;
  return a;
}

function getName () {
  var externalObjectName = "PlugPlugExternalObject"; 
  var mylib = new ExternalObject( "lib:" + externalObjectName );

  var eventObj = new CSXSEvent(); 
  eventObj.type="getAppName"; 
  eventObj.data=app.name; 
  eventObj.dispatch();
}