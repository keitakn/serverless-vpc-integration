import * as express from 'express';
import * as bodyParser from 'body-parser';
import Request = express.Request;
import Response = express.Response;

const app = express();

app.use(bodyParser.json());

const port = 3000;

app.get('/', (req: Request, res: Response) => {
  return res
    .status(200)
    .json({ code: 200, message: 'OK' });
});

app.listen(port, (error: Error) => {
  if (error) {
    console.error(error);
  }

  console.log(`server start at http://localhost:${port}`);
});
