// in src/App.js
import * as React from "react";
import rest_api from "./services/api";
import { Admin, Resource } from 'react-admin';
import restProvider from 'ra-data-simple-rest';
import { CommentList, CommentEdit, CommentCreate, CommentList_v1 } from './components/Comments/comments';

import getComments from './services/api';
import Dashboard from './Dashboard';
import authProvider from './authProvider';

import { UserList } from './models/users';
import PostIcon from '@mui/icons-material/Book';
import UserIcon from '@mui/icons-material/Group';

import jsonServerProvider from 'ra-data-json-server';
import simpleRestProvider from 'ra-data-simple-rest';
//const dataProvider = jsonServerProvider('https://jsonplaceholder.typicode.com');
/*
const data = dataProvider
    .getOne('http://localhost:8000/comment?status=New')
    .then(response => {
        console.log(response.data);
    });

const App = () => (
    <Admin dashboard={Dashboard} authProvider={authProvider} dataProvider={restProvider('http://localhost:8000')}>
        <Resource name="comments" list={CommentList} edit={CommentEdit} create={CommentCreate} icon={PostIcon} />
        <Resource name="users" list={UserList} icon={UserIcon} />
    </Admin>
);
*/

//const dataProvider = simpleRestProvider('http://localhost:8000');
var status = "New";
const get_api = async () => {
  try {
    //API URL
    const response = await rest_api.get(`/comment?status=${status}`);
    const res = response.data;
    console.log("res", res);

    if (res.error) {
      alert(res.message);
      return false;
    }
  } catch (err) {
    alert(err.message);
  }
};

function App() {
  return (
    <Admin dataProvider={get_api}>
      <Resource name='comentarios' list={CommentList_v1} />
    </Admin>
  )
};

export default App;
