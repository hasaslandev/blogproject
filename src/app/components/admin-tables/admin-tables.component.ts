import { Component, OnInit } from '@angular/core';
import { About } from 'src/app/Models/about';
import { HttpClient } from '@angular/common/http';
import { tick } from '@angular/core/testing';
import { AboutService } from 'src/app/services/about.service';
import { Category } from 'src/app/Models/category';
import { CategoryService } from 'src/app/services/category.service';

@Component({
  selector: 'app-admin-tables',
  templateUrl: './admin-tables.component.html',
  styleUrls: ['./admin-tables.component.css']
})
export class AdminTablesComponent implements OnInit {
  abouts: About[] = [];
  dataLoaded = false;
  categories: Category[] = [];
  currentCategory: Category = { categoryID: 0, categoryName: "" };
  constructor(private aboutService: AboutService, private categoryService: CategoryService) { }

  ngOnInit(): void {
    this.getAbouts();
    this.getCategories();

  }
  getAbouts() {
    this.aboutService.getAbouts().subscribe(response => {
      this.abouts = response.data
      this.dataLoaded = true;
    })
  }




  getCategories() {
    this.categoryService.getCategories().subscribe(response => {
      this.categories = response.data
    })
  }
  setCurrentCategory(category: Category) {
    this.currentCategory = category;
  }
  getCurrentCategoryClass(category: Category) {
    if (category == this.currentCategory) {
      return "list-group-item active"
    } else {
      return "list-group-item"
    }
  }
  getAllCategoryClass() {
    if (!this.currentCategory)
      return "list-group-item active"
    else
      return "list-group-item"
  }
}
