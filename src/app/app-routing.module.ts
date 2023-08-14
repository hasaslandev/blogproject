import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutAddComponent } from './components/about-add/about-add.component';
import { BlogAddComponent } from './components/blog-add/blog-add.component';
import { BlogHomeComponent } from './components/blog-home/blog-home.component';
import { BlogComponent } from './components/blog/blog.component';
import { CategoryComponent } from './components/category/category.component';
import { LoginComponent } from './components/login/login.component';

const routes: Routes = [
  { path: "", pathMatch: "full", component: BlogComponent },
  { path: "blogs", component: BlogComponent },
  { path: "blogs/category/:categoryID", component: BlogComponent },
  { path: "blogs/add", component: BlogAddComponent },
  { path: "abouts/add", component: AboutAddComponent },
  { path: "login", component: LoginComponent },
  { path: "blogHome", component: BlogHomeComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
