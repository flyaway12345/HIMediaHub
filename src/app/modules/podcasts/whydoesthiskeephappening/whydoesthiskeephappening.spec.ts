import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Whydoesthiskeephappening } from './whydoesthiskeephappening';

describe('Whydoesthiskeephappening', () => {
  let component: Whydoesthiskeephappening;
  let fixture: ComponentFixture<Whydoesthiskeephappening>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Whydoesthiskeephappening]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Whydoesthiskeephappening);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
