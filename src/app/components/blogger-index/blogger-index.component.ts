import { Component, OnInit } from '@angular/core';
import { Blog } from 'src/app/Models/blog';
import { BlogService } from 'src/app/services/blog.service';

@Component({
  selector: 'app-blogger-index',
  templateUrl: './blogger-index.component.html',
  styleUrls: ['./blogger-index.component.css']
})
export class BloggerIndexComponent implements OnInit {
  topFiveBlogPost: Blog[] = [];
  getAllBlogs: Blog[] = [];
  maxLength: number = 170;

  constructor(private blogService: BlogService) {


  }
  ngOnInit(): void {
    this.topFivePost();
    this.getAllBlog();
  }
  topFivePost() {
    this.blogService.topFivePost().subscribe(response => {
      this.topFiveBlogPost = response.data
    })
  }
  getAllBlog() {
    this.blogService.getBlogs().subscribe(
      (response: any) => {
        if (response.success) {
          this.getAllBlogs = response.data;
          console.log('Blogs Data:', this.getAllBlogs);
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
