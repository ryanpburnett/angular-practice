import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DannyBoyComponent } from './danny-boy.component';

describe('DannyBoyComponent', () => {
  let component: DannyBoyComponent;
  let fixture: ComponentFixture<DannyBoyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DannyBoyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DannyBoyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
