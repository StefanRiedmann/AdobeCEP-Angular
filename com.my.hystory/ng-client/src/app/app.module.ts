import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CSInterface } from 'csinterface-ts/dist/csinterface-ts';
import { FormsModule } from '@angular/forms';
import { TrustPipe } from './pipes/trust.pipe';

@NgModule({
  declarations: [
    AppComponent,
    TrustPipe
  ],
  imports: [
    BrowserModule,
    FormsModule
    
  ],
  providers: [CSInterface],
  bootstrap: [AppComponent]
})
export class AppModule { }
