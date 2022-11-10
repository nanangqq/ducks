import { Observable } from "../observer/Observable"
import { Observer } from "../observer/Observer"
import { Quackable } from "./Quackable"
import { CountQuackClassDecorator } from "./QuackCounter"

// @CountQuackClassDecorator
export class DuckCall implements Quackable {
  observable: Observable

  constructor() {
    this.observable = new Observable(this)
  }

  quack() {
    console.log("꽉꽉")
    this.notifyObservers()
  }
  registerObserver(observer: Observer) {
    this.observable.registerObserver(observer)
  }

  notifyObservers() {
    this.observable.notifyObservers()
  }
}

// @CountQuackClassDecorator
export class RubberDuck implements Quackable {
  observable: Observable

  constructor() {
    this.observable = new Observable(this)
  }

  quack() {
    console.log("삑삑")
    this.notifyObservers()
  }

  registerObserver(observer: Observer) {
    this.observable.registerObserver(observer)
  }

  notifyObservers() {
    this.observable.notifyObservers()
  }
}
