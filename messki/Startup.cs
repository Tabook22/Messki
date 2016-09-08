using Microsoft.Owin;
using Owin;

[assembly: OwinStartupAttribute(typeof(messki.Startup))]
namespace messki
{
    public partial class Startup
    {
        public void Configuration(IAppBuilder app)
        {
            ConfigureAuth(app);
        }
    }
}
