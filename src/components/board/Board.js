import React from 'react'
import Square from './../square'
import './Board.css'
import {calculateWinner} from "./Utils";

export default  class Board extends React.Component{

    constructor(props){
        super(props)
        this.state = {
            squares: Array(9).fill(null),
            xTurn: true
        }
        this.handleClick = this.handleClick.bind(this)
    }

    handleClick(i){
        const sq = this.state.squares.slice()
        sq[i] = this.state.xTurn ? 'X' : '0'
        this.setState({squares : sq, xTurn: !this.state.xTurn})
    }

    renderSquare(i){
        return <Square value={this.state.squares[i]} onClick={() => this.handleClick(i)} />
    }



    render() {

        const winner = calculateWinner(this.state.squares);
        let status
        if (winner) {
            status = 'Winner: ' + winner;
        } else {
            status = 'Next player: ' + (this.state.xTurn ? 'X' : 'O');
        }
        return (
            <div>
                <div className="status">{status}</div>
                <div className="board-row">
                    {this.renderSquare(0)}
                    {this.renderSquare(1)}
                    {this.renderSquare(2)}
                </div>
                <div className="board-row">
                    {this.renderSquare(3)}
                    {this.renderSquare(4)}
                    {this.renderSquare(5)}
                </div>
                <div className="board-row">
                    {this.renderSquare(6)}
                    {this.renderSquare(7)}
                    {this.renderSquare(8)}
                </div>
            </div>
        );
    }
}