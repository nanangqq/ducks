import { Quackable } from "./Quackable"

export class DuckCall implements Quackable {
  quack = () => {
    console.log("꽉꽉")
  }
}

export class RubberDuck implements Quackable {
  quack = () => {
    console.log("삑삑")
  }
}
