define(function(require, exports, module){
    'use strict';

    var tasks = require('components/tasks');

    function _registerEventHandlers() {
        $("#new-task-button").on("click", tasks.add);
        $("#delete-all-button").on("click", tasks.clear);
        $("#save-button").on("click", tasks.save);
        $("#cancel-button").on("click", tasks.cancel);
        $("#task-list").on("click", ".delete-button", tasks.remove);
    }

    exports.init = function() {
        _registerEventHandlers();
        tasks.render();
    };
});
