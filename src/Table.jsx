import React from 'react';
import ReactTable from 'react-table';
import 'react-table/react-table.css';
import './styles.scss';

const Table = (props) => <ReactTable minRows={0} {...props} />;

export default Table;
