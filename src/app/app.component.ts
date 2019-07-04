import {Component} from '@angular/core';
import {SharedService} from "./module-shared/shared.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angular-provider-test-two';

  constructor(public sharedService: SharedService) {
  }
}
