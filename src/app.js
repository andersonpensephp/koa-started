import Koa from 'koa';
import renderNunjucks from './lib/render';
import router from './routes';

const app = new Koa();

app
    .use(renderNunjucks)
    .use(router.routes());

export default app;