import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutAddComponent } from './components/about-add/about-add.component';
import { AboutComponent } from './components/about/about.component';
import { BlogAddComponent } from './components/blog-add/blog-add.component';
import { BlogHomeComponent } from './components/blog-home/blog-home.component';
import { BlogComponent } from './components/blog/blog.component';
import { CategoryComponent } from './components/category/category.component';
import { LoginComponent } from './components/login/login.component';
import { FactsComponent } from './components/facts/facts.component';
import { HeroComponent } from './components/hero/hero.component';
import { PortfolioComponent } from './components/portfolio/portfolio.component';
import { ResumeComponent } from './components/resume/resume.component';
import { SkillComponent } from './components/skill/skill.component';
import { StartComponent } from './components/start/start.component';

const routes: Routes = [
  { path: "", pathMatch: "full", component: BlogComponent },
  { path: "blogs", component: BlogComponent },
  { path: "blogs/category/:categoryID", component: BlogComponent },
  { path: "blogs/add", component: BlogAddComponent },
  { path: "abouts/add", component: AboutAddComponent },
  { path: "abouts", component: AboutComponent },
  { path: "login", component: LoginComponent },
  { path: "blogHome", component: BlogHomeComponent },
  { path: "hero", component: HeroComponent },
  { path: "facts", component: FactsComponent },
  { path: "skills", component: SkillComponent },
  { path: "resume", component: ResumeComponent },
  { path: "start", component: StartComponent },
  { path: "portfolio", component: PortfolioComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
