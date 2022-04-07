## Initialization
### run './rundocker.txt' in terminal to set up and initialize the backend
##### on the remote server the file exec is "./init_toolbox"
##### run the 'make db' command locally in the /Toolbox directory in order to initialize the database
##### 2022/4/5 update: check connection strings in Toolbox.api and modify for local or remote use as needed

### after running the file, run "make db" in a separate terminal to create the database
#### this is necessary as Docker Compose will be active in the first terminal
#### requires Docker Compose v2 for execution
##### best method: install latest Docker Compose version

#### 
## Continuation
#### run "docker-compose start" to start the backend after the first initialization
#### run "docker compose stop" to stop the backend without removing the containers
