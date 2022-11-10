import { Observer } from "./Observer"
import { QuackObservable } from "./QuackObservable"

export class Quackologist implements Observer {
  update(duck: QuackObservable) {
    console.log("꽥꽥학자가 소리친다. ", `${duck.constructor.name}이 울었다!`)
  }
}
