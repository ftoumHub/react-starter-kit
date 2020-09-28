import React, { Component } from 'react';

/**
 * This component will be responsible for displaying a single row in the table,
 * showing details of a to-do item. The data that is received by a child component 
 * through its props is read-only and must not be altered.
 */
export class TodoRow extends Component {

    render = () => 
        <tr>
            <td>{ this.props.item.action }</td>
            <td>
                <input type="checkbox" checked={ this.props.item.done }
                        onChange={ () => this.toggleTodo(this.props.item) }/>
            </td>
        </tr>
}