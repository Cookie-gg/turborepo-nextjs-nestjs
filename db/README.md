# mysql - docker container for development

### setup

- make a env file
```
touch .env
vim .env

MYSQL_USER="<username>"
MYSQL_PASSWORD="<password>"
MYSQL_ROOT_PASSWORD="<root password>"
```

- run a container

```
docker-compose up (-d: run in the background)
```