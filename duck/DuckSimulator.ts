import { MallardDuck, RedheadDuck } from "./ducks"
import { DuckCall, RubberDuck } from "./duckies"
import { Quackable } from "./Quackable"

export class DuckSimulator {
  main = () => {
    const mallardDuck = new MallardDuck()
    const redheadDuck = new RedheadDuck()
    const duckCall = new DuckCall()
    const rubberDuck = new RubberDuck()

    console.log("오리 시뮬레이션 게임")

    this.simulate(mallardDuck)
    this.simulate(redheadDuck)
    this.simulate(duckCall)
    this.simulate(rubberDuck)
  }

  simulate = (duck: Quackable) => {
    duck.quack()
  }
}
