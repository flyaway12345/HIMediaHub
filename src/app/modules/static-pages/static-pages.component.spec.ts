import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StaticPagesComponent } from './static-pages.component';

describe('StaticPagesComponent', () => {
  let component: StaticPagesComponent;
  let fixture: ComponentFixture<StaticPagesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StaticPagesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(StaticPagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
