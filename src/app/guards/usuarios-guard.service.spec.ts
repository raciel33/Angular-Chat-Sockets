import { TestBed } from '@angular/core/testing';

import { UsuariosGuardService } from './usuarios-guard.service';

describe('UsuariosGuardService', () => {
  let service: UsuariosGuardService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UsuariosGuardService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
