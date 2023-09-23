using Microsoft.EntityFrameworkCore;
using NetReact.Models;

namespace NetReact.Data
{
    public class workoutDBContext:DbContext
    {
        public workoutDBContext(DbContextOptions<workoutDBContext> options) :base(options)
        {
        }

        public DbSet<NetReact.Models.ItemModel> workout { get; set; }
    }
}
