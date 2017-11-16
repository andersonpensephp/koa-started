import KoaRouter from 'koa-router';
import request from 'koa2-request';

const router = new KoaRouter();

router.get('/', async (ctx) =>  {
    const options = {
        url: 'https://jsonplaceholder.typicode.com/users',
        method: 'get',     
        headers: { 
            'User-Agent': 'request',
            'charset': 'UTF-8'
        }
    }
    let response =  await request(options);
    let data = JSON.parse(response.body);

    await ctx.render('index', {infos: data});
});

router.get('/users/:name', async (ctx) => {
    let name = ctx.params.name;
    ctx.cookies.set('name', 'tobi');
    await ctx.render('users', {name: `Olá ${name}`});
});

export default router;