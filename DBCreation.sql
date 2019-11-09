-- Create a new database called 'CandyMarket'
-- Connect to the 'master' database to run this snippet
USE master
GO
-- Create the new database if it does not exist already
IF NOT EXISTS (
    SELECT [name]
        FROM sys.databases
        WHERE [name] = N'CandyMarket'
)
CREATE DATABASE CandyMarket
GO

USE CandyMarket
Go
-- Create a new table called '[Candy]' in schema '[dbo]'
-- Drop the table if it already exists
IF OBJECT_ID('[dbo].[Candy]', 'U') IS NOT NULL
DROP TABLE [dbo].[Candy]
GO
-- Create the table in the specified schema
CREATE TABLE [dbo].[Candy]
(
    [Id] INT IDENTITY(1,1) PRIMARY KEY, -- Primary Key column
    [Name] NVARCHAR(50) NOT NULL,
	[Manufacturer] NVARCHAR(50) NOT NULL,
	[Category] NVARCHAR(50) NOT NULL,
    -- Specify more columns here
);
GO
