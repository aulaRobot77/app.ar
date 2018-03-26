import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReservaVacanteComponent } from './reserva-vacante.component';

describe('ReservaVacanteComponent', () => {
  let component: ReservaVacanteComponent;
  let fixture: ComponentFixture<ReservaVacanteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReservaVacanteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReservaVacanteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
