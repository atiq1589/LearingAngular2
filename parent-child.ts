</// <reference path="typings/angular2/angular2" />

import{Component, View, bootstrap} from 'angular2/angular2';


@Component({ selector: "child" })
@View({
	template: '<p> This is <i> {{message}}</i> </p>'
})
class Child {
	message: string;
	constructor() {
		this.message = "Child";
	}
}

@Component({
	selector: "parent"
})
@View({
	template: `
		<p> This is <b> {{message}} </b> </p>
		<child></child>
	`,
	directives: [Child]
})
class Parent {
	message: string;
	constructor() {
		this.message = "Parent";
	}
}


bootstrap(Parent);