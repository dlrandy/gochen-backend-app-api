import withBodyParser from '@middleware/bodyParser';
import withErrorHandler from '@middleware/error_handler';
import withLogger from '@middleware/logger';
import withMethod_override from '@middleware/method_override';
import withRouter from '@middleware/router';
import withSession from '@middleware/session';
import withViews from '@middleware/views';
import Koa from 'koa';

export default (app: Koa) => {
    withErrorHandler(app);
    withViews(app);
    withLogger(app);
    withBodyParser(app);
    withSession(app);
    // withMethod_override(app);
    withRouter(app);
    
}
