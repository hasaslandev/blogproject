import { AfterViewChecked, AfterViewInit, Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import * as marked from 'marked';
import * as Prism from 'prismjs';
import { NavigationEnd, Router } from '@angular/router';
import { HighlightService } from 'src/app/services/highlight-service.service';




@Component({
  selector: 'app-markdown',
  templateUrl: './markdown.component.html',
  styleUrls: ['./markdown.component.css']
})
export class MarkdownComponent implements OnInit, AfterViewChecked {
  markdownContent: string;
  highlighted: boolean = false;
  constructor(private highlightService: HighlightService) {

  }

  ngAfterViewChecked(): void {

    // Markdown içeriğini doğrudan yerel dosyadan alın
    // Not: Bu sadece yerel geliştirme ortamında çalışır, üretimde işe yaramaz
    if (this.markdownContent && !this.highlighted) {
      this.highlightService.highlightAll();
      this.highlighted = true;
    }
  }



  ngOnInit(): void {

    fetch('assets/markdown/example.md')
      .then(response => response.text())
      .then(data => {
        this.markdownContent = marked.parse(data);

      })
      .catch(error => {
        console.error('Markdown dosyası yüklenirken bir hata oluştu:', error);
      });
  }
}
