# Technical stack
1. Nodejs version 16
2. NestJs version 8
3. Mysql (standalone installed by docker)
4. TypeORM: Lib to handle Object Relation Mapping for interacting with database as well UI for developer
5. Docker: Support for build and package is easy
6. NPM: Dependency management repository. It's help for managing installed lib in nodejs
Notes: All of tech stack
7. Swagger: Create API documents for application
# Database design
![](images/fixture_db_design.png)
**Figure 1**. fuxtures database
## fixtures
Managing all info regarding match as refree, start time, end time, goal. It's will be updated
realtime in real application. In scope of assignment, I assumed that it will not be
handled for realtime info
## team
Managing all info regarding of football club. It's a short info name, logo etc
## league
Manging all info regarding league
## venue
Managing stadium info as name, city where allocated stadium 
# API design
After launching successfully application. Please access to link
```
http://localhost:3000/api
```
you will see the UI as figure 2
# How to run application
## Prepare environment
1. Install docker: the first, docker will be installed
2. Install Mysql via docker as below command
```
docker pull mysql // get mysql official from docker registry
docker run --name mysql -e MYSQL_ROOT_PASSWORD=fixtures -d mysql
```
3. Install nodejs 16: It's required
4. Install nestjs via npm
5. Build dockerfile as below command
```
docker build -t fixtures:1.0 . // Build docker image
docker run --name fixtures -p 3000:3000 -d fitures:1.0
```



