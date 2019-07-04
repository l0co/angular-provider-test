import {Component, OnInit} from '@angular/core';
import {SharedService} from "../../module-shared/shared.service";
import {Shared2Service} from "../../module-shared-2/shared-2.service";

@Component({
  selector: 'app-first',
  templateUrl: './first.component.html',
  styleUrls: ['./first.component.scss']
})
export class FirstComponent implements OnInit {

  constructor(public sharedService: SharedService, public shared2Service: Shared2Service) { }

  ngOnInit() {}

}
