import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { FormsModule } from '@angular/forms';
import { RegisterComponent } from './register/register.component';
import{HttpClientModule,HttpClient}from '@angular/common/http'
import { ToastrModule,ToastrService} from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FooterComponent } from './footer/footer.component';
import { ContactusComponent } from './contactus/contactus.component';
import { HeaderComponent } from './header/header.component';
import { ViewComponent } from './view/view.component';
import { ServiceComponent } from './service/service.component';
import { BuyComponent } from './buy/buy.component';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    RegisterComponent,
    FooterComponent,
    ContactusComponent,
    HeaderComponent,
    ViewComponent,
    ServiceComponent,
    BuyComponent,
 
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot({
      positionClass:"toast-bottom-center",
      timeOut:5000,
    }),
 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
