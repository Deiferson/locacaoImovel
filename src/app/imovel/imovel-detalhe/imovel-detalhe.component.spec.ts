import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImovelDetalheComponent } from './imovel-detalhe.component';

describe('ImovelDetalheComponent', () => {
  let component: ImovelDetalheComponent;
  let fixture: ComponentFixture<ImovelDetalheComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ImovelDetalheComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ImovelDetalheComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
