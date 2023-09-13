import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { response } from 'express';
import { Blog } from 'src/app/Models/blog';
import { BlogService } from 'src/app/services/blog.service';

@Component({
  selector: 'app-blogger-category',
  templateUrl: './blogger-category.component.html',
  styleUrls: ['./blogger-category.component.css']
})
export class BloggerCategoryComponent implements OnInit {
  blogs: Blog[] = [];
  categoryId: number;

  constructor(private blogService: BlogService, private root: ActivatedRoute) { }
  ngOnInit(): void {
    this.getBlogByCategory();
    this.loadBlogByCategory();
  }

  getBlogByCategory() {
    this.blogService.getBlogByCategory(+this.root.snapshot.paramMap.get('id')).subscribe(response => {
      this.blogs = response.data
      this.categoryId = this.blogs[0].categoryID;
    }
    )
  }
  loadBlogByCategory() {
    const blogId = +this.root.snapshot.paramMap.get('id');
    this.blogService.getBlogByCategory(blogId).subscribe(
      (response: any) => { // response değişkenine any türü atanıyor
        if (response.success) {
          this.blogs = response.data; // response.data'daki veriyi atıyoruz
          console.log('Blogs Data:', this.blogs);
        } else {
          console.error('Error:', response.message);
        }
      },
      error => {
        console.error('Error:', error);
      }
    )
  }

}
