import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MarkdownService,MarkdownModule } from 'ngx-markdown';

@Component({
  selector: 'app-blog',
  standalone: true,
  imports: [CommonModule,MarkdownModule],
  templateUrl: './blog.component.html',
  styleUrl: './blog.component.css'
})
export class BlogComponent implements OnInit {

  blogData: any;
  url: string = 'https://raw.githubusercontent.com/flyaway12345/HIMediaHub/f0d288ff9202c19a9c63e01dbc24d1ff966c9ea8/src/app/modules/blog-home/postlist.json';
  srcURL:string ='https://raw.githubusercontent.com/flyaway12345/HIMediaHub/main/src/assets/posts/';
  markdown = `## Welcome To The Blog!
  ---`;
  activeImage: string = ""
  public constructor(private http: HttpClient,private markdownService:MarkdownService) {

  }
  
  ngOnInit(): void {
    this.http.get(this.url).subscribe(res => {
      this.blogData = res;
  });
  }
  renderMarkdown(input:string,inputPicture:string){
    this.srcURL = this.srcURL + input.replace(/\s+/g, '') + '.md';
    this.http.get(this.srcURL,{responseType:'text'}).subscribe(data => this.markdown = data);
    this.activeImage = inputPicture;

  }
}
