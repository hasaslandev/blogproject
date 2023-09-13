import { Component, OnInit } from '@angular/core';
import AOS from 'aos';
import { data } from 'jquery';
import { Skill } from 'src/app/Models/skill';
import { SkillService } from 'src/app/services/skill.service';

@Component({
  selector: 'app-skill',
  templateUrl: './skill.component.html',
  styleUrls: ['./skill.component.css']
})
export class SkillComponent implements OnInit {
  skills: Skill[] = [];
  dataLoaded = false;
  constructor(private skillService: SkillService) { }
  ngOnInit(): void {
    this.getSkills();
    AOS.init();
  }

  getSkills() {
    this.skillService.getSkills().subscribe(response => {
      this.skills = response.data
      this.dataLoaded = true;
      console.log(response.data);
    })
  }
}