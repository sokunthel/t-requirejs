define(function(require, exports, module){
    'use strict';

    var $ = require('jquery');
    // var taskTemplate = '<li class="task"><input class="complete" type="checkbox" /> <input class="description" type="text" placeholder="Enter task description..." /> <button class="delete-button">Delete</button></li>';

    // Text Plugin
    // var taskTemplate = require('text!template/taskTemplate.html');

    // Handlebars Plugin
    var taskTemplate = require('hbs!template/taskTemplate');


    function renderTasks(tasks) {
        var elementArray = $.map(tasks, _renderTask);

        $("#task-list")
            .empty()
            .append(elementArray);
    }

    function renderNew() {
        var $taskList = $("#task-list");
        $taskList.prepend(_renderTask({}));
    }

    function _renderTask(task) {
        var $task = $(taskTemplate(task));
        return $task;
    }

    return {
        renderTasks: renderTasks,
        renderNew: renderNew
    };
});
