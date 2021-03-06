import {Component} from '@angular/core';
import {SharedService} from "./module-shared/shared.service";
import {Shared2Service} from "./module-shared-2/shared-2.service";
import {Shared3Service} from "./module-shared-3/shared-3.service";
import {Shared4Service} from "./module-shared-4/shared-4.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angular-provider-test-two';

  constructor(
    public sharedService: SharedService,
    public shared2Service: Shared2Service,
    public shared3Service: Shared3Service,
    public shared4Service: Shared4Service) {
  }
}
