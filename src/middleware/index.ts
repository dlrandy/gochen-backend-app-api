import withBodyParser from '@middleware/bodyParser';
import withErrorHandler from '@middleware/error_handler';
import withLogger from '@middleware/logger';
import withMethod_override from '@middleware/method_override';
import withRouter from '@middleware/router';
import withSession from '@middleware/session';
import withStatic from '@middleware/static';
import withViews from '@middleware/views';
import Koa from 'koa';
import sslify from 'koa-sslify';

export default (app: Koa) => {
    app.use(sslify());
    withErrorHandler(app);
    withViews(app);
    withStatic(app);
    withLogger(app);
    withBodyParser(app);
    withSession(app);
    // withMethod_override(app);
    withRouter(app);
    
}
