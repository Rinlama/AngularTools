import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectdetailsComponent } from './projectdetails.component';

describe('ProjectdetailsComponent', () => {
  let component: ProjectdetailsComponent;
  let fixture: ComponentFixture<ProjectdetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProjectdetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProjectdetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
