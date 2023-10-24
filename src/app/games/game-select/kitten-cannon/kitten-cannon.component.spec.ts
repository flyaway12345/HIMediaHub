import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KittenCannonComponent } from './kitten-cannon.component';

describe('KittenCannonComponent', () => {
  let component: KittenCannonComponent;
  let fixture: ComponentFixture<KittenCannonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KittenCannonComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(KittenCannonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
