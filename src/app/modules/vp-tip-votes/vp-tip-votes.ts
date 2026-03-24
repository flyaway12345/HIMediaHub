import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-vp-tip-votes',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './vp-tip-votes.html',
  styleUrl: './vp-tip-votes.css'
})
export class VpTipVotes implements OnInit {

  poll: any;
  url: string = 'https://raw.githubusercontent.com/flyaway12345/Assets/refs/heads/main/HIMediaHub/json/VPTipVote.json';
  public constructor(private http: HttpClient) {}

  public orderById(): void {
    this.poll = this.poll.sort((a: { id: number; }, b: { id: number; }) => b.id - a.id);
    console.log("sorted");
  }
  ngOnInit(): void {
    this.http.get(this.url).subscribe(res => {
      this.poll = res;
      this.orderById();
  });
}
}
