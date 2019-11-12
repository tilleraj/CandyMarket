using System;
using System.Collections.Generic;
using System.Linq;
using CandyMarket.Api.DataModels;
using CandyMarket.Api.Dtos;
using CandyMarket.Api.Repositories;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;

namespace CandyMarket.Api.DataModels
{
    [Route("[controller]")]
    [ApiController]
    public class UserController : ControllerBase
    {
        private readonly ILogger<UserController> _logger;
        private readonly IUserRepository _repo;

        public UserController(ILogger<UserController> logger, IUserRepository repo)
        {
            _logger = logger;
            _repo = repo;
        }

        [HttpGet]
        public IEnumerable<User> GetAll()
        {
            return _repo.GetAllUsers();
        }

        [HttpGet("{UserId}")]
        public User Get(int UserId)
        {
            return _repo.GetAllUsers().FirstOrDefault(user => user.Id == UserId);
        }

        [HttpPost]
        public void Add(AddUserDto newUser)
        {
            _repo.AddUser(newUser);
        }

        [HttpDelete("{UserIdToDelete}/delete")]
        public void Delete(int UserIdToDelete)
        {
            _repo.DeleteUser(UserIdToDelete);
        }
    }
}