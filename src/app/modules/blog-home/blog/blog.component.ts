import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-blog',
  standalone: true,
  imports: [],
  templateUrl: './blog.component.html',
  styleUrl: './blog.component.css'
})
export class BlogComponent implements OnInit {
  blogData: any;
  url: string = 'https://raw.githubusercontent.com/flyaway12345/HIMediaHub/main/src/app/modules/blog-home/postlist.json';
  public constructor(private http: HttpClient) {}



  ngOnInit(): void {
    this.http.get(this.url).subscribe(res => {
      this.blogData = res;
  });
  
}
}
