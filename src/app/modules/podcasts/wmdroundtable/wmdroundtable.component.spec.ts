import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WinstonMasterDuelRoundtableComponent } from './wmdroundtable.component';

describe('WinstonMasterDuelRoundtableComponent', () => {
  let component: WinstonMasterDuelRoundtableComponent;
  let fixture: ComponentFixture<WinstonMasterDuelRoundtableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
    imports: [WinstonMasterDuelRoundtableComponent]
})
    .compileComponents();

    fixture = TestBed.createComponent(WinstonMasterDuelRoundtableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
