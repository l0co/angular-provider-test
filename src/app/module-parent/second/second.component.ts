import {Component, OnInit} from '@angular/core';
import {SharedService} from "../../module-shared/shared.service";

@Component({
  selector: 'app-second',
  templateUrl: './second.component.html',
  styleUrls: ['./second.component.scss']
})
export class SecondComponent implements OnInit {

  constructor(public sharedService: SharedService) { }

  ngOnInit() {
  }

}
