import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BuscarGrupoComponent } from './buscar-grupo.component';

describe('BuscarGrupoComponent', () => {
  let component: BuscarGrupoComponent;
  let fixture: ComponentFixture<BuscarGrupoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BuscarGrupoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BuscarGrupoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
