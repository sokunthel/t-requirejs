#### Basic:

* Include "_" in private variables/functions

ex:
```javascript
  var _privatevariable = true

  function _privatefunction(){
    ...
  }
```

---

#### Define:

```javascript
define({modulenameString}, {dependencyArray}, {callbackFunction})
```

ex:
```javascript
  define('tasks', ['jquery', 'taskData'], function($, td){
    ...
  });
```

##### Simplified commonjs wrapper
```javascript
define({modulenameString}, function(require, exports, module){
  var modulename1 = require({dependencyString});

  export.{publicMember} = {publicValue}
});
```

ex:
```javascript
  define('tasks', function(require, exports, module){
    var $ = require('jquery');
    var ts = require('taskData');

    ...

    export.init = function() {
      ...
    });
  });
```

---

#### Require:
```javascript
require({dependencyArray}, {callbackFunction})
```

ex:
```javascript
  require(['jquery', 'tasks'], function($, t){
    ...
  });
```

---

#### r.js Optimization

The r.js optimizer allows us to have multiple files for development and a single file for release. It runs in Node.js. It can optionally minify the output files.

ex:
```javascript
  node build/r.js -o build/build.config.js
```

---

#### Shim option

It is used when you want to depend on a third-party library that does not register itself with RequireJS on its own.

ex: if you have underscorejs included using a script element in the head of your HTML page, underscore will set the underscore character "_" in browser global scope to be the underscore library's main object. If you wanted to have an AMD module of your own code that lists underscore as a dependency, then what you will need to do is tell RequireJS that there is a module for underscore and that when you ask for that module, require should actually pull a variable from global scope. Use 'deps' if it has any dependency.

ex:
```javascript
  require.config({
    shim: {
      underscore: {
        exports: '_',
        deps: ['jquery']
      }
    }
  });

  require(['underscore'], function(_){
    ...
  });
```
The above code is equivalent to the following
```javascript
  define('underscore', ['jquery'], function($){
    return window['_'];
  }

  require(['underscore'], function(_){
    ...
  });
```

Another example - if underscore library file was named underscore-1.0.min.js, but we want the module to be named 'underscore', then we could use this configuration:
```javascript
  require.config({
    path: {
      underscore: 'underscore-1.0.min'
    },
    shim: {
      underscore: {
        exports: '_',
        deps: ['jquery']
      }
    }
  });

  require(['underscore'], function(_){
    ...
  });
```

---

#### Config option

A nice way to specify global app configuration in one place and have several modules use it.

```javascript
  require.config({
    config: {
      url: 'http://www.thelandnin.com'
    }
  });

  define('dataModule', ['module'], function(mod) {
    var url = mod.config().url;
  });
```

The other way to specify global app configuration is create a config.js file itself.

ex:
config.js
```javascript
  define([], {
    return {
      url: 'http://www.thelandnin.com'
    };
  });
```
other module (ex: datamodule.js)
```javascript
  define(['config'], function(config) {
    var url = config.url;
  });
```

---

### Plugins:

#### Text(https://github.com/requirejs/text)
```javascript
  require.config({
    paths: {
        'jquery': 'util/jquery-2.1.1.min',
        'text': 'util/text',
        'template': '../templates'
    }
  });

  require('text!template/template.html');
```

### Handlebars
```javascript
  npm i require-handlebars-plug

  require.config({
    paths: {
        'jquery': 'util/jquery-2.1.1.min',
        'hbs': '../../node_modules/require-handlebars-plugin/hbs',
        'template': '../templates'
    }
  });

  require('hbs!template/template');
```
