import { Observable } from "../observer/Observable"
import { Observer } from "../observer/Observer"
import { Quackable } from "./Quackable"

export class Flock implements Quackable {
  quackers: Quackable[] = []

  observable: Observable

  constructor() {
    this.observable = new Observable(this)
  }

  quack() {
    this.quackers.forEach((quackable) => quackable.quack())
  }

  add(quacker: Quackable) {
    this.quackers.push(quacker)
  }

  registerObserver(observer: Observer) {
    // this.observable.registerObserver(observer)
    this.quackers.forEach((quacker) => quacker.registerObserver(observer))
  }

  notifyObservers() {
    this.observable.notifyObservers()
  }
}
