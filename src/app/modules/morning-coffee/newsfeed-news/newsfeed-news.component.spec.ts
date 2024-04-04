import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewsfeedNewsComponent } from './newsfeed-news.component';

describe('NewsfeedNewsComponent', () => {
  let component: NewsfeedNewsComponent;
  let fixture: ComponentFixture<NewsfeedNewsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
    imports: [NewsfeedNewsComponent]
})
    .compileComponents();

    fixture = TestBed.createComponent(NewsfeedNewsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
