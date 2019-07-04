export class NonSharedService {

  val: number;

  constructor() {
    this.val = Math.round(Math.random() * 1000000);
    console.log(`Creating non-shared service: ${this.val}`)
  }
}
