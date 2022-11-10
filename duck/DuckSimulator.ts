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
import { Flock } from "./Flock"
import { MallardDuck } from "./ducks"

export class DuckSimulator {
  main = () => {
    const duckFactory: AbstractDuckFactory = new DuckFactory()
    const mallardDuck: Quackable = duckFactory.createMallardDuck()
    const redheadDuck: Quackable = duckFactory.createRedheadDuck()
    const duckCall: Quackable = duckFactory.createDuckCall()
    const rubberDuck: Quackable = duckFactory.createRubberDuck()
    const gooseDuck: Quackable = new GooseToDuckAdapter(new Goose())

    console.log("오리 시뮬레이션 게임")

    const flockOfDucks = new Flock()
    flockOfDucks.add(mallardDuck)
    flockOfDucks.add(redheadDuck)
    flockOfDucks.add(duckCall)
    flockOfDucks.add(rubberDuck)

    const flockOfMallards = new Flock()
    flockOfMallards.add(new MallardDuck())
    flockOfMallards.add(new MallardDuck())
    flockOfMallards.add(new MallardDuck())
    flockOfMallards.add(new MallardDuck())

    flockOfDucks.add(flockOfMallards)

    console.log("전체 무리")
    this.simulate(flockOfDucks)
    console.log("물오리 무리")
    this.simulate(flockOfMallards)

    console.log("거위 한마리")
    this.simulate(gooseDuck)

    console.log("오리가 우는 소리를 낸 횟수: ", QuackCounter.getQuackCount())
    // console.log("오리가 우는 소리를 낸 횟수: ", quackCount)
  }

  // @CountQuackMethodDecorator
  simulate(duck: Quackable) {
    duck.quack()
  }
}
