import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminListPresComponent } from './admin-list-pres.component';

describe('AdminListPresComponent', () => {
  let component: AdminListPresComponent;
  let fixture: ComponentFixture<AdminListPresComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminListPresComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminListPresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
