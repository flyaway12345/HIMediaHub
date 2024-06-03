import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NerdNewsComponent } from './nerdnews.component';

describe('NerdNewsComponent', () => {
  let component: NerdNewsComponent;
  let fixture: ComponentFixture<NerdNewsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
    imports: [NerdNewsComponent]
})
    .compileComponents();

    fixture = TestBed.createComponent(NerdNewsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
