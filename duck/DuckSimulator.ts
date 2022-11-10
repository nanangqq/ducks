import { MallardDuck, RedheadDuck } from "./ducks"
import { DuckCall, RubberDuck } from "./duckies"
import { Quackable } from "./Quackable"
import { GooseToDuckAdapter } from "./adapters"
import { Goose } from "../goose"

export class DuckSimulator {
  main = () => {
    const mallardDuck = new MallardDuck()
    const redheadDuck = new RedheadDuck()
    const duckCall = new DuckCall()
    const rubberDuck = new RubberDuck()
    const gooseDuck = new GooseToDuckAdapter(new Goose())

    console.log("오리 시뮬레이션 게임")

    this.simulate(mallardDuck)
    this.simulate(redheadDuck)
    this.simulate(duckCall)
    this.simulate(rubberDuck)
    this.simulate(gooseDuck)
  }

  simulate = (duck: Quackable) => {
    duck.quack()
  }
}
