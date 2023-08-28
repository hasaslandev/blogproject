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
import { BlogHomeComponent } from './components/blog-home/blog-home.component';
import { HeroComponent } from './components/hero/hero.component';
import { SkillComponent } from './components/skill/skill.component';
import { ResumeComponent } from './components/resume/resume.component';
import { PortfolioComponent } from './components/portfolio/portfolio.component';
import { ContactComponent } from './components/contact/contact.component';
import { ServiceManagerComponent } from './components/service-manager/service-manager.component';
import { FooterComponent } from './components/footer/footer.component';
import { StartComponent } from './components/start/start.component';
import { DenemeTemplateComponent } from './components/deneme-template/deneme-template.component';
import { BlogPageComponent } from './components/blog-page/blog-page.component';
import { AdminDashboardComponent } from './components/admin-dashboard/admin-dashboard.component';
import { AdminTablesComponent } from './components/admin-tables/admin-tables.component';
import { AdminBillingComponent } from './components/admin-billing/admin-billing.component';
import { AdminPageComponent } from './components/admin-page/admin-page.component';
import { AdminVirtualRealityComponent } from './components/admin-virtual-reality/admin-virtual-reality.component';
import { AdminNotificationsComponent } from './components/admin-notifications/admin-notifications.component';
import { AdminProfileComponent } from './components/admin-profile/admin-profile.component';
import { AdminSignupComponent } from './components/admin-signup/admin-signup.component';
import { AdminSigninComponent } from './components/admin-signin/admin-signin.component';
import { BloggerPageComponent } from './components/blogger-page/blogger-page.component';
import { BloggerIndexComponent } from './components/blogger-index/blogger-index.component';
import { BloggerSingleComponent } from './components/blogger-single/blogger-single.component';
import { BloggerCategoryComponent } from './components/blogger-category/blogger-category.component';
import { AdminAboutAboutDetailComponent } from './components/admin-about-about-detail/admin-about-about-detail.component';

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
    BlogHomeComponent,
    HeroComponent,
    SkillComponent,
    ResumeComponent,
    PortfolioComponent,
    ServiceManagerComponent,
    ContactComponent,
    FooterComponent,
    StartComponent,
    DenemeTemplateComponent,
    BlogPageComponent,
    AdminDashboardComponent,
    AdminTablesComponent,
    AdminBillingComponent,
    AdminPageComponent,
    AdminVirtualRealityComponent,
    AdminNotificationsComponent,
    AdminProfileComponent,
    AdminSignupComponent,
    AdminSigninComponent,
    BloggerPageComponent,
    BloggerIndexComponent,
    BloggerSingleComponent,
    BloggerCategoryComponent,
    AdminAboutAboutDetailComponent,
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
