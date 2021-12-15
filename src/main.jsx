import createLoading from 'dva-loading';
import dva from 'dva';
import '@/styles/index.css';
import { createBrowserHistory } from 'history';
import { initModels } from './models';
import RouterConfig from './router';

let history = createBrowserHistory();

const app = dva({ history });
app.use(createLoading());
initModels(app);

app.router(RouterConfig);
app.start('#root');