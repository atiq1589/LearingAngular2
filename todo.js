define(["require", "exports", 'angular2/angular2'], function (require, exports, angular2_1) {
    ; /// <reference path="typings/angular2/angular2.d.ts">
    var TodoList = (function () {
        function TodoList() {
            this.todos = ["Bike riding", "Colse word"];
        }
        TodoList.prototype.addTodo = function (todo) {
            this.todos.push(todo);
        };
        return TodoList;
    })();
    angular2_1.bootstrap(TodoList);
});
