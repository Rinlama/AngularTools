import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AirlinesComponent } from './airlines.component';

describe('AirlinesComponent', () => {
  let component: AirlinesComponent;
  let fixture: ComponentFixture<AirlinesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AirlinesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AirlinesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
