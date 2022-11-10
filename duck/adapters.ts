import { Goose } from "../goose"
import { Observable } from "../observer/Observable"
import { Observer } from "../observer/Observer"
import { Quackable } from "./Quackable"

export class GooseToDuckAdapter implements Quackable {
  goose: Goose
  observable: Observable

  constructor(goose: Goose) {
    this.goose = goose
    this.observable = new Observable(this)
  }

  quack = () => {
    this.goose.honk()
  }

  registerObserver(observer: Observer) {
    this.observable.registerObserver(observer)
  }

  notifyObservers() {
    console.log(this.observable)
    this.observable.notifyObservers()
  }
}
