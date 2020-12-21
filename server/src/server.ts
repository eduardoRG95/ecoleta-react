import express from 'express';

const app = express();

app.get('/users', (request, response) =>
{
    console.log('Listagem de usuários')


    response.json([
        'diego',
        'robson',
        'leo',
        'eduardo'
    ]);
});

app.listen(3333);
