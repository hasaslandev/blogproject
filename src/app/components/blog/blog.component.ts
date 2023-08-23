import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Blog } from 'src/app/Models/blog';
import { BlogService } from 'src/app/services/blog.service';
import * as $ from 'jquery';
import { ToastrService } from 'ngx-toastr';
import { CartService } from 'src/app/services/cart.service';


@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent {
  blogs: Blog[] = [];
  dataLoaded = false;
  filterText = "";



  constructor(private blogService: BlogService,
    private acivatedRoute: ActivatedRoute, //Aktifleştirilmiş root tarayıcıdaki üsstei urli okumamıza yarar
    private toasterService: ToastrService,
    private cartService: CartService
  ) { }
  ngOnInit(): void {
    this.acivatedRoute.params.subscribe(params => {
      if (params["categoryID"]) {
        this.getBlogByCategory(params["categoryID"])
      } else {
        this.getBlogs()
      }

    })
    this.getBlogs();

  }
  getBlogs() {
    this.dataLoaded = true;
    this.blogService.getBlogs().subscribe(response => {
      this.blogs = response.data
    })
  }
  getBlogByCategory(categoryID: number) {
    this.blogService.getBlogByCategory(categoryID).subscribe(response => {
      this.blogs = response.data
      this.dataLoaded = true;

    })
  }
  addToCard(blog: Blog) {
    if (blog.blogID === 2) {
      this.toasterService.error("Sepete Eklendi", "Bu ürün sepete ekelenemez!!!");
    } else {
      this.toasterService.success("Sepete Eklendi", blog.blogTitle);
      this.cartService.addToCart(blog);
    }
  }
}