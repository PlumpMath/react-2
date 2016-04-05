import fs from 'fs';
import express from 'express';
import React from 'react';
import { renderToString } from 'react-dom/server';
import ContactsApp from './components/ContactsApp';

const app = express();

app.set('views', './')
app.set('view engine', 'ejs');
app.use(express.static(__dirname + '/public'));

const contacts = JSON.parse(fs.readFileSync('./contacts.json', 'utf8'));

const ContactsAppFactory = React.createFactory(ContactsApp);

app.get('/', (request, response) => {
  let componentInstance = ContactsAppFactory({contacts: contacts});
  response.render('index',{
    content: renderToString(componentInstance)
  });
});

app.listen(3000, ()=>{
  console.log('Express app listening on port 3000');
});