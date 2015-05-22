</// <reference path="typings/angular2/angular2.d.ts">

import {Component, View, bootstrap, For} from 'angular2/angular2';

@Component({selector:'todo-list'})
@View({
	templateUrl: 'todo-partial.html',
	directives: [For]
})
class TodoList{
	todos: Array<string>;
	constructor(){
		this.todos = ["Bike riding", "Close word"];
	}
	addTodo(todo: string){
		this.todos.push(todo);
	}
	doneTyping($event){
		$event.getPreventDefault();
		if($event.which === 13){
			this.addTodo($event.target.values);
			$event.target.value = null;
		}
	}
}

bootstrap(TodoList);