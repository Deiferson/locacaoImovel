import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProprietarioListaComponent } from './proprietario-lista.component';

describe('ProprietarioListaComponent', () => {
  let component: ProprietarioListaComponent;
  let fixture: ComponentFixture<ProprietarioListaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProprietarioListaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProprietarioListaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
