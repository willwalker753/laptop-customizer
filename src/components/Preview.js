import React from 'react'
import '../App.css';

function Preview(props) {
    return (
        <div className="summary__option" key={props.key}>
            <div className="summary__option__label">hi </div>
            <div className="summary__option__value">{props.name}hey </div>
            <div className="summary__option__cost">
              { new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD'})
                  .format(props.costs) }
            </div>
        </div>
    )
}

export default Preview