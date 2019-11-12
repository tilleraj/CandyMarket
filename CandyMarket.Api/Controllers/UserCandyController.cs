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
    public class UserCandyController : ControllerBase
    {
        private readonly ILogger<UserCandyController> _logger;
        private readonly IUserCandyRepository _repo;

        public UserCandyController(ILogger<UserCandyController> logger, IUserCandyRepository repo)
        {
            _logger = logger;
            _repo = repo;
        }

        [HttpGet]
        public IEnumerable<UserCandy> GetAll()
        {
            return _repo.GetAllUserCandy();
        }

        [HttpGet("{UserCandyId}")]
        public UserCandy Get(int UserCandyId)
        {
            return _repo.GetAllUserCandy().FirstOrDefault(userCandy => userCandy.Id == UserCandyId);
        }

        [HttpPost]
        public void Add(AddUserCandyDto newUserCandy)
        {
            _repo.AddUserCandy(newUserCandy);
        }

        [HttpDelete("{UserCandyIdToDelete}/delete")]
        public void Delete(int UserCandyIdToDelete)
        {
            _repo.DeleteUserCandy(UserCandyIdToDelete);
        }
    }
}