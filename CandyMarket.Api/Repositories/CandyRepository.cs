using System;
using System.Collections.Generic;
using System.Data.SqlClient;
using CandyMarket.Api.DataModels;
using CandyMarket.Api.Dtos;
using Dapper;

namespace CandyMarket.Api.Repositories
{
    public class CandyRepository : ICandyRepository
    {
        string _connectionString = "Server=localhost; Database=CandyMarket; Trusted_Connection=True;";

        public IEnumerable<Candy> GetAllCandy()
        {
            using (var connection = new SqlConnection(_connectionString))
            {
                connection.Open();

                var allCandy = connection.Query<Candy>("Select * from Candy");
                
                return allCandy.AsList();
            }
        }

        public bool AddCandy(AddCandyDto newCandy)
        {
            using (var connection = new SqlConnection(_connectionString))
            {
                var sql = @"INSERT INTO [dbo].[Candy]
                            ([Name]
                            ,[Manufacturer]
                            ,[Category])
                            VALUES
                            (@name
                            ,@manufacturer
                            ,@category)";

                return connection.Execute(sql, newCandy) == 1;
            }
        }

        public bool EatCandy(int candyIdToDelete)
        {
            using (var connection = new SqlConnection(_connectionString))
            {
                var sql = @"DELETE FROM [dbo].[Candy]
                            WHERE [Id] = @candyId";

                var parameters = new { candyId = candyIdToDelete };

                return connection.Execute(sql, parameters) == 1;
            }
        }
    }
}