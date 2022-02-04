import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HowManyComponent } from './how-many.component';

describe('HowManyComponent', () => {
  let component: HowManyComponent;
  let fixture: ComponentFixture<HowManyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HowManyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HowManyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
