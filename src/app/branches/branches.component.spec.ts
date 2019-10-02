import { TestBed, async } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { BranchesComponent } from './branches.component';
import { BranchesService } from '../services/branches.service';
import { StartsWithPipe } from '../pipes/startsWith.pipes';

describe('BranchesComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        BranchesComponent,
        StartsWithPipe
      ],
      imports: [ FormsModule, HttpClientModule ],
      providers: [ BranchesService ],
    }).compileComponents();
  }));

  it('should create the component', () => {
    const fixture = TestBed.createComponent(BranchesComponent);
    const component = fixture.debugElement.componentInstance;
    expect(component).toBeTruthy();
  });
});