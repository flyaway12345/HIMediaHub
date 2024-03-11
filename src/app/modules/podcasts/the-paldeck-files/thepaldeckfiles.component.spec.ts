import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ThePaldeckFilesComponent } from './thepaldeckfiles.component';

describe('NerdNewsComponent', () => {
  let component: ThePaldeckFilesComponent;
  let fixture: ComponentFixture<ThePaldeckFilesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ThePaldeckFilesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ThePaldeckFilesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
