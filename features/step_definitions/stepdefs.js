const assert = require('assert');
const { Given, When, Then } = require('cucumber');

function isItFriday(today){
	if(today === 'Friday'){
		return 'TGIF'
	}else{
		return 'Nope';
	}
}
 

Given('today is {string}', function (givenDay) {
// Write code here that turns the phrase above into concrete actions
	this.today = givenDay;
});



When('i ask whether it\'s Friday yet', function () {
// Write code here that turns the phrase above into concrete actions
	this.actualAnswer = isItFriday(this.today)
});


Then('i should be told {string}', function (expectedAnswer) {
// Write code here that turns the phrase above into concrete actions
	assert.equal(this.actualAnswer, expectedAnswer)
});

// Given('today is Friday',function(){
// 	this.today = 'Friday'
// });