const routes = [
    {
        method: 'GET',
        path: '/',
        handler: (request, h) => {
            return h.response('Homepage');
        },
    },
    {
        method: 'GET',
        path: '/about',
        handler: (request, h) => {
            return h.response('About page')
        }
    },
    {
        /* bisa mengakses rute yang ada di  http */
        method: '*',
        path: '/about',
        handler: (request, h) => {
            return h.response('404 Error! Page Not Found').code(404)
        }
    },
    {
        method: '*',
        path: '/{any*}',
        handler: (request, h) => {
            //page not found
            return h.response('404 Error! Page Not Found').code(404)
        }
    },
    {
        method: 'POST',
        path: '/about',
        handler: (request, h) => {
            return h.response(JSON.stringify({
                        name: "Dito",
                        nim: 22534024,
                        "kegiatan": "Belajar Membuat API"
                    }
                )
            )
        }
    },
    {
        /*Path parameter */
        method: 'GET',
        path: '/users/{username?}',
        handler: (request, h) => {
            /*Simpan ke request params*/
            const {username = 'orang aneh'} = request.params
            return h.response(`Hello ${username}`)
        }
    },
    {
        method: 'GET',
        path: '/hello/{name?}',
        handler: (request, h) => {
            const {name = 'Strangers'} = request.query
            const {lang} = request.query
            if (lang === 'id') {
                return h.response(`Hai ${name}`)
            }
            return h.response(`Hello ${name}`)
        }
    },
    {
        method: 'GET',
        path: '/domains',
        handler: (request, h) => {
            /*Query parameters implementation*/
            const {name, location} = request.query
            return h.response(`Hello, ${name} from ${location}`)
        }
    },
    {
        method: 'POST',
        path: '/domains',
        handler: (request, h) => {
            const {name, location} = request.payload
            return h.response(
                `${name} : ${location}`
            )
        }
    }
]
module.exports = routes