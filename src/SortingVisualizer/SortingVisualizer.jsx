import React from "react";
import './SortingVisualizer.css'

export default class SortingVisualizer extends React.Component{
    constructor(props)
    {
        super(props);

        this.state = {
            array : [],
        };
    }

    componentDidMount(){
        this.resetArray();
    }

    resetArray(){
        const array = [];
        for(let i = 0; i < 310; i++)
        {
            // generate randome number
            array.push(randomIntFromInterval(5,630));
        }
        this.setState({array});
    }

    mergeSort(){

    }
    quickSort(){

    }
    BubbleSort(){
        
    }


    render(){
        const {array} = this.state;

        return (
            <div className="array-container">
            {array.map((value, idx) => (
                <div className="array-bar" key={idx} style={{height : `${value}px`}}></div>
            ))}
            <button onClick={() => this.resetArray()}> Generate New Array</button>
            <button onClick={() => this.mergeSort()}> Merge Sort</button>
            <button onClick={() => this.quickSort()}> Quick Sort</button>
            <button onClick={() => this.BubbleSort()}> Bubble Sort</button>
        </div>
        );
    }
}

function randomIntFromInterval(min, max)
{
    return Math.floor(Math.random() * (max - min + 1) + min);
}