# Übung 103

## Aufgabe 1

```yaml
version: '3'

services:
  api:
    build: ./

```

## Aufgabe 2

```yaml
version: '3'

services:
  db:
    image: mariadb:11.1.2
    container-name: database
    environment:
      - MYSQL_DATABASE=restaurants
      - MYSQL_USER=example-user
      - MYSQL_PASSWORD=my_cool_secret
      - MYSQL_ROOT_PASSWORD=rootpassword
    volumes:
      - db_data:/var/lib/mysql

  api:
    build: ./

volumes:
  db_data: {}

```

## Aufgabe 3

```yaml
version: '3'

services:
  db:
    image: mariadb:11.1.2
    container-name: database
    environment:
      - MYSQL_DATABASE=restaurants
      - MYSQL_USER=example-user
      - MYSQL_PASSWORD=my_cool_secret
      - MYSQL_ROOT_PASSWORD=rootpassword
    volumes:
      - db_data:/var/lib/mysql
    networks:
      - app_net

  api:
    build: ./
    networks:
      - app_net
    restart: always
    ports: 
      - "3000:3000"

volumes:
  db_data: {}

networks:
  app_net: {}
```
