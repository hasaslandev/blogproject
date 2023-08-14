import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations"

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AboutComponent } from './components/about/about.component';
import { CategoryComponent } from './components/category/category.component';
import { NaviComponent } from './components/navi/navi.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BlogComponent } from './components/blog/blog.component';
import { VatAddedPipe } from './pipes/vat-added.pipe';
import { FilterPipePipe } from './pipes/filter-pipe.pipe';
import { ToastrModule } from 'ngx-toastr';
import { CartSummaryComponent } from './components/cart-summary/cart-summary.component';
import { BlogAddComponent } from './components/blog-add/blog-add.component';
import { AboutAddComponent } from './components/about-add/about-add.component';
import { LoginComponent } from './components/login/login.component';
import { AuthInterceptor } from './interceptors/auth.interceptor';

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    CategoryComponent,
    NaviComponent,
    BlogComponent,
    VatAddedPipe,
    FilterPipePipe,
    CartSummaryComponent,
    BlogAddComponent,
    AboutAddComponent,
    LoginComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    ToastrModule.forRoot({
      positionClass: "toast-bottom-right"
    })
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true }   //Burayı incele
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
