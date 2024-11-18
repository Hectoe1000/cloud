import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CargaImgComponent } from './carga-img.component';

describe('CargaImgComponent', () => {
  let component: CargaImgComponent;
  let fixture: ComponentFixture<CargaImgComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CargaImgComponent]
    });
    fixture = TestBed.createComponent(CargaImgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
