using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.DependencyInjection;
using NetReact.Data;
using NetReact.Models;
using System.Linq;

namespace NetReact.Controllers
{
    [ApiController]
    [Route("item")]
    public class ItemController : ControllerBase
    {
        private workoutDBContext context;
        public ItemController(workoutDBContext workoutContext)
        {
            context = workoutContext;
        }

        [HttpGet]
        public IEnumerable<ItemModel> Get()
        {
            return context.workout.ToArray();
        }

        [Route("getByID/{id:int}")]
        [HttpGet("id:int")]
        public IEnumerable<ItemModel> getByID(int id)
        {
            return context.workout.ToArray();
        }
    }
}