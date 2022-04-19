const twit = require('twit');
const config = require('./config.js');
const inquirer = require('inquirer');

const Twitter = new twit(config);

// Posts tweet to Twitter.
const postTweet = (message) => {

    console.log('Sending tweet...');
    
    Twitter.post('statuses/update', {
        status: message
    }, (err, data, res) => {
        if (err) {
           return console.log(err.allErrors[0].message);
        }
        console.log('Tweet sent!');

    });
};

// Ask user what message they want to tweet.
async function askForTweets() {
    try {
        const answers = await inquirer.prompt([
            {
                type: 'input',
                message: 'What would you like to tweet?',
                name: 'message',
                validate(answer) {
                    if (answer.length < 1) {
                        return 'Cannot be empty.'
                    }
                    return true
                }
            }
        ])
        return answers.message
    } catch(err) {
        if (error.isTtyError) {
            'Your console environment is not supported!'
        } else {
            console.log(error)
        }
    }
}

// Asks the user if they have more messages they want to tweet.
async function moreMessages() {
    try {
        // Asks user if they would like to add another tweet.
        const answers = await inquirer.prompt([
            {
                type: 'list',
                message: 'Would you like to add another tweet?',
                name: 'answer',
                choices: ['Yes', 'No'],
            }
        ])
        return answers.answer
    } catch(err) {
        if (error.isTtyError) {
            'Your console environment is not supported!'
        } else {
            console.log(error)
        }
    }
}

async function start() {
    try {
        // This is where specified tweet by the user is pushed to to be posted.
        let messages = []; 
        while (true) {
            // Ask the user if they would like to tweet and if so what message.
            const answer = await askForTweets()
            messages.push(answer)

            // Ask if the user wants to add more messages.
            const moreMessagesAnswer = await moreMessages()
            if (moreMessagesAnswer === 'No') {
                break
            }
        }

        // Adds amount of delay between each tweet in miliseconds.
        const timer = ms => new Promise(res => setTimeout(res, ms))
        // Loops through messages variable array and passes each tweet into the postTweet function.
        for (tweet of messages) {
            postTweet(tweet)
            // Set amount of time you want between each tweet. 
            // ex. await timer(15000) 15000 miliseconds = 15 seconds.
            await timer(15000)
        }
    } catch(err) {
        console.log(err)
    }
}

start()