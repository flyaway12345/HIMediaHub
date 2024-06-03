import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MorningCoffeeComponent } from './morning-coffee.component';

describe('MorningCoffeeComponent', () => {
  let component: MorningCoffeeComponent;
  let fixture: ComponentFixture<MorningCoffeeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
    imports: [MorningCoffeeComponent]
})
    .compileComponents();

    fixture = TestBed.createComponent(MorningCoffeeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
