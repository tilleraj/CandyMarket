using System;
using System.Collections.Generic;
using System.Data.SqlClient;
using CandyMarket.Api.DataModels;
using CandyMarket.Api.Dtos;
using Dapper;

namespace CandyMarket.Api.Repositories
{
    public class UserRepository : IUserRepository
    {
        string _connectionString = "Server=localhost; Database=CandyMarket; Trusted_Connection=True;";

        public IEnumerable<User> GetAllUsers()
        {
            using (var connection = new SqlConnection(_connectionString))
            {
                connection.Open();

                var allUsers = connection.Query<User>("Select * from [User]");
                
                return allUsers.AsList();
            }
        }

        public bool AddUser(AddUserDto newUser)
        {
            using (var connection = new SqlConnection(_connectionString))
            {
                var sql = @"INSERT INTO [dbo].[User]
                            ([FirstName]
                            ,[LastName])
                            VALUES
                            (@firstName
                            ,@lastName)";

                return connection.Execute(sql, newUser) == 1;
            }
        }

        public bool DeleteUser(int userIdToDelete)
        {
            using (var connection = new SqlConnection(_connectionString))
            {
                var sql = @"DELETE FROM [dbo].[User]
                            WHERE [Id] = @userId";

                var parameters = new { userId = userIdToDelete };

                return connection.Execute(sql, parameters) == 1;
            }
        }
    }
}