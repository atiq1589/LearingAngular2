</// <reference path="typings/angular2/angular2.d.ts" >

import {Component, View, bootstrap, For} from 'angular2/angular2';

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
@Component({
	selector: 'nav-bar'
})
@View({
	template:`
		<ul> 
			<li *for="#url of urlList"> <a href="view/{{url}}.html">{{url}}</a> 
			</li>
		</ul>
	`,
	directives: [For]
})
class UrlHelper{
	urlList: Array<string>;
	constructor(){
		this.urlList = ['parent-child','todo', 'parent-child'];
	}
}
bootstrap(a2app);
bootstrap(UrlHelper);
