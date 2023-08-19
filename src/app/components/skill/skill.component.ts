import { Component, OnInit } from '@angular/core';
import AOS from 'aos';

@Component({
  selector: 'app-skill',
  templateUrl: './skill.component.html',
  styleUrls: ['./skill.component.css']
})
export class SkillComponent implements OnInit {

  ngOnInit(): void {
    AOS.init();
  }
}