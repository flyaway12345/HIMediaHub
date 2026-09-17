import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PatreonRedirect } from './patreon-redirect';

describe('PatreonRedirect', () => {
  let component: PatreonRedirect;
  let fixture: ComponentFixture<PatreonRedirect>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PatreonRedirect]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PatreonRedirect);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
