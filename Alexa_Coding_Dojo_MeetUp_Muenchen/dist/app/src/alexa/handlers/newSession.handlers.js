// newSession.handlers.js

const States = require('./states.const');
const SpeechOutputUtils = require('../utils/speech-output.utils');

//const User = require('../models/user');




const inNewSessionStartableIntents = [
    'SharePriceIntent'
];

module.exports = {

    'NewSession': function() {

        /*
        // Intent Request:
        if (this.event.request.type === 'IntentRequest') {
            const intentName = this.event.request.intent.name;
            if (inNewSessionStartableIntents.indexOf(intentName) > -1) {
                return this.emit(intentName);
            }
        }
        // else: Launch Request
        */
        this.emit('LaunchIntent');
    },

    'LaunchIntent': function() {

        this.response.speak("Alexa will say that ")
            .listen("and repeat after 8 seconds this if she doesnt get your answer");

        this.emit(':responseReady');

/*
        This code is if you would like to use multilanguage and random function

        this.response.speak(SpeechOutputUtils.pickRandom(this.t('WELCOME')))
            .listen(SpeechOutputUtils.pickRandom(this.t('REPEAT')));
        this.emit(':responseReady');*/


    },
    // Custom Intents:
    'FindDepartmentIntent': function() {
        this.handler.state = States.DEPARTMENT;
        this.emitWithState('FindDepartmentIntent');
    },
    'ContactIntent': function() {
        this.response.speak("Our department is here where it is and has no phone number!!  ")
            .listen("do you want something elsee?");
        this.emit(':responseReady');
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
