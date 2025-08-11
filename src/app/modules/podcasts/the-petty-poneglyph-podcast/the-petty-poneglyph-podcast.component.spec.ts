import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ThePettyPoneglyphPodcastComponent } from './the-petty-poneglyph-podcast.component';

describe('ThePettyPoneglyphPodcastComponent', () => {
  let component: ThePettyPoneglyphPodcastComponent;
  let fixture: ComponentFixture<ThePettyPoneglyphPodcastComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ThePettyPoneglyphPodcastComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ThePettyPoneglyphPodcastComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
