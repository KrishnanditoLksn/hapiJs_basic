const Hapi = require('@hapi/hapi');
const routes = require("./route/routes");

const init = async () => {
    const server = Hapi.server({
            port: 5000,
            host: 'localhost',
        }
    )

    //route to routes method
    server.route(routes)
    await server.start()
    console.log(`Server berjalan pada ${server.info.uri}`);
}

init()