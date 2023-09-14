import express from 'express';
import routes from './routes/posts.router.js'

const app = express();
const port = 3000;

/** (구현) **/

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/api', routes);


app.listen(port, () => {
    console.log(port, '포트로 서버가 열렸어요!');
  });
  