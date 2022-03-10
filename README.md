# Twitter Tweet Bot

## About

This project is a Twitter messaging app that interacts with the Twitter API to allow the end user to specify and schedule Tweets they want to post to their Twitter account.

#### Installation

1. To get started you will need to install Node.js on your computer. [Node.js Download](https://nodejs.org/en/download/).

2. Next you will need to install Git to pull the code from my Github repository. [Git Download](https://git-scm.com/downloads).

3. You will also need to have a Github account as well as a SSH Key. [SSH Key Tutorial](https://docs.github.com/en/authentication/connecting-to-github-with-ssh/generating-a-new-ssh-key-and-adding-it-to-the-ssh-agent).

4. Once you have installed everything and are setup, you are ready to clone the repository. To clone the repository, open up a terminal and run `git clone https://github.com/kyledavis109/Twitter-Tweet-Bot` to clone the repository into a folder on your computer.

5. A `.env` file to store environmental variables for the API is required. These variables will be sensitive information so it's best to not share them with anyone. Create a `.env` file in the root directory of this file and store the environmental variables as follows:

```

CONSUMER_KEY=

CONSUMER_SECRET=

ACCESS_TOKEN=

ACCESS_TOKEN_SECRET=

```

7. You will now need to setup a Twitter Developer account to obtain a `CONSUMER_KEY`, `CONSUMER_SECRET`, `ACCESS_TOKEN` and an `ACCESS_TOKEN_SECRET` to communicate with the Spotify API. A guide and documentation is available at [Twitter Developer Docs](https://developer.twitter.com/en/docs/twitter-api/getting-started/getting-access-to-the-twitter-api).

8. Once you have created an app in the Twitter Developer Dashboard you can obtain your Consumer Key, Consumer Secret, Access Token and Access Token Secret from the app. Store your Consumer Key, Consumer Secret, Access Token and Access Token Secret in the specified `.env` variables (***This information is sensitive! Do not share it with anyone!***).

9. You will need a few npm packages installed to run this app. To install the packages, in the terminal navigate to the root folder of the repository and then run `npm i`.

***Congratulations! You've completed installation!***

#### To Start Application

1. In a terminal, navigate to the root folder of the repository and run `node messageBot`.

2. The terminal will prompt whether or not you would like to send a tweet. Type yes or no to be prompted to type your Tweet. After every Tweet you will be prompted with whether or not you would like to send another Tweet. After you have specified all of the Tweets you would like to send you can adjust the time between each Tweet send by adjusting the `await timer(15000)` inside the `start()` function to the amount of time you would like. By default it is set at 15000 milliseconds which equals 15 seconds.

### Support

If you need any help along the way getting this app started, please contact me by email at kyledavis109@gmail.com.