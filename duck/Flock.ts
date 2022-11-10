import { Quackable } from "./Quackable"

export class Flock implements Quackable {
  quackers: Quackable[] = []

  quack() {
    this.quackers.forEach((quackable) => quackable.quack())
  }

  add(quacker: Quackable) {
    this.quackers.push(quacker)
  }
}
