import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-start',
  templateUrl: './start.component.html',
  styleUrls: ['./start.component.css']
})

export class StartComponent {
  cards = [
    {
      type: 'anonymous',
      iconClass: 'bx bx-home',
      title: 'Anonymous User',
      description: 'Yorum yazamazsınız!!!'
    },
    {
      type: 'member',
      iconClass: 'bx bx-user',
      title: 'Member User',
      description: 'Yorum yazabilirsiniz...'
    },
    {
      type: 'admin',
      iconClass: 'bx bx-shield',
      title: 'Admin User',
      description: 'Tüm Kontroller'
    }
  ];

  selectedCard: any;

  selectCard(cardType: string) {
    this.selectedCard = this.cards.find(card => card.type === cardType);
  }
}