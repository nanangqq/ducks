import { Quackable } from "./Quackable"
import { CountQuackClassDecorator } from "./QuackCounter"

@CountQuackClassDecorator
export class DuckCall implements Quackable {
  quack() {
    console.log("꽉꽉")
  }
}

@CountQuackClassDecorator
export class RubberDuck implements Quackable {
  quack() {
    console.log("삑삑")
  }
}
