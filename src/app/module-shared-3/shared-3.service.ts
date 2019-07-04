import {Injectable} from "@angular/core";
import {ModuleShared3Module} from "./module-shared-3.module";

@Injectable({providedIn: ModuleShared3Module})
export class Shared3Service {

  val: number;

  constructor() {
    this.val = Math.round(Math.random() * 1000000);
    console.log(`Creating shared3 service: ${this.val}`)
  }
}
