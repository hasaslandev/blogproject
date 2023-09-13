import { AfterViewChecked, AfterViewInit, Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import * as marked from 'marked';
import * as Prism from 'prismjs';
import { NavigationEnd, Router } from '@angular/router';




@Component({
  selector: 'app-markdown',
  templateUrl: './markdown.component.html',
  styleUrls: ['./markdown.component.css']
})
export class MarkdownComponent implements OnInit, AfterViewInit {
  markdownContent: string;

  constructor(private router: Router) {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        setTimeout(() => {
          Prism.highlightAll();
        });
      }
    });
  } ngAfterViewInit(): void {
    setTimeout(() => {
      Prism.highlightAll();
    });
  }

  ngOnInit(): void {
    // Markdown içeriğini doğrudan yerel dosyadan alın
    // Not: Bu sadece yerel geliştirme ortamında çalışır, üretimde işe yaramaz
    fetch('assets/markdown/example.md')
      .then(response => response.text())
      .then(data => {
        this.markdownContent = marked.parse(data);
        Prism.highlightAll(); // Kod bloklarını renklendirin

      })
      .catch(error => {
        console.error('Markdown dosyası yüklenirken bir hata oluştu:', error);
      });

  }
}
