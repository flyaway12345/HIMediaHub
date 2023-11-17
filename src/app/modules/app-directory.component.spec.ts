import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppDirectoryComponent } from './app-directory.component';

describe('AppDirectoryComponent', () => {
  let component: AppDirectoryComponent;
  let fixture: ComponentFixture<AppDirectoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AppDirectoryComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AppDirectoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
