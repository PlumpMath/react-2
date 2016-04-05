import React from 'react';
import { render } from 'react-dom';
import ContactsApp from './components/ContactsApp';

let initialData = document.getElementById('initial-data').textContent;
if (initialData.length > 0) {
  initialData = JSON.parse(initialData);
}

render(<ContactsApp contacts={initialData} />, document.getElementById('root'));
