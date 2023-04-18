import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OtherpetComponent } from './otherpet.component';

describe('OtherpetComponent', () => {
  let component: OtherpetComponent;
  let fixture: ComponentFixture<OtherpetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OtherpetComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OtherpetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
