# INSURANCE WEB-API NODEJS

## Introduction

This is a code challenge where the user can get insurance data from the API depending on the role of this user.

## Table of contents

* [Code challenge](#code-challenge)
* [Review](#review)
* [Technologies](#technologies)
* [Files structure](#files-structure)
* [Setup](#setup)


## Code challenge 

### Node.js code assessment

We have been asked to develop an application that manages some information regarding insurance policies and company clients. To do that, there are two services that provide all the data needed:
- The list of company clients can be found at: http://www.mocky.io/v2/5808862710000087232b75ac
- The list of company policies can be found at: http://www.mocky.io/v2/580891a4100000e8242b75c5

With this information, we need to create a Web API that exposes the following
services with their inherent restrictions:
- Get user data filtered by user id -> Can be accessed by users with role "users" and "admin"
- Get user data filtered by user name -> Can be accessed by users with role "users" and "admin"
- Get the list of policies linked to a user name -> Can be accessed by users with role "admin"
- Get the user linked to a policy number -> Can be accessed by users with role "admin"

### Constraints

- Authentication and authorization. Take the user role from the web service that returns the list of company clients
- Include tests
- ES6
- Use github or any source control tool. It would be great if we can see incremental steps
- Use Latest Node.js LTS version
- This API is a middleware, so is very important how to propagate the request to the data source API and how to manage the error handling and the asynchronism.

### Additional details

As our stakeholders can be very fuzzy sometimes, here are some tips of what are we looking for:
- Usage of last technologies
- Solution properly structured
- Usage of patterns
- Add everything you think it is needed to ensure the product's quality & proper maintenance in case of an error.
- We expect to have a minimum documentation on a README file. We need to know what have you done and how to run your app. Also, if you have taken any decision or could not meet any of requirements, please explain it to us!

### Recommendations

- Use the framework you feel more comfortable using (express, fastify...)


## Review

In this challengue I have developed a REST API in Node.js using Express as framework.

One difficult part was joining data from two different sources into one single JSON object. The most difficult part is testing as I am new at it and it's difficult to know if it's working properly because it's OK or because I made a bad test code.

## Technologies

* node v.14.4.0
* axios v.0.19.2
* body-parser v.1.19.0
* express v.4.17.1
* nodemon v.2.0.4
* @babel/runtime v.7.10.2
* @babel/core v.7.10.2
* @babel/node v.7.10.1
* @babel/plugin-transform-runtime v.7.10.1
* @babel/preset-env v.7.10.2
* babel-cli v.6.26.0
* babel-jest v.26.0.1
* babel-preset-env v.^1.7.0
* jest v.26.0.1
* rimraf v.3.0.2

 
## Files structure

```
app.js 

src/
|_ __mocks__
    |_ axios.js
|_ __tests__
    |_ controllers/
        |_ auth.js
        |_ data.js
        |_ index.js    
|_ controllers/
    |_ auth.js
    |_ data.js
    |_ index.js    
|_ routes/
    |_ index.js

   


``` 



## Setup

First step, get inside the folder and install npm:

```
cd insurance-apirest-nodejs
npm install
```

Second step, running the server:

```
npm run server
```

For running the tests:
```
npm run test
```
