import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { TopHeaderComponent } from './top-header/top-header.component';
import { BottomHeaderComponent } from './bottom-header/bottom-header.component';
import { FooterComponent } from './footer/footer.component';
import { MainComponent } from './main/main.component';
import { AppRoutingModule } from './app-routing.module';
import { ContactComponent } from './contact/contact.component';
import { ProductComponent} from './main/product/product.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FetauredProductComponent } from './main/fetaured-product/fetaured-product.component';

@NgModule({
  declarations: [
    AppComponent,
    TopHeaderComponent,
    BottomHeaderComponent,
    FooterComponent,
    MainComponent,
    ContactComponent,
    ProductComponent,
    FetauredProductComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
