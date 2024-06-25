
# Slidely AI Backend Assignment

Welcome to Slidely AI Backend Assignment, this is a quick guide of how to setup the backend for the Slidely AI Internship Assignment.

### Quick guide to setup the backend

Firstly clone this github repository from this url ``` https://github.com/Ntrv3390/slidely-ai-backend ``` using this command in your terminal ``` git clone https://github.com/Ntrv3390/slidely-ai-backend ``` or download the zip file of the code from the button above.

Make sure you have latest version of node.js & npm (node package manager) if you don't have node.js download it from this url ``` https://nodejs.org/en ```. Also make sure that you have installed typescript globally (to avoid any error), if not then you can install typescript globall using this command in your terminal ``` npm i -g typescript ```.

Open a terminal and go to the folder where you cloned the repository or unzipped the files. Then run this command in your terminal ``` npm i ``` to install all the dependencies.

After the dependencies are installed, make sure that port 3000 is free, then run the following command in your terminal ``` npm run dev ``` to start the express server. The entry file of the server is ``` src/index.ts ```.

### Folder structure

This project has several folders and uses the MVC (Model, View, Controller) architechture. (- denote folder, * denote file)
```
    -dist
    -node_modules
    -src
        -controllers
            *ping.controllers.ts
            *user.controllers.ts
        -database
            *db.json
        -models
            *user.models.ts
        -routes
            *ping.routes.ts
            *userGet.routes.ts
            *userPost.routes.ts
        -utils
            *index.ts
            *readUsersFromDb.ts
            *writeUsersToDb.ts
    *nodemon.json
    *package-lock.json
    *package.json
    *Readme.md 
    *tsconfig.json
```

### API Endpoints

``` /ping ``` - Returns true if server is healthy (i.e running without any errors)

``` /submit ``` - Contains POST method to add a new user entry in database.

``` /read/:index ``` - Contains GET/PUT/DELETE methods for a user with index.

``` /read/email/:email ``` - Contains GET method to search for a user using email.

### Compile TypeScript

To complile typescript run this command in your terminal ``` tsc ```. The compiled files will be generated in a ``` dist ``` folder in the root directory.

### Author : ``` Mohammed Puthawala ```

### Thank you for your visit.


