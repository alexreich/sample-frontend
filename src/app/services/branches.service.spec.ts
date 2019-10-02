import { TestBed, fakeAsync } from '@angular/core/testing';
import { HttpClientModule } from '@angular/common/http';

import { Branch } from '../branches/branch';
import { BranchesService } from './branches.service';
import { HttpTestingController } from '@angular/common/http/testing';

describe('BranchService', () => {
  let service: BranchesService;
  let httpMock: HttpTestingController;
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule],
      providers: [HttpTestingController, BranchesService]
    });
    service = TestBed.get(BranchesService);
    httpMock = TestBed.get(HttpTestingController);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
  it('be able to retrieve branches from the API bia GET', async function () {
    await service.getBranches().subscribe(root => {
        const branches = root.data[0].Brand[0].Branch;
        expect(branches.length > 10).toBeTruthy();
        // done();
    });
  });
});
