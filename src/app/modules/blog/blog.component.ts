import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { MarkdownService,MarkdownModule } from 'ngx-markdown';
import { LiveMobileComponent } from "../../app/header/live/live-mobile/live-mobile.component";
import { DiscordComponent } from "../../app/header/discord/discord.component";
@Component({
  selector: 'app-blog',
  standalone: true,
  imports: [CommonModule, MarkdownModule,
    RouterOutlet,
    RouterLink,
    RouterLinkActive, LiveMobileComponent, DiscordComponent],
  templateUrl: './blog.component.html',
  styleUrl: './blog.component.css'
})
export class BlogComponent implements OnInit {

  blogData: any;
  url: string = 'https://raw.githubusercontent.com/flyaway12345/Assets/refs/heads/main/json/postlist.json';
  srcURL:string ='https://raw.githubusercontent.com/flyaway12345/Assets/refs/heads/main/md/blog/';
  markdown = ``;
  activeImage: string = ""
  clear:boolean = true;
  videoURL:string = "";
  public constructor(private http: HttpClient,private markdownService:MarkdownService) {

  }
  public orderById(): void {
    this.blogData = this.blogData.sort((a: { id: number; }, b: { id: number; }) => b.id - a.id);
    console.log("sorted");
  }
  public orderByVisibility(): void {
    this.blogData = this.blogData.sort((a: { display: number; }, b: { display: number; }) => b.display - a.display);
    console.log("sorted");
  }
  ngOnInit(): void {
    this.http.get(this.url).subscribe(res => {
      this.blogData = res;
      this.orderByVisibility();
      this.orderById();
  });
  }
  getVideo(input:string){
    this.videoURL = input;
  }
  renderMarkdown(input:string){
    this.srcURL = 'https://raw.githubusercontent.com/flyaway12345/HIMediaHub/main/src/app/modules/blog/posts/';
    this.srcURL = this.srcURL + input.replace(/\s+/g, '') + '.md';
    this.http.get(this.srcURL,{responseType:'text'}).subscribe(data => this.markdown = data);
    this.clear = false;
  }
  onRefresh(){
    this.markdown = ``;
    this.clear = true;
  }
}
