import Application from '@ember/application';
import Resolver from 'ember-resolver';
import loadInitializers from 'ember-load-initializers';
import config from 'linting/config/environment';

export default class App extends Application {
  modulePrefix = config.modulePrefix;
  podModulePrefix = config.podModulePrefix;
  Resolver = Resolver;
      // a 4 space indented comment to be trimmed to 2 spaces by ember-lint
  foo = ()=> {
      'a 4 space indented string to be trimmed to 2 spaces by ember-lint'
  };
}

loadInitializers(App, config.modulePrefix);
