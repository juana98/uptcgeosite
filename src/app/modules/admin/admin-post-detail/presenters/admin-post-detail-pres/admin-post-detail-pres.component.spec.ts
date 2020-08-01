import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminPostDetailPresComponent } from './admin-post-detail-pres.component';

describe('AdminPostDetailPresComponent', () => {
  let component: AdminPostDetailPresComponent;
  let fixture: ComponentFixture<AdminPostDetailPresComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminPostDetailPresComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminPostDetailPresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
