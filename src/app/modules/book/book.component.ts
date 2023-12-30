import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MarkdownService,MarkdownModule } from 'ngx-markdown';

@Component({
  selector: 'app-book',
  standalone: true,
  imports: [CommonModule,MarkdownModule],
  templateUrl: './book.component.html',
  styleUrl: './book.component.css'
})
export class BookComponent implements OnInit {

  bookData: any;
  url: string = 'https://raw.githubusercontent.com/flyaway12345/HIMediaHub/main/src/app/modules/book/postlist.json';
  srcURL:string ='https://raw.githubusercontent.com/flyaway12345/HIMediaHub/main/src/app/modules/book/posts/';
  markdown = `## Evan's Book Of Thoughts!
  ##### *Not a Manifesto I Promise*
  ---`;
  activeImage: string = ""
  public constructor(private http: HttpClient,private markdownService:MarkdownService) {

  }
  
  ngOnInit(): void {
    this.http.get(this.url).subscribe(res => {
      this.bookData = res;
  });
  }
  renderMarkdown(input:string){
    this.srcURL = 'https://raw.githubusercontent.com/flyaway12345/HIMediaHub/main/src/app/modules/book/posts/';
    this.srcURL = this.srcURL + input.replace(/\s+/g, '') + '.md';   
    this.http.get(this.srcURL,{responseType:'text'}).subscribe(data => this.markdown = data);

  }
}
