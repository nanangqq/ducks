import { MallardDuck, RedheadDuck } from "./ducks"
import { DuckCall, RubberDuck } from "./duckies"
import { Quackable } from "./Quackable"
import { GooseToDuckAdapter } from "./adapters"
import { Goose } from "../goose"
import { countQuack, quackCount, QuackCounter } from "./QuackCounter"

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

    console.log("오리가 우는 소리를 낸 횟수: ", QuackCounter.getQuackCount())
    // console.log("오리가 우는 소리를 낸 횟수: ", quackCount)
  }

  @countQuack
  simulate(duck: Quackable) {
    duck.quack()
  }
}
