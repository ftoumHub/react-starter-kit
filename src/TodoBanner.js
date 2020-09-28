import React, { Component } from 'react';

/**
 * This component is responsible for displaying the banner.
 * 
 * Parent components provide their children with data using props, and the data values are accessed
 * through the props property, accessed via the this keyword. This component, which is called TodoBanner,
 * expects to receive two props:
 * - a name prop, which contains the user’s name, 
 * - a tasks prop, which contains the set of tasks and which is filtered to display the number that are incomplete.
 */
export class TodoBanner extends Component {
    
    render = () => 
        <h4 className="bg-primary text-white text-center p-2">
            {this.props.name}'s To Do List
            ({this.props.tasks.filter(t => !t.done).length} items to do)
        </h4>
}