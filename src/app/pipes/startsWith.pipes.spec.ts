import { TestBed, async } from '@angular/core/testing';

import { StartsWithPipe } from './startsWith.pipes';

describe('StartsWithPipe', () => {
  let pipe: StartsWithPipe; 
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        StartsWithPipe
      ],
    }).compileComponents();
    pipe = new StartsWithPipe();
  }));

  it('providing no value returns fallback', () => {
    const testBranches = [{PostalAddress: {TownName: 'foo'}}];
    expect(pipe.transform(testBranches, '')).toEqual(testBranches);
  });
});