import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SettingsInterfacesComponent } from './settings-interfaces.component';

describe('SettingsInterfacesComponent', () => {
  let component: SettingsInterfacesComponent;
  let fixture: ComponentFixture<SettingsInterfacesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SettingsInterfacesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SettingsInterfacesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
