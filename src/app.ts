import express from 'express';
import router from './routes/productRouter';
import usersRouters from './routes/usersRouter';
import ordersRouters from './routes/ordersRouter';
import loginRouters from './routes/loginRouter';

const app = express();

app.use(express.json());

app.use('/products', router);
app.use('/users', usersRouters);
app.use('/orders', ordersRouters);
app.use('/login', loginRouters);

export default app;