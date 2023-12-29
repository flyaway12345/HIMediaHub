import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
 
import { ActivatedRoute } from '@angular/router';
 
@Component({
  selector: 'app-posts',
  standalone: true,
  imports: [],
  templateUrl: './posts.component.html',
  styleUrl: './posts.component.css'
})
export class PostsComponent implements OnInit {
  blogData: any;
  url: string = 'https://raw.githubusercontent.com/flyaway12345/HIMediaHub/main/src/app/modules/blog-home/postlist.json';
  public constructor(private http: HttpClient) {}
  openArticle: string ="helloworld";
  ngOnInit(): void {
    this.http.get(this.url).subscribe(res => {
      this.blogData = res;
  });
  
}
}
