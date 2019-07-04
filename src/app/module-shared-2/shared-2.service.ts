export class Shared2Service {

  val: number;

  constructor() {
    this.val = Math.round(Math.random() * 1000000);
    console.log(`Creating shared2 service: ${this.val}`)
  }
}
