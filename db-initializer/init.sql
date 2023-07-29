-- Connect to the master database
USE master;

-- Create the "pokemon" database if it does not exist
IF NOT EXISTS (SELECT * FROM sys.databases WHERE name = 'pokemon')
BEGIN
    CREATE DATABASE pokemon;
END

-- Switch to the "pokemon" database
USE pokemon;

-- Add additional SQL commands to set up the schema or insert initial data into tables, if needed