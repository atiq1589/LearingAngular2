</// <reference path="typings/angular2/angular2.d.ts" >

import {Component, View, bootstrap} from 'angular2/angular2';

@Component({ selector: 'my-app1'})
@View({
	template: "<h1> Hello {{name}} </h1>"
})

class a2app{
	name: string;
	constructor(){
		this.name = "md. atiqul islam";
	}
}

bootstrap(a2app);
