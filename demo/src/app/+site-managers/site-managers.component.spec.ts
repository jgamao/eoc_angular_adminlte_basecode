import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SiteManagersComponent } from './site-managers.component';

describe('SiteManagersComponent', () => {
  let component: SiteManagersComponent;
  let fixture: ComponentFixture<SiteManagersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SiteManagersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SiteManagersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
