import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { Branch } from './branch';
import { BranchesService } from '../services/branches.service';

@Component({
  selector: 'app-branches',
  templateUrl: './branches.component.html',
  providers: [BranchesService],
  styleUrls: ['./branches.component.css']
})
export class BranchesComponent implements OnInit {
  branches: Branch[] = new Array();
  editBranch: Branch; // the branch currently being edited
  query: string;

  constructor(private branchesService: BranchesService, private ref: ChangeDetectorRef) { }

  ngOnInit() {
    this.getBranches();
  }

  getBranches(): void {
    this.branchesService.getBranches()
      .subscribe(branches => {
        branches.data[0].Brand[0].Branch.forEach(b => {
          this.branches.push(b);
        });
      });
  }
  toggleShow(branch: Branch) {
    branch.Shown = !branch.Shown;
    this.ref.detectChanges();
  }

  search(searchTerm: string) {
    this.editBranch = undefined;
    if (searchTerm) {
      this.branchesService
        .searchBranches(searchTerm)
        .subscribe(branches => (this.branches = branches));
    }
  }
}
