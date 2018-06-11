import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SettingsEmailComponent } from './settings-email.component';

describe('SettingsEmailComponent', () => {
  let component: SettingsEmailComponent;
  let fixture: ComponentFixture<SettingsEmailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SettingsEmailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SettingsEmailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
