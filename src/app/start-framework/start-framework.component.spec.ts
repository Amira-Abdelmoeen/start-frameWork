import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StartFrameworkComponent } from './start-framework.component';

describe('StartFrameworkComponent', () => {
  let component: StartFrameworkComponent;
  let fixture: ComponentFixture<StartFrameworkComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [StartFrameworkComponent]
    });
    fixture = TestBed.createComponent(StartFrameworkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
