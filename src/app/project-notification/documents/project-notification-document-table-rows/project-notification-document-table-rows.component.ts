import { Component, Input, Output, OnInit, EventEmitter, ChangeDetectorRef } from '@angular/core';

import { TableComponent } from 'app/shared/components/table-template/table.component';
import { TableObject } from 'app/shared/components/table-template/table-object';
import { Router, ActivatedRoute } from '@angular/router';
import { MatSnackBar } from '@angular/material';

@Component({
  selector: 'tbody[app-document-table-rows]',
  templateUrl: './project-notification-document-table-rows.component.html',
  styleUrls: ['./project-notification-document-table-rows.component.scss']
})

export class PnDocumentTableRowsComponent implements OnInit, TableComponent {
  @Input() data: TableObject;
  @Output() selectedCount: EventEmitter<any> = new EventEmitter();

  public documents: any;
  public paginationData: any;
  public activeLegislationYear: number;

  constructor(
    private router: Router,
    private snackBar: MatSnackBar
  ) { }

  ngOnInit() {
    this.documents = this.data.data;
    this.paginationData = this.data.paginationData;
    this.activeLegislationYear = this.data.extraData;
  }

  selectItem(item) {
    if (this.activeLegislationYear && item && this.activeLegislationYear !== item.legislation) {
      alert('To use multi-edit, please select documents with the same legislation year.');
      return;
    }
    item.checkbox = !item.checkbox;
    let count = 0;
    this.documents.map(doc => {
      if (doc.checkbox === true) {
        count++;
        if (!this.activeLegislationYear) {
          this.activeLegislationYear = doc.legislation;
        }
      }
    });
    if (count === 0) {
      this.activeLegislationYear = null;
    }
    this.selectedCount.emit({ count, activeLegislationYear: this.activeLegislationYear });
  }

  goToItem(item) {
    this.activeLegislationYear = 0;
    // This happens when the api has not done the lookup on the project id
    // And we get just the string back and not the project object
    if (item.project && typeof item.project === 'object' && '_id' in item.project) {
      this.router.navigate(['pn', item.project._id, 'project-notification-documents', 'detail', item._id]);
    } else {
      this.snackBar.open('Uh-oh, couldn\'t open document', 'Close');
    }
  }
}
