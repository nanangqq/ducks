import { AbstractDuckFactory } from "./AbstractDuckFactory"
import { DuckCall, RubberDuck } from "./duckies"
import { MallardDuck, RedheadDuck } from "./ducks"

export class DuckFactory extends AbstractDuckFactory {
  createMallardDuck = () => {
    return new MallardDuck()
  }
  createRedheadDuck = () => {
    return new RedheadDuck()
  }
  createDuckCall = () => {
    return new DuckCall()
  }
  createRubberDuck = () => {
    return new RubberDuck()
  }
}
