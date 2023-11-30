# How to open the project
Try to open this README.md file in Preview mode for the best experience

## Step 1: Download Node.js
Download and install Node.js from https://nodejs.org/en/

## Step 2: Open the project in IDE
Open the root folder "SIIT-TABLETOP-CLUB" in your IDE (VSCode is preferred)

## Step 3: Change the database settings
Change the username and password values from 'admin' to anything in "siit_tabletop.sql" file at the root folder (you can also leave them as 'admin')

```sql
-- ./siit_tabletop.sql

--
-- Create users
--

DROP USER IF EXISTS 'admin'; -- Change username here
CREATE USER IF NOT EXISTS 'admin' IDENTIFIED BY 'admin'; -- Change username and password here
GRANT INSERT, SELECT, UPDATE, DELETE ON `siit_tabletop`.* TO 'admin' IDENTIFIED BY 'admin'; -- Change username and password here
FLUSH PRIVILEGES;
```
## Step 4: Import database
Import the file 'siit_tabletop.sql' to your SQL server (MAMP for example) to import the database

## Step 5: Config .env file
Change the values in ".env" file at the "Backend" folder to reflect your database settings

```bash
# ./Backend/.env

DB_HOST = "localhost" # Database host address (Change here)
DB_USER = "admin" # Username of the database (Change here)
DB_PASSWORD = "admin" # Password of the user (Change here)
DB_DATABASE = "siit_tabletop" # Database name
```

## Step 6: Open backend server
Open a terminal at root folder

```bash
# ./

cd Backend
npm i
npm run dev
```

## Step 7: Open frontend server
Open another terminal at root folder

```bash
# ./

cd Frontend
npm i
npm run dev
```

## Step 8: Go to the website
Go to the SIIT Tabletop Club website which show in the frontend terminal (default is http://localhost:5173)

## Step 9: Login to the website
### Admin
```
UserID: 6422000000
Password: MaddoxInwza
```

### Member
```
UserID: 6422000003
Password: battleCONisthebest
```

## Step 10: Use the website
You can play around the website now