import React, { Component } from 'react';
import './App.css';
import FEATURES from './index';
import MainForm from './components/MainForm'
import MainSummary from './components/MainSummary'

class App extends Component {
    constructor(props){
        super(props);
        this.state = {
            features: FEATURES,
            selected: {
                "Processor": [
                    "17th Generation Intel Core HB (7 Core with donut spare)",
                    700
                ],
                "Operating System": [
                    "Ubuntu Linux 16.04",
                    200
                ],
                "Video Card": [
                    "Toyota Corolla 1.5v",
                    1150.98
                ],
                "Display": [
                    '15.6" UHD (3840 x 2160) 60Hz Bright Lights and Knobs',
                    1500
                ],
            },
            "total": 3550.98
         };
        this.handleClick = this.handleClick.bind(this)
        this.total = this.total.bind(this)
    }
    handleClick(name, cost, title) {
        const selected = Object.assign({}, this.state.selected);
        selected[title] = [name, cost]
  
        this.setState({
            selected
        });

        this.total()
    }
    total = () => {
        let sum = 0
        // eslint-disable-next-line
        Object.keys(this.state.selected).map(key => {
            sum += this.state.selected[key][1]
        })
        return sum;
    }
    
    render () {
        return (
            <div className="App">
                <header>
                    <h2>ELF Computing | Laptops</h2>
                    
                </header>      
                <main>
                    <MainForm
                        features={this.state.features}
                        selected={this.state.selected}
                        onClick={this.handleClick} 
                    />
                    <MainSummary 
                        selected={this.state.selected}
                        total={this.total()}
                    />
                </main>
            </div>
        );
    }
}

export default App