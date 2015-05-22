</// <reference path="typings/angular2/angular2.d.ts">

import {Component, View, bootstrap} from 'angular2/angular2';


class TodoList{
	todos: Array<string>;
	constructor(){
		this.todos = ["Bike riding", "Colse word"];
	}
	addTodo(todo: string){
		this.todos.push(todo);
	}
}

bootstrap(TodoList);