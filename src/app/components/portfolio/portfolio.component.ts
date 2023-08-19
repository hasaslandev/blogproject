import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import * as Isotope from 'isotope-layout';
import AOS from 'aos';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css']
})
export class PortfolioComponent implements OnInit {
  @ViewChild('portfolioContainer') portfolioContainer: ElementRef;
  isotope: Isotope;
  activeFilter: string = '*';

  constructor() { }

  ngOnInit(): void {
    AOS.init();

    // Sayfa içeriği ve resimler tamamen yüklendiğinde Isotope düzenlemesini başlat
    window.addEventListener('load', () => {
      this.isotope = new Isotope(this.portfolioContainer.nativeElement, {
        itemSelector: '.portfolio-item',
        layoutMode: 'fitRows'
      });

      // Tüm resimleri düzgün bir şekilde yerleştirin
      this.isotope.arrange({ filter: '*' });
    });
  }

  ngAfterViewInit(): void {
    this.isotope = new Isotope(this.portfolioContainer.nativeElement, {
      itemSelector: '.portfolio-item',
      layoutMode: 'fitRows'
    });
  }
  filterItems(filterValue: string): void {
    this.isotope.arrange({ filter: filterValue });
    this.activeFilter = filterValue;
  }

  isFiltered(filterValue: string): boolean {
    return this.isotope ? this.isotope.getFilteredItemElements().length > 0 : false;
  }


}
