import * as express from 'express';
import * as path from 'path';

const ngApimockFactory = require('ng-apimock');
const ngApimockRequest = require('ng-apimock/lib/utils').ngApimockRequest;

const ngApimock = ngApimockFactory();
const mocksPath = path.resolve(__dirname, './requests');

ngApimock.run({
  src: mocksPath,
  outputDir: './dist/mocking',
});
ngApimock.watch(mocksPath);

const app = express();
app.use(ngApimockRequest);
app.use('/mocking', express.static('./dist/mocking'));

app.listen(3000, (error: any) => {
  if (!error) {
    console.info(`Ng-Apimock running on port 3000`); // tslint:disable-line
  }
});
