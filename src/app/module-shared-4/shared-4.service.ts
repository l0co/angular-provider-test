import {Injectable} from "@angular/core";

@Injectable({providedIn: 'root'})
export class Shared4Service {

  val: number;

  constructor() {
    this.val = Math.round(Math.random() * 1000000);
    console.log(`Creating shared4 service: ${this.val}`)
  }
}
