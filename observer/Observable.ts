import { Observer } from "./Observer"
import { QuackObservable } from "./QuackObservable"

export class Observable implements QuackObservable {
  observers: Observer[] = []
  duck: QuackObservable

  constructor(duck: QuackObservable) {
    this.duck = duck
  }

  registerObserver(observer: Observer) {
    this.observers.push(observer)
  }

  notifyObservers() {
    this.observers.forEach((observer) => observer.update(this.duck))
  }
}
