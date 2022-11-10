import { MallardDuck, RedheadDuck } from "./ducks"
import { DuckCall, RubberDuck } from "./duckies"
import { Quackable } from "./Quackable"
import { GooseToDuckAdapter } from "./adapters"
import { Goose } from "../goose"
import {
  CountQuackMethodDecorator,
  quackCount,
  QuackCounter,
} from "./QuackCounter"
import { DuckFactory } from "./DuckFactory"
import { AbstractDuckFactory } from "./AbstractDuckFactory"

export class DuckSimulator {
  main = () => {
    const duckFactory: AbstractDuckFactory = new DuckFactory()
    const mallardDuck = duckFactory.createMallardDuck()
    const redheadDuck = duckFactory.createRedheadDuck()
    const duckCall = duckFactory.createDuckCall()
    const rubberDuck = duckFactory.createRubberDuck()
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

  // @CountQuackMethodDecorator
  simulate(duck: Quackable) {
    duck.quack()
  }
}
