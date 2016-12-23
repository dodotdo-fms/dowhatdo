import path from 'path';
import express from 'express';
import bodyParser from 'body-parser';
import assetCtrl from './controllers/asset';
import appConfig from '../conf/app.json';

const app = express();

app.set('port', appConfig.port);
app.use(bodyParser.json());

app.use('/static', [
    express.static(path.resolve(__dirname, '../public/build')),
    express.static(path.resolve(__dirname, '../public/assets'))
]);

app.get('/', (req, res) => {
    res.sendFile(path.resolve(__dirname, '../public/build/index.html'));
});

app.get('/asset-mgt', (req, res) => {
    res.sendFile(path.resolve(__dirname, '../public/build/assetMgt.html'));
});

app.use('/api/asset', assetCtrl);

export default app;
