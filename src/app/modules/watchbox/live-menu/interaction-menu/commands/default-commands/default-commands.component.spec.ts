import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DefaultCommandsComponent } from './default-commands.component';

describe('DefaultCommandsComponent', () => {
  let component: DefaultCommandsComponent;
  let fixture: ComponentFixture<DefaultCommandsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DefaultCommandsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DefaultCommandsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
