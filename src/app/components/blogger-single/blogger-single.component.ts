import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Blog } from 'src/app/Models/blog';
import { Category } from 'src/app/Models/category';
import { BlogService } from 'src/app/services/blog.service';
import { CategoryService } from 'src/app/services/category.service';

@Component({
  selector: 'app-blogger-single',
  templateUrl: './blogger-single.component.html',
  styleUrls: ['./blogger-single.component.css']
})
export class BloggerSingleComponent implements OnInit {
  blog: Blog;
  category: Category;
  topTreeBlogPost: Blog[] = [];

  constructor(private blogService: BlogService, private route: ActivatedRoute, private categoryService: CategoryService
  ) {
  }
  ngOnInit(): void {
    this.getByBlogId();
    this.topTreePost();
  }
  getByBlogId() {
    const blogId = +this.route.snapshot.paramMap.get('id');
    this.blogService.getbyBlogId(blogId).subscribe(
      (response: any) => {
        if (response.success) {
          this.blog = response.data[0];
          this.categoryService.getById(this.blog.categoryID).subscribe(
            (response: any) => {
              if (response.success) {
                this.category = response.data;
              } else {
                console.error('Error:', response.message);
              }
            },
            error => {
              console.error('Error:', error);
            }
          );
        } else {
          console.error('Error:', response.message);
        }
      },
      error => {
        console.error('Error:', error);
      }
    )
  }
  topTreePost() {
    this.blogService.topTreePost().subscribe(response => {
      this.topTreeBlogPost = response.data
      console.log(this.topTreeBlogPost);
    })
  }
}
