import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutAddComponent } from './components/about-add/about-add.component';
import { AboutComponent } from './components/about/about.component';
import { BlogAddComponent } from './components/blog-add/blog-add.component';
import { BlogHomeComponent } from './components/blog-home/blog-home.component';
import { BlogComponent } from './components/blog/blog.component';
import { CategoryComponent } from './components/category/category.component';
import { LoginComponent } from './components/login/login.component';
import { HeroComponent } from './components/hero/hero.component';
import { PortfolioComponent } from './components/portfolio/portfolio.component';
import { ResumeComponent } from './components/resume/resume.component';
import { SkillComponent } from './components/skill/skill.component';
import { StartComponent } from './components/start/start.component';
import { BlogPageComponent } from './components/blog-page/blog-page.component';
import { AdminDashboardComponent } from './components/admin-dashboard/admin-dashboard.component';
import { AdminTablesComponent } from './components/admin-tables/admin-tables.component';
import { AdminBillingComponent } from './components/admin-billing/admin-billing.component';
import { AdminVirtualRealityComponent } from './components/admin-virtual-reality/admin-virtual-reality.component';
import { AdminNotificationsComponent } from './components/admin-notifications/admin-notifications.component';
import { AdminProfileComponent } from './components/admin-profile/admin-profile.component';
import { AdminSigninComponent } from './components/admin-signin/admin-signin.component';
import { AdminSignupComponent } from './components/admin-signup/admin-signup.component';

const routes: Routes = [
  { path: "", pathMatch: "full", component: StartComponent },
  { path: "blogs", component: BlogComponent },
  { path: "blogs/category/:categoryID", component: BlogComponent },
  { path: "blogs/add", component: BlogAddComponent },
  { path: "abouts/add", component: AboutAddComponent },
  { path: "abouts", component: AboutComponent },
  { path: "login", component: LoginComponent },
  { path: "blogHome", component: BlogHomeComponent },
  { path: "hero", component: HeroComponent },
  { path: "skills", component: SkillComponent },
  { path: "resume", component: ResumeComponent },
  { path: "start", component: StartComponent },
  { path: "blogPage", component: BlogPageComponent },
  { path: "dashboard", component: AdminDashboardComponent },
  { path: "portfolio", component: PortfolioComponent },
  { path: "admin-dashboard", component: AdminDashboardComponent },
  { path: "admin-tables", component: AdminTablesComponent },
  { path: "admin-billing", component: AdminBillingComponent },
  { path: "admin-virtual-reality", component: AdminVirtualRealityComponent },
  { path: "admin-notifications", component: AdminNotificationsComponent },
  { path: "admin-profile", component: AdminProfileComponent },
  { path: "admin-signin", component: AdminSigninComponent },
  { path: "admin-signup", component: AdminSignupComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
