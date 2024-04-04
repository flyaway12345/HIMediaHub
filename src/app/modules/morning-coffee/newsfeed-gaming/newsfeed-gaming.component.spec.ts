import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewsfeedGamingComponent } from './newsfeed-gaming.component';

describe('NewsfeedGamingComponent', () => {
  let component: NewsfeedGamingComponent;
  let fixture: ComponentFixture<NewsfeedGamingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
    imports: [NewsfeedGamingComponent]
})
    .compileComponents();

    fixture = TestBed.createComponent(NewsfeedGamingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
