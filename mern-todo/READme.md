This App is a Basic RESTful API app in NodeJS(Express), Mongo and React.
The following steps of app setup have been tested on Windows system.

Pre-requisites:
MongoDB needs to be installed and in working condition.
NodeJS needs to be installed.

# My versions:
- MongoDB - 3.6
- Node - 10.15.0

- The Server runs on 3000.
- The Client runs on 8000.

Perform the operations in following sections in separate CLIs, order matters:

# 1 - Starting off DB:
- cd "C:\Program Files\MongoDB\Server\3.6\bin\"
- ./mongod --dbpath="C:\data\db"

# 2 - Starting Off Server:
- cd server
- npm install
- npm run serve

# 3 - Starting Off the Client:
- cd client
- npm install
- npm run start
