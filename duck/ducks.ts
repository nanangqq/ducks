import { Quackable } from "./Quackable"
import { CountQuackClassDecorator } from "./QuackCounter"

@CountQuackClassDecorator
export class MallardDuck implements Quackable {
  quack() {
    console.log("꽥꽥")
  }
}

@CountQuackClassDecorator
export class RedheadDuck implements Quackable {
  // quack = () => {
  //   console.log("꽥꽥")
  // }
  quack() {
    console.log("꽥꽥")
  }
}
