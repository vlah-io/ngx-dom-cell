import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {NgxDomCellModule} from '../../../ngx-dom-cell/src/lib/ngx-dom-cell.module';
import {ComComponent} from './dom-cell/com.component';

@NgModule({
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgxDomCellModule
  ],
  declarations: [
    AppComponent,
    ComComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
