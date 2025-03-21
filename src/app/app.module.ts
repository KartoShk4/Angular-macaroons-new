import {LOCALE_ID, NgModule} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import localeRu from '@angular/common/locales/ru';


// Регистрируем локаль
registerLocaleData(localeRu);

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import {FormsModule} from "@angular/forms";
import {NgForOf, registerLocaleData} from "@angular/common";
import { ProductListComponent } from './components/product-list/product-list.component';
import { CartSummaryComponent } from './components/cart-summary/cart-summary.component';
import { CookieAdvantagesComponent } from './components/cookie-advantages/cookie-advantages.component';
import { ProductCardComponent } from './components/product-card/product-card.component';
import { ButtonHoverDirective } from './directives/button-hover.directive';
import { UnderlineHoverDirective } from './directives/underline-hover.directive';
import { TruncateTextPipe } from './pipes/truncate-text.pipe';
import { ShowFullTextDirective } from './directives/show-full-text.directive';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    ProductListComponent,
    CartSummaryComponent,
    CookieAdvantagesComponent,
    ProductCardComponent,
    ButtonHoverDirective,
    UnderlineHoverDirective,
    TruncateTextPipe,
    ShowFullTextDirective
  ],
  imports: [
    BrowserModule,
    FormsModule,
    NgForOf
  ],
  providers: [{ provide: LOCALE_ID, useValue: 'ru-RU' }],
  bootstrap: [AppComponent, HeaderComponent, FooterComponent]
})
export class AppModule { }
