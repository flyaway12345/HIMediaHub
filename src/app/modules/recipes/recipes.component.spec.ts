import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecipesComponent } from './recipes.component';

describe('PopeyesBiscutsComponent', () => {
  let component: RecipesComponent;
  let fixture: ComponentFixture<RecipesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
    imports: [RecipesComponent]
});
    fixture = TestBed.createComponent(RecipesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
