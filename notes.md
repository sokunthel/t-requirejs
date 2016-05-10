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

The r.js optimizer allows us to have multiple files for development and a single file for release. It runs in Node.js. It can optionally minify the output files.
