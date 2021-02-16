import Route from '@ember/routing/route';

export default class FooRoute extends Route {

  constructor() {
    super(...arguments);
    console.log('line n°4');
    debugger;
    console.log('line n°5');
  }


}
