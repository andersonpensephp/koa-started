import KoaRouter from 'koa-router';

const router = new KoaRouter();

router.get('/', async (ctx) => {
    await ctx.render('index', {title: 'Nova Home'})
});

export default router;