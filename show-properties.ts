</// <reference path="typings/angular2/angular2.d.ts" >

import {Component, View, bootstrap, For, If} from 'angular2/angular2';

class FriendService {
	names: Array<string>
	constructor() {
		this.names = ["Tanvir", "Asif", "jahid", "Erfan"];
	}
}

@Component({
	selector: 'display',
	injectables: [FriendService]
})

@View({
	template: `
	 <p> My name: {{myName}} </p>
	 <p> Friends </p>
	 <ul>
	 	<li *for="#name of names">
		 	{{name}}
		</li>
	 </ul>
	 <p *if="names.length > 3"> You have many friends! </p>
	 <p *if="names.length <= 3"> You have only {{total}} friend(s) </p>
	 `,
	directives: [For, If]
})
class DisplayComponent {
	total: number;
	myName: string;
	names: Array<string>;
	constructor(friendsService:FriendService) {
		this.myName = "Atiq";
		this.names = friendsService.names;
		this.total = this.names.length;
	}
}

bootstrap(DisplayComponent);