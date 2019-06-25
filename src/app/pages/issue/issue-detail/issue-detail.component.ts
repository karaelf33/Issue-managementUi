import {Component, OnInit, TemplateRef, ViewChild} from '@angular/core';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-issue-detail',
  templateUrl: './issue-detail.component.html',
  styleUrls: ['./issue-detail.component.scss']
})
export class IssueDetailComponent implements OnInit {

  @ViewChild('tpDateCell') tpIDateCell: TemplateRef<any>;

  id: number;
  private sub: any;

  constructor(private route: ActivatedRoute) {
  }

  ngOnInit() {
  }

}
