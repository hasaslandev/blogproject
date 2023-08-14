import { trigger } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validator, Validators } from '@angular/forms';

@Component({
  selector: 'app-blog-add',
  templateUrl: './blog-add.component.html',
  styleUrls: ['./blog-add.component.css']
})
export class BlogAddComponent implements OnInit {
  blogAddForm: FormGroup;

  constructor(private formBuilder: FormBuilder) {

  }
  ngOnInit(): void {
    this.createBlogAddForm();
  }
  createBlogAddForm() {
    this.blogAddForm = this.formBuilder.group({
      blogTitle: ["", Validators.required],
      blogRating: ["", Validators.required],
      categoryID: ["", Validators.required]

    })
  }
  add() {
    let blogModel = Object.assign({}, this.blogAddForm.value)
    console.log(blogModel)
  }

}
