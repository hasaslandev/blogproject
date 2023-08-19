import { Component, AfterViewInit } from '@angular/core';
import Typed from 'typed.js';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css']
})
export class HeroComponent implements AfterViewInit {
  ngAfterViewInit() {
    const options = {
      strings: ["Software Engineer", "Full Stack Web Developer", "Blogger", "Photographer"],
      typeSpeed: 50, // Yazı hızı
      backSpeed: 30, // Geri silme hızı
      loop: true // Döngü
    };

    const typed = new Typed('#typedText', options);
  }
}
