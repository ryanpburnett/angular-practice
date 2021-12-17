import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewGeneratedComponentComponent } from './new-generated-component.component';

describe('NewGeneratedComponentComponent', () => {
  let component: NewGeneratedComponentComponent;
  let fixture: ComponentFixture<NewGeneratedComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewGeneratedComponentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NewGeneratedComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
