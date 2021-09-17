import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrHeadComponent } from './tr-head.component';

describe('TrHeadComponent', () => {
  let component: TrHeadComponent;
  let fixture: ComponentFixture<TrHeadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TrHeadComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TrHeadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
