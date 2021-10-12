# API with NodeJS - ExpressJS - MySQL(Docker)
API with Node JS, Express and MySQL (Docker deployment is optional)


## About the project
This API is created to test the consumption of CRUD services because in internet we find some services as "reqres.in" but we can't see the changes in real time and we can't see errors.


### Built With
* [Nodejs.org](https://nodejs.org/)  version 14.18.x
* [Expresssjs.com](https://expressjs.com/) version 4.17.x
* [MySQL.com](https://www.mysql.com/) version 4.17.x
* [Docker.com](https://www.docker.com/) Engine on Ubuntu


## Getting Started

### Prerequisites

This is an example of how to list things you need to use the software and how to install them.


* Install npm (Binary distributions)
  ```
    curl -fsSL https://deb.nodesource.com/setup_14.x | sudo -E bash -
    sudo apt-get install -y nodejs
  ```

* Install Docker (engine on Ubuntu)
  
  _https://docs.docker.com/engine/install/ubuntu/_

### Installation

1. 
   1. Create and run a container for MySQL with the following commands:
   ```
   sudo docker run --name mysql-test -e MYSQL_ROOT_PASSWORD=root -p 3306:3306 --rm -d mysql:latest
   ```
   
   2. Enter the container and the MySQL engine:
   ```
   sudo docker exec -it mysql-test bash
   ```

   ```
   mysql -u root -proot
   ```

2. Run the following commands for permissions and created the data base (quick start):
   
   1. Permissions:
   ```
   ALTER USER 'root'@'%' IDENTIFIED BY 'root' PASSWORD EXPIRE NEVER;

   ALTER USER 'root'@'%' IDENTIFIED WITH MYSQL_NATIVE_PASSWORD BY 'root';

   FLUSH PRIVILEGES;
   ```
   2. Create database, tables and add data:
   ```
   CREATE TABLE USER (
	id INT AUTO_INCREMENT PRIMARY KEY NOT NULL ,
	first_name VARCHAR(50),
	last_name VARCHAR(50),
	user_name VARCHAR(50),
	email VARCHAR(50),
	access_level INT,
	access_card INT
   );

   INSERT INTO USER (first_name, last_name, user_name, email, access_level, access_card) VALUES
   ('Corilla',   'Rosendahl',    'crosendahl0',     'crosendahl0@apache.org',           2, 399155),
   ('Alys',      'Garvey',       'agarvey1',        'agarvey1@paginegialle.it',         4, 906785),
   ('Ambrose',   'Whilde',       'awhilde2',        'awhilde2@mtv.com',                 4, 129925),
   ('Karl',      'Janoschek',    'kjanoschek3',     'kjanoschek3@mayoclinic.com',       3, 410474);
   ```


3. Optional, you can run the commands of `init-users.sql`.

4. Clone the repository:
   ```
   git clone git@github.com:gonzalobaezbp/api-nodejs-mysql-docker.git
   ```

5. Install NPM packages:
   ```
   npm install
   ```

6. Run de project:
   ```
   npm start
   ```

7. You can test of API with `POSTMAN`, I use the extension for VS Code named `REST Client`.

  1. We created a new file with extension `file_name.http` in this case you can see the archive `test_deploy_api.http` (service run internet) or `test_local_api.http` (service run local)

  2. In the file `test_deploy_api.http` you can click en _Send Request_ for test a CRUD methods and you can see the results a new tab.