import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { About } from 'src/app/Models/about';
import { AboutService } from 'src/app/services/about.service';

@Component({
  selector: 'app-admin-about-about-detail',
  templateUrl: './admin-about-about-detail.component.html',
  styleUrls: ['./admin-about-about-detail.component.css']
})
export class AdminAboutAboutDetailComponent implements OnInit {
  about: About;

  constructor(
    private route: ActivatedRoute,
    private aboutService: AboutService
  ) {
  }
  ngOnInit(): void {
    this.loadAbout();
  }
  loadAbout() {
    const aboutId = +this.route.snapshot.paramMap.get('id');
    this.aboutService.getById(aboutId).subscribe(
      (response: any) => { // response değişkenine any türü atanıyor
        if (response.success) {
          this.about = response.data; // response.data'daki veriyi atıyoruz
          console.log('About Data:', this.about);
        } else {
          console.error('Error:', response.message);
        }
      },
      error => {
        console.error('Error:', error);
      }
    );
  }

}
