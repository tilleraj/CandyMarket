using System;
using System.Collections.Generic;
using System.Data.SqlClient;
using CandyMarket.Api.DataModels;
using CandyMarket.Api.Dtos;
using Dapper;

namespace CandyMarket.Api.Repositories
{
    public class UserCandyRepository : IUserCandyRepository
    {
        string _connectionString = "Server=localhost; Database=CandyMarket; Trusted_Connection=True;";

        public IEnumerable<UserCandy> GetAllUserCandy()
        {
            using (var connection = new SqlConnection(_connectionString))
            {
                connection.Open();

                var allUserCandy = connection.Query<UserCandy>("Select * from [UserCandy]");
                
                return allUserCandy.AsList();
            }
        }

        public bool AddUserCandy(AddUserCandyDto newUserCandy)
        {
            using (var connection = new SqlConnection(_connectionString))
            {
                var sql = @"INSERT INTO [dbo].[UserCandy]
                            ([UserId]
                            ,[CandyId])
                            VALUES
                            (@userId
                            ,@candyId)";

                return connection.Execute(sql, newUserCandy) == 1;
            }
        }

        public bool DeleteUserCandy(int userCandyIdToDelete)
        {
            using (var connection = new SqlConnection(_connectionString))
            {
                var sql = @"DELETE FROM [dbo].[UserCandy]
                            WHERE [Id] = @userCandyId";

                var parameters = new { userCandyId = userCandyIdToDelete };

                return connection.Execute(sql, parameters) == 1;
            }
        }
    }
}