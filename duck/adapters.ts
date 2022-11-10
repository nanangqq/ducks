import { Goose } from "../goose"
import { Quackable } from "./Quackable"

export class GooseToDuckAdapter implements Quackable {
  goose: Goose

  constructor(goose: Goose) {
    this.goose = goose
  }

  quack = () => {
    this.goose.honk()
  }
}
