// in src/App.js
import * as React from "react";
import { Admin, Resource } from 'react-admin'
import rest-api from './services/api';
import Dashboard from './Dashboard';
import authProvider from './authProvider';
import { PostList, PostEdit, PostCreate } from './models/posts';
import { UserList } from './models/users';
import PostIcon from '@mui/icons-material/Book';
import UserIcon from '@mui/icons-material/Group';


import jsonServerProvider from 'ra-data-json-server';
const dataProvider = jsonServerProvider('https://jsonplaceholder.typicode.com');

const App = () => (
    <Admin dashboard={Dashboard} authProvider={authProvider} dataProvider={rest-api}>
        <Resource name="posts" list={PostList} edit={PostEdit} create={PostCreate} icon={PostIcon} />
        <Resource name="users" list={UserList} icon={UserIcon} />
    </Admin>
);

export default App;
