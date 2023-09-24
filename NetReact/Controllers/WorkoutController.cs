using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using NetReact.Data;
using NetReact.Models;

namespace NetReact.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class WorkoutController : ControllerBase
    {
        private workoutDBContext context;
        public WorkoutController(workoutDBContext workoutContext)
        {
            context = workoutContext;
        }

        [HttpGet]
        public IEnumerable<ItemModel> Get()
        {
            return context.workout.ToArray();
        }

        [Route("add")]
        [HttpPost]
        public async void addWorkout(ItemModel w)
        {
            context.workout.Add(w);
            context.SaveChanges();
        }

        [Route("update")]
        [HttpPost]
        public async void updateWorkout(ItemModel w)
        {
            var dbWorkout = context.workout.FirstOrDefault(x => x.Id == w.Id);
            if (dbWorkout != null)
            {
                dbWorkout.name = w.name;
                dbWorkout.type = w.type;
                dbWorkout.reps = w.reps;
                context.SaveChanges();
            }
        }

        [Route("deleteAll")]
        [HttpPost]
        public async void deleteWorkouts()
        {
            context.workout.RemoveRange(context.workout);
            context.SaveChanges(); 
        }

        [Route("delete/{id?}")]
        [HttpPost]
        public async void deleteWorkout(int id)
        {
            var delWorkout = context.workout.FirstOrDefault(y => y.Id == id);
            if(delWorkout != null)
            {
                context.workout.Remove(delWorkout);
                context.SaveChanges();
            }
        }
    }
}
