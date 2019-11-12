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

-- Insert rows into table 'Candy' in schema '[dbo]'
INSERT INTO [dbo].[Candy]
( -- Columns to insert data into
 [Name], [Manufacturer], [Category]
)
VALUES
('Skittles', 'Wrigley', 'Fruit'),
('Altoids', 'Wrigley', 'Mint'),
('Starburst', 'Wrigley', 'Fruit'),
('Gummi Savers', 'Wrigley', 'Gummy')
GO

-- Insert rows into table 'Candy' in schema '[dbo]'
INSERT INTO [dbo].[Candy]
( -- Columns to insert data into
 [Name], [Manufacturer], [Category]
)
VALUES
('3 Musketeers', 'Mars', 'Chocolate'),
('Milky Way', 'Mars', 'Chocolate'),
('Twix', 'Mars', 'Chocolate')
GO

-- Create the table in the specified schema
CREATE TABLE [dbo].[User]
(
    [Id] INT IDENTITY(1,1) PRIMARY KEY, -- Primary Key column
    [FirstName] NVARCHAR(50) NOT NULL,
	[LastName] NVARCHAR(50) NOT NULL,
    -- Specify more columns here
);
GO

-- Insert rows into table 'Candy' in schema '[dbo]'
INSERT INTO [dbo].[User]
( -- Columns to insert data into
 [FirstName], [LastName]
)
VALUES
('Donald', 'Duck'),
('Fred', 'Flinstone'),
('Lois', 'Lane')
GO

-- Create the table in the specified schema
CREATE TABLE [dbo].[UserCandy]
(
    [Id] INT IDENTITY(1,1) PRIMARY KEY, -- Primary Key column
    [UserId] INT NOT NULL
        FOREIGN KEY (UserId)
        REFERENCES [User] (Id),
    [CandyId] INT NOT NULL
        FOREIGN KEY (CandyId)
        REFERENCES Candy (Id)
);
GO

-- Insert rows into table 'Candy' in schema '[dbo]'
INSERT INTO [dbo].[UserCandy]
( -- Columns to insert data into
 [UserId], [CandyId]
)
VALUES
('1', '1'),
('1', '3'),
('2', '4'),
('2', '5'),
('3', '6'),
('3', '7')
GO

select uc.id as UserCandyId, u.FirstName, u.LastName, c.Id as CandyId, c.[Name], c.Manufacturer, c.Category
from UserCandy as uc
join [user] as u
	on uc.UserId = u.Id
join Candy as c
	on uc.CandyId = c.Id