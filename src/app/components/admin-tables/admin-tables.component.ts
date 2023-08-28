import { Component, OnInit } from '@angular/core';
import { About } from 'src/app/Models/about';
import { HttpClient } from '@angular/common/http';
import { tick } from '@angular/core/testing';
import { AboutService } from 'src/app/services/about.service';

@Component({
  selector: 'app-admin-tables',
  templateUrl: './admin-tables.component.html',
  styleUrls: ['./admin-tables.component.css']
})
export class AdminTablesComponent implements OnInit {
  abouts: About[] = [];
  dataLoaded = false;
  constructor(private aboutService: AboutService) { }

  ngOnInit(): void {
    this.getAbouts();
  }
  getAbouts() {
    this.aboutService.getAbouts().subscribe(response => {
      this.abouts = response.data
      this.dataLoaded = true;
    })
  }
}
