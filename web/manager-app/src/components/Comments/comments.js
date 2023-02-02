import * as React from "react";
import {
    List,
    DateField,
    Datagrid,
    TextField,
    ReferenceField,
    EditButton,
    Edit,
    Create,
    SimpleForm,
    ReferenceInput,
    SelectInput,
    TextInput,
    useRecordContext,
} from 'react-admin';

const CommentTitle = () => {
    const record = useRecordContext();
    return <span>Comment {record ? `"${record.title}"` : ''}</span>;
};

const CommentFilters = [
    <TextInput source="q" label="Search Id " alwaysOn />,
    <ReferenceInput source="users_id" label="Users" reference="users">
        <SelectInput optionText="name" />
    </ReferenceInput>,
];

export const CommentList = () => (
    <List filters={CommentFilters}>
        <Datagrid rowClick="edit">
            <ReferenceField source="userId" reference="users">
                <TextField source="name" />
            </ReferenceField>
            <TextField source="id" />
            <TextField source="title" />
            <TextField source="body" />
        </Datagrid>
    </List>
);

export const CommentList_v0 = (props) => (
  <List {...props}>
    <Datagrid>
      <TextField source='_id' />
      <TextField source='code_item' />
      <TextField source='titulo_SECClasS' />
      //<EditButton basePath='/comment/update/' />
    </Datagrid>
  </List>
);

export const CommentList_v1 = () => (
    <List>
        <Datagrid>
            <TextField source="_id" />
            <TextField source="users_id" />
            <TextField source="items_id.code_item" />
            <TextField source="items_id.titulo_SECClasS" />
            <TextField source="name" />
            <TextField source="institution" />
            <TextField source="contact" />
            <TextField source="comment" />
            <TextField source="status" />
            <DateField source="timestamp" />
        </Datagrid>
    </List>
);


export const CommentEdit = () => (
    <Edit title={<CommentTitle />}>
        <SimpleForm>
            <TextInput disabled source="id" />
            <ReferenceInput source="userId" reference="users">
                <SelectInput optionText="name" />
            </ReferenceInput>
            <TextInput source="title" />
            <TextInput multiline source="body" />
        </SimpleForm>
    </Edit>
);

export const CommentCreate = props => (
    <Create {...props}>
        <SimpleForm>
            <ReferenceInput source="userId" reference="users">
                <SelectInput optionText="name" />
            </ReferenceInput>
            <TextInput source="title" />
            <TextInput multiline source="body" />
        </SimpleForm>
    </Create>
);
