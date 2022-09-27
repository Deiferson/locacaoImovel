import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProprietarioDetalheComponent } from './proprietario-detalhe.component';

describe('ProprietarioDetalheComponent', () => {
  let component: ProprietarioDetalheComponent;
  let fixture: ComponentFixture<ProprietarioDetalheComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProprietarioDetalheComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProprietarioDetalheComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
