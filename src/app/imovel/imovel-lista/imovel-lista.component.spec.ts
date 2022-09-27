import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImovelListaComponent } from './imovel-lista.component';

describe('ImovelListaComponent', () => {
  let component: ImovelListaComponent;
  let fixture: ComponentFixture<ImovelListaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ImovelListaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ImovelListaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
