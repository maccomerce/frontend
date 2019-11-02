import React from 'react';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';

function Header(props) {
  return (
    <TableHead>
      <TableRow>
      <TableCell style={{fontWeight: 'bold'}}>#</TableCell>
        {props.values.map((item, index) => <TableCell key={index} style={{fontWeight: 'bold'}}>{item.value}</TableCell>)}
      </TableRow>
    </TableHead>
  );
}

function Body(props) {

  return (
    <TableBody>
      {props.values.map((value, valueIndex) => 
        <TableRow key={valueIndex} hover>
          <TableCell>{valueIndex + 1}</TableCell>
          {props.headers.map((header, headerIndex) =>
            <TableCell key={headerIndex}>{value[header.key]}</TableCell>
          )}
        </TableRow>
      )}
    </TableBody>
  );
}

export default function MyTable(props) {
  return (
    <Table>
      <Header values={props.headers} />
      <Body headers={props.headers} values={props.body}/>
    </Table>
  );
}