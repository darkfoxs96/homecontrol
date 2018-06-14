import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SettingsControlledsComponent } from './settings-controlleds.component';

describe('SettingsControlledsComponent', () => {
  let component: SettingsControlledsComponent;
  let fixture: ComponentFixture<SettingsControlledsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SettingsControlledsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SettingsControlledsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
