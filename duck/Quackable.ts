import { QuackObservable } from "../observer/QuackObservable"

export interface Quackable extends QuackObservable {
  quack: () => void
}

// export abstract class Quackable implements QuackObservable {
//   observable: Observable

//   constructor() {
//     this.observable = new Observable(this)
//   }

//   registerObserver(observer: Observer) {
//     this.observable.registerObserver(observer)
//   }

//   notifyObservers() {
//     console.log(this.observable)
//     this.observable.notifyObservers()
//   }

//   abstract quack(): void
// }
