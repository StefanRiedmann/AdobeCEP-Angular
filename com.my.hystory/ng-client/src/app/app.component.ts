import { CSInterface } from 'csinterface-ts';
import { Component, OnInit } from '@angular/core';
import { TrustPipe } from "./pipes/trust.pipe";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  name: any;

  constructor(public csInterface: CSInterface) { }
  
  ngOnInit() { 
    // this.csInterface.evalScript("getAppName()", this.callbackFn);  
    return new Promise(() =>{
      this.csInterface.evalScript("getAppName()", this.callbackFn);
    });  
  }

  callbackFn: any = (data) => { 
    //working
    alert('Data: ' + data); 
    //not working
    this.name = data;
    //working
    alert('Name property' + this.name);
    //working
    document.getElementById("some_id").innerHTML	= 'innerHTML (working): ' + data;
  };

  //ngOnInit() {
      // this.csInterface.addEventListener("getAppName", function(event){
  //   this.name = event.data;
  //   // alert(event.data);
  // });
  

  // this.csInterface.evalScript("getName()", (data) => { null });
  // }
}

