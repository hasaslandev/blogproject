import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-blog-page',
  templateUrl: './blog-page.component.html',
  styleUrls: ['./blog-page.component.css']
})
export class BlogPageComponent {
  title: string = 'blogproject';
  linkActive = '';

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
