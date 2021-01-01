import React, { Component } from 'react';

/**
 * Using props to receive data and callback functions from a parent makes it easy to add new
 * features to an application.
 * 
 * The component defined here is a general-purpose feature that has no knowledge of the content
 * that it is being used to manage, and it works entirely through its props:
 * 
 * - the description prop provides the label text it displays,
 * - the isChecked prop provides the initial state for the checkbox,
 * - the callback prop provides the function that is invoked when the user toggles the checkbox and triggers the change event.
 */
export class VisibilityControl extends Component {

    render = () =>
        <div className="form-check">
            <input className="form-check-input" type="checkbox"
                checked={ this.props.isChecked }
                onChange={ (e) => this.props.callback(e.target.checked) } />
            <label className="form-check-label"> 
                Show { this.props.description }
            </label>
        </div>
}
