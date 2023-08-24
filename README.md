# socialmedia

This project involved building an API for a social network web application where users can share their thoughts, react to friends’ thoughts, and create a friend list using [Express.js] and [Mongoose] packages.

As there was no seed data provided, a simple dataset is produced using insomnia after having created an API in order to meet the following acceptance criteria.

## Acceptance Criteria

```md
GIVEN a social network API
WHEN I enter the command to invoke the application
THEN my server is started and the Mongoose models are synced to the MongoDB database
WHEN I open API GET routes in Insomnia for users and thoughts
THEN the data for each of these routes is displayed in a formatted JSON
WHEN I test API POST, PUT, and DELETE routes in Insomnia
THEN I am able to successfully create, update, and delete users and thoughts in my database
WHEN I test API POST and DELETE routes in Insomnia
THEN I am able to successfully create and delete reactions to thoughts and add and remove friends to a user’s friend list
```
## Installation

1. Clone the repository and open in VS Code.
2. Run `npm i`
3. Install the following dependencies
* `npm i express@4.18.2`
* `npm i mongoose`
* `npm i jest`
* `npm i nodemon`
4. Ensure you have access to MongoDB and MongoDB Compass.
To start the server run the command npm server in the terminal root directory.
5. To test the API's one - install insomnia and git sync to the repository.

# Application Preview

[Click here to access the application recording.](https://drive.google.com/file/d/1l_LYC6k5I2JoX_eZrbAZM2FJC9R7P_bC/view)

# Links

[Click here to access the files on the github repository.](https://github.com/fadumaabdi/socialmedia)

