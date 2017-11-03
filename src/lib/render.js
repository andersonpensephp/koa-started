import koaNunjucks from 'koa-nunjucks-2';
import path from 'path';

const render = koaNunjucks({
    ext: 'html',
    path: path.join(__dirname, '../views'),
    nunjucksConfig: {
        trimBlocks: true
    }
});

export default render;

