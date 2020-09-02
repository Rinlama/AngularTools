import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PicsumComponent } from './picsum.component';

describe('PicsumComponent', () => {
  let component: PicsumComponent;
  let fixture: ComponentFixture<PicsumComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PicsumComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PicsumComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
