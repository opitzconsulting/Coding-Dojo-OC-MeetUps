# A Short tutorial for Alexa Event 

I just put here the most valuable information for Node.js, Javascript, mongoDB and Alexa. I collected some data and examples from different sources. I wrote all sources the end of this document :) I tried to keep it really short that you get minimum knowledge to use node.js. I assume that you know already any program language so in some parts I just add only javascript code examples :) Of course you don't need to read all of this file but it can help you to understand what we are going to do during our meeting.

**Table of content** 
- [Node.js](#id-section1) 
- [Javascript code examples](#id-section2) 
- [Alexa](#id-section3) 

I uploaded this file to my github. This is version 1.0 ;) If you want to contribute and improve (change) something just let me know!
## Node.js <div id='id-section1'/> 

Node.js is a very powerful JavaScript-based framework/platform built on Google Chrome's JavaScript V8 Engine. It is used to develop I/O intensive web applications like video streaming sites, single-page applications, and other web applications. Node.js is open source, completely free, and used by thousands of developers around the world. 

### Features of Node.js
Following are some of the important features that make Node.js the first choice of software architects.
Asynchronous and Event Driven − All APIs of Node.js library are asynchronous, that is, non-blocking. It essentially means a Node.js based server never waits for an API to return data. The server moves to the next API after calling it and a notification mechanism of Events of Node.js helps the server to get a response from the previous API call.
Very Fast − Being built on Google Chrome's V8 JavaScript Engine, Node.js library is very fast in code execution.
Single Threaded but Highly Scalable − Node.js uses a single threaded model with event looping. Event mechanism helps the server to respond in a non-blocking way and makes the server highly scalable as opposed to traditional servers which create limited threads to handle requests. Node.js uses a single threaded program and the same program can provide service to a much larger number of requests than traditional servers like Apache HTTP Server.
No Buffering − Node.js applications never buffer any data. These applications simply output the data in chunks.

### Environment:
If you use, my VM (you will find everything here: 

(https://github.com/falent/Alexa_universal_skill_template_VM)

nodejs is already installed. If you decided to use your own PC, please download latest version of Node.js https://nodejs.org/en/download/ 
###Hello world
Create a js file named hello.js on your machine having the following code.
```javascript
console.log("Hello, World!")
```
Now execute main.js file using Node.js interpreter to see the result:

```
$ node main.js
```

If everything is fine with your installation, this should produce the following result:

```
$ Hello, World!
```
### Package.json
package.json is present in the root directory of any Node application/module and is used to define the properties of a package. Let's open package.json of my template alexa skill:

```json

{
  "name": "Alexa-template-for-Heroku",
  "version": "0.0.1",
  "description": "Quickstart template for a NodeJS Application, you can easily deploy it in heroku",
  "engines": {
    "node": "6.9.4"
  },
  "main": "dist/app/index.js",
  "scripts": {
    "start": "node dist/app/index.js",
    "serve": "node dist/app/index.js"
  },
  "repository": {
    "type": "git",
    "url": "t"
  },
  "keywords": [
    "nodejs"
  ],
  "author": "Tomasz Krajewski",
  "contributors": [
    {
      "name": "Tomasz Krajewski",
      "email": "Tomasz.Krajewski@opitz-consulting.com"
    }
  ],
  "license": "MIT",
  "devDependencies": {
	"alexa-verifier": "^0.3.6"
  },
  "dependencies": {
    "alexa-sdk": "^1.0.10",
    "aws-lambda-mock-context": "^3.1.1",
    "body-parser": "^1.17.2",
    "botkit": "^0.5.4",
    "express": "^4.15.3",
    "request": "^2.81.0",
    "mongoose": "^4.10.5",
    "mongodb": "^2.2.26",
    "ip": "1.1.5",
    "local-ipv4-address": "0.0.2"
  }
}

```
Thanks package.json you are able to install all node.js modules. You need only use a command beeing in a directory where package.json is.
```
$ npm install 
```
All required modules will be saved to your project directory.
### Module
If you want to use an additional module you just declare it in your variable in a JS script file:

```javascript
var greet = require(‘./greet);
```
That is version for your own module. 

You can also use tausend of ready modules. You can find them here:

https://www.npmjs.com/ 

Example code to import module:
```javascript
const fs = require('fs-extra')
```
### Export your own module from another file
If you want to export your module you need declare it like this:
```javascript
var greet = “Hello from me!”
module.exports = greet;
```
### Blocking Code vs non blocking code example
The most weird thing with node.js is non blocking code. Please compare 2 examples:

Create a text file named input.txt with the following content :

```javascript
This is an example from Tutorials Point is giving self learning content
to teach the world in simple and easy way!!!!!
```
Create a js file named blockingCode.js with the following code −
```javascript
var fs = require("fs");

var data = fs.readFileSync('input.txt');

console.log(data.toString());
console.log("Program Ended");
```
Now run the main.js to see the result −
```javascript
$ node main.js
```

Verify the Output.
```javascript
Tutorials Point is giving self learning content
to teach the world in simple and easy way!!!!!
Program Ended
```

It was a blocking code example
### Non-Blocking Code Example
Create nonBlockingCode.js

```javascript
var fs = require("fs");

fs.readFile('input.txt', function (err, data) {
   if (err) return console.error(err);
   console.log(data.toString());
});
console.log("Program Ended");
```
Now run the nonBlockingCode.js to see the result 
```
$ node nonBlockingCode.js
```
Verify the Output.
```
Program Ended
Tutorials Point is giving self learning content
to teach the world in simple and easy way!!!!!
```

These two examples explain the concept of blocking and non-blocking calls.

* The first example shows that the program blocks until it reads the file and then only it proceeds to end the program.

* The second example shows that the program does not wait for file reading and proceeds to print "Program Ended" and at the same time, the program without blocking continues reading the file.

Thus, a blocking program executes very much in sequence. From the programming point of view, it is easier to implement the logic but non-blocking programs do not execute in sequence. In case a program needs to use any data to be processed, it should be kept within the same block to make it sequential execution.

source of node.js tutorial:
https://www.tutorialspoint.com/nodejs/
I picked only the most valuable info for our event :)

## Javascript Code examples
I just copy some code examples from tutorial: https://www.tutorialspoint.com/javascript/ 
### JavaScript Variables
```javascript
var name = "Ali";
var money;
money = 2000.50;
```
### Variable Scope
```javascript
var myVar = "global"; // Declare a global variable


function checkscope( ) {
	var myVar = "local";  // Declare a local variable
             console.log(myVar);
}
```
### Operator and Description

+ +(Addition) Adds two operands Ex: A + B will give 30 

+  -(Subtraction) Subtracts the second operand from the first Ex: A - B will give -10 

+ *(Multiplication) Multiply both operands Ex: A * B will give 200 

+ / (Division) Divide the numerator by the denominator Ex: B / A will give 2 

+ % (Modulus) Outputs the remainder of an integer division Ex: B % A will give 0 

+ ++ (Increment) Increases an integer value by one Ex: A++ will give 11 

+ -- (Decrement) Decreases an integer value by one Ex: A-- will give 9

### Logical Operators
+ && (Logical AND) If both the operands are non-zero, then the condition becomes true. Ex: (A && B) is true.

+ || (Logical OR) If any of the two operands are non-zero, then the condition becomes true. Ex: (A || B) is true. 

+ ! (Logical NOT) Reverses the logical state of its operand. If a condition is true, then the Logical NOT operator will make it false. Ex: ! (A && B) is false.
Assignment Operators


### Operator and Description
+ = (Simple Assignment )
Assigns values from the right side operand to the left side operand
Ex: C = A + B will assign the value of A + B into C

+ += (Add and Assignment)
It adds the right operand to the left operand and assigns the result to the left operand.
Ex: C += A is equivalent to C = C + A

+ −= (Subtract and Assignment)
It subtracts the right operand from the left operand and assigns the result to the left operand.
Ex: C -= A is equivalent to C = C - A

+ *= (Multiply and Assignment)
It multiplies the right operand with the left operand and assigns the result to the left operand.
Ex: C *= A is equivalent to C = C * A

+ /= (Divide and Assignment)
It divides the left operand with the right operand and assigns the result to the left operand.
Ex: C /= A is equivalent to C = C / A

+ %= (Modules and Assignment)
It takes modulus using two operands and assigns the result to the left operand.
Ex: C %= A is equivalent to C = C % A

###if...else statement
```javascript
var age = 15;

if( age > 18 ){
   console.log("Qualifies for driving");
}

else{
   console.log("Does not qualify for driving");
}

```
### For Loop
```javascript
var count;
console.log ("Starting Loop");

for(count = 0; count < 10; count++){
   console.log ("Current Count : " + count );
   console.log ("");
}

console.log ("Loop stopped!");
```
### Declaring array
```javascript
var fruits = [ "apple", "orange", "mango" ];
fruits.length; //2

```
### Declaring function
```javascript
function sayHello(name)
{
	cosole.log("Hello "+name);
}

sayHello(“Tomasz”)

```
### Anonymous function

```javascript
var greetMe = function(){
	console.log(“hi”);
}

greetMe();
```

### Objects
You can see an object as a such block of values


```javascript
var person = {
	firstName: "Tomasz",
	lastName: "Krajewski",
	greet:	function(){
		console.log('Hello '+this.firstName + " " + this.lastName);
	}
};

person.greet();

console.log(person.firstName);
console.log(person['firstName'];

```

remember you can get your object value in the two ways:
person.firstName
person[‘firstName’]

### Node api 
https://nodejs.org/api/index.html
```javascript
var util = require(‘util’)
var greeting = util.format(‘Hello, %s’, name);
util.log(greeting)

```

### Class example
```javascript


‘use strict’

class Person {
	constructor(firstname, lastname){
		this.firstname = firstname;
		this.lastname = lastname;
}

greet(){
console.log(‘Hello ’+ this.firstname)
}

}
```
### Callbacks

callback is a function passed to some other function, which we assume will be invoked at some point. The function “call back” invoking the function you give it when it is done doing its work.

```javascript
function greet(callback) {
	console.log(‘Hello’);
	callback();
}
```
if Im done with my greet function I invoke callback function

take a look at an example:

```javascript
function greet(callback) {
	console.log(‘Hello’);
	var data = {
		name: ‘John’
	};
	callback(data);
}

greet(function(data){
	console.log(‘the callback was invoked’);
	console.log(data);
});
```
the function I invoked will invoke function I will give


### Files 

We can use synchronous convention: 

```javascript
var fs = require(‘fs’);

//it reads binary data
var greet = fs.readFileSync(__dirname+ ‘/greet.txt’, ‘utf-8’);

console.log(greet);
```
Do you see differences with asynchronous example? What will happens if you call greet variable? You checked both examples and you know why you got undefined in the second one you can read next pages ;) Otherwise please go to the page ...

```javascript
var fs = require('fs');

//it reads binary data
var greet = fs.readFile('greet.txt','UTF-8', function(err, data){
        console.log(data);
});

console.log(greet);

```

Error-first callback: Callbacks take an error object as their first parameter
null if no error, otherwise will contain an object defining the error. This is a standard so we know in what order to place our parameters for our callbacks.
Asynchronous programming
If you ddnt understand first example with file reading just relax and try to understand how asynchronous work.
let's take a look on php code which can be equivalent to any your language like java or python. Whatever

```php
//find my file and give me a handler so I can start operations
$file = fopen(‘test.txt’, ‘r’);
//just see it like a buffer ;)
$contents = fread($file, 100000);
echo $contents;
fclose($file)
```

It spends a lot of time doing nothing executing all instructions step by step

How could something works in Nodejs?

```javascript
var fs = require(‘fs’);

var file;
var buf = new Buffer(100000);

fs.open(‘test.txt’, ‘r’, (err, handle) => {

	file = handle;

});

fs.read(file, buf, 0, 100000, null, (err, length) =>{
	console.log(buf.toString())
fs.close(file, {} => {});
});

```

Let see another example:
```javascript
setTimeout( () => {
	console.log(“I have done my work);
}, 4000);
console.log(“Im waiting that everything will finish”);
```

Before you execute code, ask yourself what you get from the console first?
Easy because it was still something in the event queue


```javascript
var fs = require(‘fs’)

var file;

var buf = new Buffer(100000);

fs.open(‘test.txt’, ‘r’, (err, handle)=> {
	fs.read(handle, buf, 0, 100000, null, (err, length) => {
		console.log(buf.toString(‘utf8’, 0, length));
		fs.close(handle, () => {});
	});
});
```

In that we emulate code from listing …

1 it takes all parametrs and check everything
2. It push this function to event stack
	fs.read(handle, buf, 0, 100000, null, (err, length) => {
		console.log(buf.toString(‘utf8’, 0, length));
		fs.close(handle, () => {});
	});

### Declaring Objects
```javascript
var o1 = new Object();
var o2 = {}
var user = {name: “tom”, password:”Kraj”}
```

You can add variables:
```javascript
user[“fruit”] = “bananna”
```

```javascript
Object.keys(user).length
```
### How to declare arrays:
```javascript
var arr= new Array();
var arr2 = [];
```

### how to check array?
```javascript
Array.isArray(ar);
```

### add a new element to an array:
```javascript
arr3.push(‘new element’)
```

### Iteration 
```javascript
var user = {name: “tom”, surname:”krajewski”};
for (key in user){
	console.log(key);
}
```

### Easier "for" loop 
```javascript
var x = [“ala”,”ma”,”kota”];
for (value of x){
	console.log(value);
}
```
### Error handling
if you get use to syntax try catch… you need to forget it for NodeJS

do_something (par1, par2, par3, (error, result) =>{
	if (error){
	SOMETHING BAD HAPPEND HERE!
	}	
else{
do your stuff
}

});
Pattern how to solve problem with this:


```javascript

var fs = require(‘fs’);

function FileObject() {
	this.filename = “”;

this.file_exists = function (callback) {
	console.log(this.filename, ‘r’, function (err, handle) {
	if (err) {
		console.log(“Can’t open” + this.filename);
		callback(err);
		return;
	}

	fs.close(handle);
	callback(nulll, true);
});
}
}

var fo = new FileObject();

fo.filename = “some not exited name”;

fo.file_exists(err, exists) => {
	if (err) {
		console.log(“error opening file “ + JSON.stringify(err));
		return;
	}
});

```

why we get undefined?!

```javascript

var fs = require(‘fs’);

function FileObject() {
	this.filename = “”;

this.file_exists = function (callback) {
var self = this;
	console.log(self.filename, ‘r’, function (err, handle) {
	if (err) {
		console.log(“Can’t open” + self.filename);
		callback(err);
		return;
	}

	fs.close(handle);
	callback(nulll, true);
});
}
}

var fo = new FileObject();

fo.filename = “some not exited name”;

fo.file_exists(err, exists) => {
	if (err) {
		console.log(“error opening file “ + JSON.stringify(err));
		return;
	}
});

```
OR… with error functions

```javascript

var fs = require(‘fs’);

function FileObject() {
	this.filename = “”;

this.file_exists = function (callback) {
	console.log(this.filename, ‘r’, (err, handle)  => {
	if (err) {
		console.log(“Can’t open” + this.filename);
		callback(err);
		return;
	}

	fs.close(handle);
	callback(nulll, true);
});
}
}

var fo = new FileObject();

fo.filename = “some not exited name”;

fo.file_exists(err, exists) => {
	if (err) {
		console.log(“error opening file “ + JSON.stringify(err));
		return;
	}
});

```
Sources: 
https://www.tutorialspoint.com/javascript/
https://www.tutorialspoint.com/nodejs/ 

## MongoDb<div id='id-section3'/> 

Many concepts in MySQL have close analogs in MongoDB. This table outlines some of the common concepts in each system.
	
	
	
	Field
Joins	Embedded documents, linking

| MySQL        | MongoDB        |
| ------------- |:-------------:| 
|   Table    | Collection | 
| Row      | Document      | 
| Column| Field    |
| Joins| Embedded documents, linking    |

Query Language

**MySQL**
```
INSERT INTO users (user_id, age, status)
VALUES ('bcd001', 45, 'A')
```
**MongoDB**
```
db.users.insert({
  user_id: 'bcd001',
  age: 45,
  status: 'A'
})
```
**MySQL**
```
SELECT * FROM users
```
**MongoDB**
```
db.users.find()
```
**MySQL**
```
UPDATE users SET status = 'C'
WHERE age > 25
```
**MongoDB**
```
db.users.update(
  { age: { $gt: 25 } },
  { $set: { status: 'C' } },
  { multi: true }
)
```



## Alexa with node.js<div id='id-section4'/> 

I choose only the most interesting parts from:

https://www.npmjs.com/package/alexa-sdk

and added examples from my template

### Basic Project Structure
Your HelloWorld skill needs to have:

entry point to your skill where you'll import all packages needed for the skill, receive the events, set appId, set dynamoDB table (if you use AWS), register handlers and so on;
handler functions which handle each request.

### Set Entry Point
To do this within your own project simply create a file named index.js and add the following to it:

```javascript
const Alexa = require('alexa-sdk');
const SpeechOutput = require('./alexa/resources/speech-output');
const newSessionHandlers = require('./alexa/handlers/newSession.handlers');
const templateHandlers = require('./alexa/handlers/template.handlers');

	exports.handler = function(event, context, callback) {
	    const alexa = Alexa.handler(event, context, callback); 
	    alexa.resources = SpeechOutput;  //your multilanguage speach output file
	    alexa.registerHandlers(
	      newSessionHandlers,
	      templateHandlers //your handlers
	    );
	    alexa.execute();
	};
```
This will import alexa-sdk and set up an Alexa object for us to work with.

###  Implement Handler Functions
Next, we need to handle the events and intents for our skill. Alexa-sdk makes it simple to have a function fire an intent. You can implement the handers functions in index.js file just created or you can also write in separate files and import them later. I will show you an example how to do it in a separate files!

It is always good to have newSession.handlers. It means that your skill will starts always from here

**file path is “alexa/handlers/newSession.handlers”**

```javascript
const States = require('./states.const');

module.exports = {

    'NewSession': function() {
        this.emit('LaunchIntent');
    },

    'LaunchIntent': function() {
        //build response first using responseBuilder and then emit
        this.response.speak('What is your name?').listen('Please say that again?');;
        this.emit(':responseReady');
    },
    'NameIntent': function() {
        this.handler.state = States.NAME; 
        this.emitWithState('NameIntent');
    }
 };
```
We just write all our intents as functions which our user can execute every time he starts our skill

Lets see what they means:
```javascript
    'NewSession': function() {
        this.emit('LaunchIntent');
    }
 };
```
**NewSession:**
 
NewSession is always call when users open our skill. 
if we use:
```javascript
        this.emit('LaunchIntent');
```
we just put user to another state. Maybe now it makes no sense for you but we will add more code. Right now you know how to take your user from one function to another using emit method

**LaunchIntent:**

```javascript
    'LaunchIntent': function() {
        //build response first using responseBuilder and then emit
        this.response.speak('What is your name?').listen('Please say your name again');
        this.emit(':responseReady');
    }
```
you can define here what your user will hear first from alexa.

```javascript
  this.response.speak('What is your name?').listen('Please say your name again?');
```
Alexa will ask your user What is your name? and wait for an answer. If user won't respond alexa will ask him second time "Please say your name again?"

### More about alexa responses!
Build response first using responseBuilder

If you want to manually create your own responses, you can use this.response . this.response contains a series of functions, that you can use to set the different properties of the response. This allows you to take advantage of the Alexa Skills Kit's built-in audio and video player support. Once you've set up your response, you can just call this.emit(':responseReady') to send your response to Alexa. The functions within this.response are also chainable, so you can use as many as you want in a row. Here is full list example of creating response using responseBuilder.

--------Extra------
#### Response Syntax
****

Code | Description
------------ | -------------
this.response.speak(speechOutput);| Set the first speech output to speechOutput
this.response.listen(repromptSpeech);|Set the reprompt speech output to repromptSpeech, shouldEndSession to false. Unless this function is called, this.response will set shouldEndSession to true.
this.response.cardRenderer(cardTitle, cardContent, cardImage);| Add a standard card with cardTitle, cardContent and cardImage in response
this.response.linkAccountCard();|Add a linkAccount card in response, for more information, click here
this.response.askForPermissionsConsentCard(permissions);|Add a card to ask for perimission in response, for more information, click here
this.response.audioPlayer(behavior, url, token, expectedPreviousToken, offsetInMilliseconds);|Add an AudioPlayer directive with provided parameters in response.
this.response.audioPlayerPlay(behavior, url, token, expectedPreviousToken, offsetInMilliseconds);|Add an AudioPlayer directive using the provided parameters, and set AudioPlayer.Play as the directive type.
this.response.audioPlayerStop();|Add an AudioPlayer.Stop directive
this.response.audioPlayerClearQueue(clearBehavior);|Add an AudioPlayer.ClearQueue directive and set the clear behaviour of the directive.
this.response.renderTemplate(template);|Add a Display.RenderTemplate directive in response
this.response.hint(hintText, hintType);|Add a Hint directive in response
this.response.playVideo(videoSource metadata);|Add a VideoApp.Play directive in response
this.response.shouldEndSession(bool);|Set shouldEndSession manually


Alexa ask you: “What is your name?”
you answer: Monica

in that point alexa is looking for an defined Intent in your Interaction Model (you define it in the amazon developer portal, please read my presentation to get more info). You defined there that if someone say a name alexa should invoke NameIntent function

```javascript
    'NameIntent': function() {
        this.handler.state = States.TEMPLATE;
        this.emitWithState('NameIntent');
    }
```
On the head of that file we imported state file which contains:
```javascript
// states.const.js
module.exports = {
    NONE: '',
    NAME: '_NAME'
};
```
you just define here your skill states. Please trust me it helps you a lot later!

Alexa takes you to a “NAME” state

```javascript
        this.handler.state = States.TEMPLATE;
        this.emitWithState('NameIntent');
```
```javascript
Create a new file, the file path is “alexa/handlers/name.handlers”

const Alexa = require('alexa-sdk');
const States = require('./states.const');

module.exports = Alexa.CreateStateHandler(States.NAME, {

    'NameIntent': function() {
        var myName = this.event.request.intent.slots.firstname.value;
        this.response.speak("Hello "+ myName);
   
   }

});
```

What happens here? Alexa has here a new state “_NAME” and in that state it will answer you Hello Monica. It ends session. Congratulations, you wrote your first skill!

Lets extend it and get know more about alexa features!!

###Can Alexa speaks more languages? 
Your user can talk with your alexa skill with many languages. It comes more languages soon (05.01.2018 there are English (Australia) English (Canada) English (India) English (UK) English (US) German Japanese).

Lets extend first our skill for more languages and allow Alexa to speak more randomly. We will just use 3 American English, British English and German.

we need to write an additional file where we will have all strings in a one place:
path: “alexa/resources/speach-output.js”

```javascript
module.exports = {
  "en-US": {
      translation: {
          WELCOME: [
              "Hi, What is your name?", "Hello, introduce yourself please"
          ],
          REPEAT: [
              "Could you please repeat?"
          ],
          UNDEFINED: [
              "I havent understood you!"
          ],
          HELP_NEW_SESSION: [
              "It is an easy alexa demo skill, just tell alexa your name"
          ],
          HELP_TEMPERATURE: [
              "You can ask alexa here about the temperature in Tomasz's room"
          ],
          STOP_ANSWER: [
              "You decided to close my skill, why? Ok, have a nice day!"
          ],
          CANCEL_ANSWER: [
              "It is a pitty you canceled it"
          ],
          NAME:[
              "Hi %s, happy to meet you", "Hopla, %s what a pleasure to me!"
          ],
          TEMPERATURE:[
              "In Tomasz room, there is %s degree", "%s degree"
          ]         
      }
  },
  "en-GB": {
    translation: {
        WELCOME: [
            "Hi, What is your name?", "Hello, introduce yourself please"
        ],
        REPEAT: [
            "Could you please repeat?"
        ],
        UNDEFINED: [
            "I havent understood you!"
        ],
        HELP_NEW_SESSION: [
            "It is an easy alexa demo skill, just tell alexa your name"
        ],
        HELP_TEMPERATURE: [
            "You can ask alexa here about the temperature in Tomasz's room"
        ],
        STOP_ANSWER: [
            "You decided to close my skill, why? Ok, have a nice day!"
        ],
        CANCEL_ANSWER: [
            "It is a pitty you canceled it"
        ],
        NAME:[
            "Hi %s, happy to meet you", "Hopla, %s what a pleasure to me!"
        ],
        TEMPERATURE:[
            "In Tomasz room, there is %s degree", "%s degree"
        ]     
    }
  },
  "de-DE": {
    translation: {
        WELCOME: [
            "Hi, Wie heißen Sie?", "Hallo, sagen Sie mir Ihren Namen"
        ],
        REPEAT: [
            "Sagen Sie es noch mal"
        ],
        UNDEFINED: [
            "Nicht verstanden"
        ],
        HELP_NEW_SESSION: [
            "Sagen Sie einfach Ihren Namen"
        ],
        HELP_TEMPERATURE: [
            "Sie können fragen, welche Temperature in Tomas Zimmer gibt"
        ],
        STOP_ANSWER: [
            "Ich habe den Skill gestoppt"
        ],
        CANCEL_ANSWER: [
            "Sie haben den Skill abgebrochen"
        ],
        NAME:[
            "Hi %s, freu mich", "Hopla, %s gut von Ihnen was hören"
        ],
        TEMPERATURE:[
            "In Tomasz Zimmer gibt es %s Grad"
        ]     
    }
  }
}

```

What do you see here? It is just an object where you store all your alexa’s speachoutputs. Why do I store them in arrays? It is easy if I wish my skill can sometimes answer other that always the same sentence. How to do it?

let’s write a simple JS random function

create file:
**path:  “alexa/utils/speach-output.js”**

```javascript
module.exports = {
    pickRandom: function(myData) {
      let i;
      i = Math.floor(Math.random() * myData.length);
      return (myData[i]);
    }
};
```

yes it is a simple random function. It will take an array and randomly return an item

go back to your newSessionHandler file

```javascript
// newSession.handlers.js

const States = require('./states.const');
const SpeechOutputUtils = require('../utils/speech-output.utils');


module.exports = {

    'NewSession': function() {
        this.emit('LaunchIntent');
    },

    'LaunchIntent': function() {
      this.response.speak(SpeechOutputUtils.pickRandom(this.t('WELCOME')).listen(this.t('REPEAT')));
this.emit(':responseReady');


    },

    'NameIntent': function() {
        this.handler.state = States.TEMPLATE;
        this.emitWithState('NameIntent');
    }
 };
```

In that way we added multilanguage and Alexa will randomly pick defined strings

```javascript
this.response.speak(SpeechOutputUtils.pickRandom(this.t('WELCOME')).listen(this.t('REPEAT')));
        	this.emit(':responseReady');
```
in our case she will say:
A:  "Hi, What is your name?" 
or
A: "Hey ho, say your name please!"

### Built-in intents
Amazon want to help developers and delivers some help. You could assume you will always use some built-in intents as HelpIntent or StopIntntent. In that case you dont need to extend your interaction model utterances

They are a normal functions you can add to any alexa handler (state)
```javascript
    // Built-In Intents:

    'AMAZON.HelpIntent': function () {
        this.response.speak(SpeechOutputUtils.pickRandom(this.t('HELP')).listen(this.t('REPEAT')));
        this.emit(':responseReady');

    },

    'AMAZON.StopIntent': function () {
    	this.response.speak(SpeechOutputUtils.pickRandom(this.t('STOP_ANSWER')));
        this.emit(':responseReady');

    },

    'AMAZON.CancelIntent': function () {
    	this.response.speak(SpeechOutputUtils.pickRandom(this.t('CANCEL_ANSWER')));
        this.emit(':responseReady');
    }
```
We are almost ready with basic skill.
You are wondering probably why did I added states or launchIntent

Lets answer that instantly but first we are going to add 2 features:

+ An intent with your user can ask for your stack share price
+ To reserve a room in your big office

I don't want to complicate everything so please imagine your name is an identification thing (in a real world we would use user login)

Imagine you have your own marketing company and you write a skill. You want that both your emoployees and public users can have access to your skill

Public users can ask in your skill for stack share price and your employees can reserve a conference room

How to achieve that in alexa? That is one reason we use states. Another is that you can define in every state there is an another response when user ask alexa for help, or you can define easily that your users can ask alexa only certain things in given state. 

One more thing until I show you the wohole simple example. I show you how help your user to ask alexa shortly for information they want to have

In the previous examples you could ask only:

Alexa, start my company Skill 
and then alexa starts with welcome message. 

But we have a new Intent your user can ask about stock price. We want that user get instantly that price 

**Alexa, start myCompanySkill and tell stock price!**

In that case you get instantly price

Lets see the whole code. I will explain changes step by step:

**file:newSession.handlers.js**

```javascript
// newSession.handlers.js

const States = require('./states.const');
const SpeechOutputUtils = require('../utils/speech-output.utils');


const inNewSessionStartableIntents = [
    'SharePriceIntent'
];

module.exports = {

    'NewSession': function() {
        // Intent Request:
        if (this.event.request.type === 'IntentRequest') {
            const intentName = this.event.request.intent.name;
            if (inNewSessionStartableIntents.indexOf(intentName) > -1) {
                return this.emit(intentName);
            }
        }
        // else: Launch Request
        this.emit('LaunchIntent');
    },

    'LaunchIntent': function() {
    	
        this.response.speak(SpeechOutputUtils.pickRandom(this.t('WELCOME')).listen(this.t('REPEAT')));
        this.emit(':responseReady');

        
    },
    // Custom Intents:
    'NameIntent': function() {
        this.handler.state = States.NAME;
        this.emitWithState('NameIntent');
    },
    'SharePriceIntent': function() {
        this.handler.state = States.SHARE_PRICE;
        this.emitWithState('SharePriceIntent');
    },
    
    // Built-In Intents:

    'AMAZON.HelpIntent': function () {
        this.response.speak(SpeechOutputUtils.pickRandom(this.t('HELP')).listen(this.t('REPEAT')));
        this.emit(':responseReady');

    },

    'AMAZON.StopIntent': function () {
    	this.response.speak(SpeechOutputUtils.pickRandom(this.t('STOP_ANSWER')));
        this.emit(':responseReady');

    },

    'AMAZON.CancelIntent': function () {
    	this.response.speak(SpeechOutputUtils.pickRandom(this.t('CANCEL_ANSWER')));
        this.emit(':responseReady');
    },
    'Unhandled': function () {
        this.response.speak(SpeechOutputUtils.pickRandom(this.t('UNDEFINED')).listen(this.t('REPEAT')));
        this.emit(':responseReady');

    }
};



```

Let's take a closer look what has changed.

We added a table with intents which can be able start instantly

```javascript
const inNewSessionStartableIntents = [
    'StockPriceIntent'
];
```
And we are checking every time user starts our skill if he wanted to get know about stack share price. For example if user says:

**Alexa, start myCompanySkill and tell share price**

Our user will instantly take to the share price function and gets a price
In that way you can add any intents that should be executed instantly. It is good to save user time for that he gets simple information.

```javascript
    'NewSession': function() {
        // Intent Request:
        if (this.event.request.type === 'IntentRequest') {
            const intentName = this.event.request.intent.name;
            if (inNewSessionStartableIntents.indexOf(intentName) > -1) {
                return this.emit(intentName);
            }
        }
        // else: Launch Request
        this.emit('LaunchIntent');
    }
```
but if user give a his name (imagine during the event we will log in with amazon user id and provide here more logic)
he is in the employee skill part. Now he can book a room and after that check the temperature (we can extend it to control temperature in the room etc)

lets add a new intent to state name:
```javascript
const Alexa = require('alexa-sdk');
const States = require('./states.const');
const SpeechOutputUtils = require('../utils/speech-output.utils');


module.exports = Alexa.CreateStateHandler(States.NAME, {

    'NameIntent': function() {
        var myName = this.event.request.intent.slots.firstname.value;
        this.response.speak(this.t('NAME', myName)).listen('REPEAT');
   
    },

	'ReserveRoomIntent': function() {
	    this.handler.state = States.RESERVE_ROOM;
	    this.emitWithState('ReserveRoomIntent');
	},
    // Unhandled Intent:

    'Unhandled': function () {
        this.handler.state = States.NONE;
        this.emit('Unhandled'); // emit in newSession handlers
    },

    // Built-In Intents:

    'AMAZON.HelpIntent': function () {
        this.handler.state = States.NONE;
        this.emit(':ask', SpeechOutputUtils.pickRandom(this.t('HELP')));
    },

    'AMAZON.NoIntent': function() {
        this.handler.state = States.NONE;
        this.emit('AMAZON.CancelIntent');
    },

    'AMAZON.StopIntent': function () {
        this.handler.state = States.NONE;
        this.emit('AMAZON.StopIntent');
    },

    'AMAZON.CancelIntent': function () {
        this.handler.state = States.NONE;
        this.emit('AMAZON.CancelIntent');
    }

});
```

and add a new state RESERVE_ROOM state
```javascript
// states.const.js

module.exports = {
    NONE: '',
    NAME: '_NAME',
    RESERVE_ROOM: '_RESERVE_ROOM'
};
```


now we need to create a new handler 

file: reserveRoom.handlers.js
```javascript
const Alexa = require('alexa-sdk');
const States = require('./states.const');
const SpeechOutputUtils = require('../utils/speech-output.utils');

//we will ask API for that during our event :)

module.exports = Alexa.CreateStateHandler(States.RESERVE_ROOM, {


	'ReserveRoomIntent': function() {
		var roomName = this.event.request.intent.slots.room_name.value;
		var roomNumber = this.event.request.intent.slots.room_number.value;
	    this.respone.speak(this.t('RESERVE_ROOM')).listen(this.t('RESERVE_ROOM_QUESTION'))
	    this.emit(':responseReady');
	},
	'TemperatureRoomIntent': function() {
		
		this.handler.state = States.NONE;
		var temperature = 10;
	    this.respone.speak(this.t('TEMPERATURE_ROOM', temperature )).listen(this.t('RESERVE_ROOM_QUESTION'))
	    this.emit(':responseReady');
	},
	
    'AMAZON.YesIntent': function() {
    	this.emit(':TemperatureRoomIntent');
    }
		
	

});

```

in this handler user tell alexa which room name and number he wants to reserve. 
To keep it simple you always can reserve room so alexa ask you if you want to check temperature. If you say “yes” you will get room temperature 

the last step is to update our translations strings. **I updated only for US version**

```javascript
module.exports = {
  "en-US": {
      translation: {
          WELCOME: [
              "Hi, What is your name?", "Hello, introduce yourself please"
          ],
          REPEAT: [
              "Could you please repeat?"
          ],
          UNDEFINED: [
              "I havent understood you!"
          ],
          HELP_NEW_SESSION: [
              "It is an easy alexa demo skill, just tell alexa your name"
          ],
          HELP_TEMPERATURE: [
              "You can ask alexa here about the temperature in Tomasz's room"
          ],
          STOP_ANSWER: [
              "You decided to close my skill, why? Ok, have a nice day!"
          ],
          CANCEL_ANSWER: [
              "It is a pitty you canceled it"
          ],
          NAME:[
              "Hi %s, happy to meet you", "Hopla, %s what a pleasure to me!"
          ],
          RESERVE_ROOM:[
              "Congratulations, you have reserved a %s room number %s "
          ],
          RESERVE_ROOM_QUESTION: [
        	  "Do you want to check and control room temperature?"
          ],
          TEMPERATURE_ROOM:[
              "there is %s degree", "%s degree"
          ]
      }
  },
  "en-GB": {
    translation: {
        WELCOME: [
            "Hi, What is your name?", "Hello, introduce yourself please"
        ],
        REPEAT: [
            "Could you please repeat?"
        ],
        UNDEFINED: [
            "I havent understood you!"
        ],
        HELP_NEW_SESSION: [
            "It is an easy alexa demo skill, just tell alexa your name"
        ],
        HELP_TEMPERATURE: [
            "You can ask alexa here about the temperature in Tomasz's room"
        ],
        STOP_ANSWER: [
            "You decided to close my skill, why? Ok, have a nice day!"
        ],
        CANCEL_ANSWER: [
            "It is a pitty you canceled it"
        ],
        NAME:[
            "Hi %s, happy to meet you", "Hopla, %s what a pleasure to me!"
        ],
        TEMPERATURE:[
            "In Tomasz room, there is %s degree", "%s degree"
        ]     
    }
  },
  "de-DE": {
    translation: {
        WELCOME: [
            "Hi, Wie heißen Sie?", "Hallo, sagen Sie mir Ihren Namen"
        ],
        REPEAT: [
            "Sagen Sie es noch mal"
        ],
        UNDEFINED: [
            "Nicht verstanden"
        ],
        HELP_NEW_SESSION: [
            "Sagen Sie einfach Ihren Namen"
        ],
        HELP_TEMPERATURE: [
            "Sie können fragen, welche Temperature in Tomas Zimmer gibt"
        ],
        STOP_ANSWER: [
            "Ich habe den Skill gestoppt"
        ],
        CANCEL_ANSWER: [
            "Sie haben den Skill abgebrochen"
        ],
        NAME:[
            "Hi %s, freu mich", "Hopla, %s gut von Ihnen was hören"
        ],
        TEMPERATURE:[
            "In Tomasz Zimmer gibt es %s Grad"
        ]     
    }
  }
}
```

Ok, and now the most important thing to update your main index.js file:


That is folks! I hope you get basics of alexa node.js programming. If you have any problems or you find a mistake in that file please do not hesitate to contact me

Tomasz.Krajewski@opitz-consulting.com 

I hope we will meet in person soon!!

 






 
