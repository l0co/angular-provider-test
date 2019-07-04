export class SharedService {

  val: number;

  constructor() {
    this.val = Math.round(Math.random() * 1000000);
    console.log(`Creating shared service: ${this.val}`)
  }
}
