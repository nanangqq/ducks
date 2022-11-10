export class QuackCounter {
  static numberOfQuacks: number = 0

  static increaseQuackCount = () => {
    this.numberOfQuacks++
  }

  static getQuackCount = () => {
    return this.numberOfQuacks
  }
}

export let quackCount = 0

export function CountQuackMethodDecorator(
  target: any,
  propertyKey: string,
  descriptor: PropertyDescriptor
) {
  const originMethod = descriptor.value

  const decoratedMethod = (...args) => {
    // const res = originMethod(args)
    // console.log(originMethod)
    const res = originMethod.apply(this, args)

    quackCount += 1
    QuackCounter.increaseQuackCount()
    // console.log(QuackCounter.getQuackCount())

    return res
  }
  // console.log(decoratedMethod)
  // decoratedMethod()

  descriptor.value = decoratedMethod
}

export function CountQuackClassDecorator<
  T extends { new (...args: any[]): {} }
>(constructor: T) {
  const quack = constructor.prototype.quack

  const decoratedQuack = (...args) => {
    quackCount += 1
    QuackCounter.increaseQuackCount()
    quack.apply(args)
  }

  constructor.prototype.quack = decoratedQuack
  return constructor
}
