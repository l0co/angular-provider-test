import {Component, OnInit} from '@angular/core';
import {SharedService} from "../../module-shared/shared.service";

@Component({
  selector: 'app-first',
  templateUrl: './first.component.html',
  styleUrls: ['./first.component.scss']
})
export class FirstComponent implements OnInit {

  constructor(public sharedService: SharedService) { }

  ngOnInit() {}

}
