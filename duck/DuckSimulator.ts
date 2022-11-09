import { MallardDuck } from './ducks';

export class DuckSimulator {
  simulate = () => {
    const mallardDuck = new MallardDuck();
    console.log('오리 시뮬레이션 게임');
    mallardDuck.quack();
  };
}
