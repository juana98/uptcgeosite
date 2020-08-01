import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminPostDetailContComponent } from './admin-post-detail-cont.component';

describe('AdminPostDetailContComponent', () => {
  let component: AdminPostDetailContComponent;
  let fixture: ComponentFixture<AdminPostDetailContComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminPostDetailContComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminPostDetailContComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
