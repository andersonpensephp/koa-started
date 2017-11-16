import Koa from 'koa';
import cors from 'koa2-cors';
import renderNunjucks from './lib/render';
import router from './routes';

const app = new Koa();

app.key = ['foo'];

app
    .use(cors({
        allowMethods: ['GET', 'POST', 'DELETE']
    }))
    .use(renderNunjucks)
    .use(router.routes());

export default app;