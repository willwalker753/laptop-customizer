import React from 'react';
import Specs from './Specs';


function MainForm(props) {
    return (
        <section className="main__form">
            <h3>Customize your laptop</h3>
            {Object.keys(props.features)
                .map((key, index, title) => 
                    <Specs
                        key={index}
                        index={index}
                        title={title[index]}
                        options={props.features[key]}
                        selected={props.selected}
                        onClick={props.onClick} 
                    />
            )}
        </section>
    );
}

export default MainForm