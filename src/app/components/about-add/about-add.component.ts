import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { About } from 'src/app/Models/about';
import { Blog } from 'src/app/Models/blog';
import { AboutService } from 'src/app/services/about.service';

@Component({
  selector: 'app-about-add',
  templateUrl: './about-add.component.html',
  styleUrls: ['./about-add.component.css']
})

export class AboutAddComponent implements OnInit {
  abouts: About[] = [];
  dataLoaded = false;
  getAbouts() {
    this.aboutService.getAbouts().subscribe(response => {
      this.abouts = response.data
      this.dataLoaded = true;
    })
  }
  aboutAddForm: FormGroup;

  constructor(private formBuilder: FormBuilder, private aboutService: AboutService,
    private toasterService: ToastrService
  ) {

  }
  ngOnInit(): void {
    this.createAboutAddForm();
  }
  createAboutAddForm() {
    this.aboutAddForm = this.formBuilder.group({
      aboutContent1: ["", Validators.required],
      aboutContent2: ["", Validators.required],
      aboutImage1: ["", Validators.required],
      aboutImage2: ["", Validators.required]

    })
  }
  add() {
    if (this.aboutAddForm.valid) {
      let aboutModel = Object.assign({}, this.aboutAddForm.value)
      this.aboutService.add(aboutModel).subscribe(response => {
        this.toasterService.info("Ürün Eklendi", "Başarılı");
      }, responseError => {
        if (responseError.error.Errors.length > 0) {
          console.log(responseError.error.Errors)
        }
        for (let i = 0; i < responseError.error.Errors.length; i++) {
          this.toasterService.error(responseError.error.Errors[i].ErrorMessage, "Doğrulama hatası")
        }
      })
    } else {
      this.toasterService.info("Formunuz eksik", "Dikkat");
    }

  }
  addToCard(about: About) {
    if (about.aboutContent1 === "a") {
      this.toasterService.error("Harf hatası!!!", "İstenilen kelime ekli değil");
    }
    else {
      this.aboutService.add(about);
      this.toasterService.success("Hakkında kısmı başarılı bir şekilde eklenmiştir", "Hakkımda kısmı eklendi");
    }
  }

}