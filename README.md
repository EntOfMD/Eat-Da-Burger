# Eat-Da-Burger

### The first to be made using Handlebars view engine. It's made in Node.js, Express being used for Web Server, Handlebars for the view engine, MySQL (w/ ORMs) for data storage, Bootstrap for Web Framework, and a touch of jQuery for client sided functionality.

## Well, dafuq is Eat-Da-Burger?

---

It's made to demonstrate the power of all the stacks combined.

## Technologies it uses:

---

- ### Main Language/Framework:

  - JavaScript/Node.js

- ### Web Server

  - Express.js

    - Middlewares:
      - BodyParser
      - Method-Override
      - Morgan

- ### Web Framework

  - Bootstrap

- ### Database
  - MySQL
    - ORMs
    - JawsDB (deployed)
- ### Hosting
  - Heroku

# How to install

1. Clone the repo
1. Open your Terminal/Bash, type in `npm install`
1. Make a new file in `/config/` named `dev.js`
1. Create an object inside `dev.js`

   1. ex: `module.exports = { mysql: { user: 'USERNAME', pass: 'PASSWORD', port: 3306, database: 'YOUR_DATABASE', host: 'localhost' } };`

   **OTHERWISE IT WON'T WORK, unless you mess with `keys.js`**

1. Type inside terminal/bash `npm run watch`

Ashell F\_ &copy; 2019

[Live Demo](https://eat-da-burgers-app.herokuapp.com/app) | [Github](https://github.com/EntOfMD/Eat-Da-Burger) | [Portfolio](https://entofmd.github.io/portfolio.html)
