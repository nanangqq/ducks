import { Quackable } from './Quackable';

export class MallardDuck implements Quackable {
  quack = () => {
    console.log('꽥꽥');
  };
}
