import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminListContComponent } from './admin-list-cont.component';

describe('AdminListContComponent', () => {
  let component: AdminListContComponent;
  let fixture: ComponentFixture<AdminListContComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminListContComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminListContComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
