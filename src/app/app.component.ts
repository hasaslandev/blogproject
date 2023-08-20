import { Component, HostListener, OnInit } from '@angular/core';
import * as $ from 'jquery';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title: string = 'blogproject';
  linkActive = '';


  ngOnInit(): void {

  }
  activeLinkId: string | null = null;

  handleLinkClick(linkId: string): void {
    this.activeLinkId = linkId;
  }

  isLinkActive(linkId: string): boolean {
    return this.activeLinkId === linkId;
  }

  @HostListener('window:scroll', ['$event'])
  onWindowScroll(event: any): void {
    const sections = document.querySelectorAll('section'); // Varsayılan olarak bölümleri seçiyoruz.

    sections.forEach((section: any) => {
      const sectionTop = section.offsetTop;
      const sectionBottom = sectionTop + section.clientHeight;

      if (window.scrollY >= sectionTop && window.scrollY < sectionBottom) {
        this.activeLinkId = section.getAttribute('id') + '-link';
      }
    });
  }


}
