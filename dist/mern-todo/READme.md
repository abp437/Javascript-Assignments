This App is a Basic RESTful API app in NodeJS(Express), Mongo and React.

Pre-requisites:
MongoDB needs to be installed and in working condition.
NodeJS needs to be installed.

# My versions:
- MongoDB - 3.6
- Node - 10.15.0

- The Server runs on 3000.
- The Client runs on 8000.

# Setup
## Server
- cd server
- npm install
- Make a config file named 'config.js' in the format as specified in 'config.js.example'

## Client
- cd client
- npm install
- Make a config file named 'config.js' in the src folder in the format as specified in 'config.js.example'

Perform the operations in following sections in separate CLIs, order matters:

# 1 - Starting off DB:

## Windows:
- cd "C:\Program Files\MongoDB\Server\3.6\bin\"
- ./mongod --dbpath="C:\data\db"

## Linux/Mac:
- sudo service mongod start

# 2 - Starting Off Server:
- cd server
- npm install (Run this only when there are changes to package.json file)
- npm run serve

# 3 - Starting Off the Client:
- cd client
- npm install (Run this only when there are changes to package.json file)
- npm run start
