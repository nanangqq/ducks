import { Observable } from "../observer/Observable"
import { Observer } from "../observer/Observer"
import { Quackable } from "./Quackable"
import {
  CountQuackClassDecorator,
  CountQuackMethodDecorator,
} from "./QuackCounter"

// @CountQuackClassDecorator
export class MallardDuck implements Quackable {
  observable: Observable

  constructor() {
    this.observable = new Observable(this)
  }

  // @CountQuackMethodDecorator
  quack() {
    console.log("꽥꽥")
    this.notifyObservers()
  }

  registerObserver(observer: Observer) {
    this.observable.registerObserver(observer)
  }

  notifyObservers() {
    // console.log(this)
    this.observable.notifyObservers()
  }
}

// @CountQuackClassDecorator
export class RedheadDuck implements Quackable {
  observable: Observable

  constructor() {
    this.observable = new Observable(this)
  }

  quack() {
    console.log("꽥꽥")
    this.notifyObservers()
  }

  registerObserver(observer: Observer) {
    this.observable.registerObserver(observer)
  }

  notifyObservers() {
    this.observable.notifyObservers()
  }
}
