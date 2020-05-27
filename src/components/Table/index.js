import React from "react";
import classes from "./list.modules.css";
export  default props => {
    return (
      <div className={classes.main}>
        <table className='table-dark'>
          <thead>
          <tr>
            <td onClick={props.onSort.bind(null, 'id')}>id
            {props.sort === 'asc' && props.sortField === 'id' ? <small>{'▼'}</small> : <small>{'▲'}</small>}</td>
            <td onClick={props.onSort.bind(null, 'firstName')}>firstName
            {props.sort === 'asc' && props.sortField === 'firstName' ? <small>{'▼'}</small> : <small>{'▲'}</small>}</td>
            <td onClick={props.onSort.bind(null, 'lastName')}>lastName
            {props.sort === 'asc' && props.sortField === 'lastName' ? <small>{'▼'}</small> : <small>{'▲'}</small>}</td>
            <td onClick={props.onSort.bind(null, 'email')}>email
            {props.sort === 'asc' && props.sortField === 'email' ? <small>{'▼'}</small> : <small>{'▲'}</small>}</td>
            <td onClick={props.onSort.bind(null, 'phone')}>phone
            {props.sort === 'asc' && props.sortField === 'phone' ? <small>{'▼'}</small> : <small>{'▲'}</small>}</td>
          </tr>
          </thead>
          {props.data.map((user, index) => {
            const { id, firstName, lastName, email, phone} = user
              return (
                <thead key={index} onClick={props.onRowSelect.bind(null, user)}>
                <tr>
                  <td>{id}</td>
                  <td>{firstName}</td>
                  <td>{lastName}</td>
                  <td>{email}</td>
                  <td>{phone}</td>
                </tr>
                </thead>
              );
            })}
        </table>
      </div>
    );
}
