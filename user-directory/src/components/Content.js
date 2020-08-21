import React, { Component } from 'react'
import People from './People'
import data from '../data'


export default class Content extends Component {
    constructor() {
        super();

        this.state = {
            people: data,
            index: 0
        }
        this.previous = this.previous.bind(this)
        this.next = this.next.bind(this)
    }

    previous() {
        this.setState({
            index: this.state.index - 1
        })
    }

    next() {
        this.setState({
            index: this.state.index + 1
        })
    }

    render() {
        console.log(this.state.index)
        return (

            <div className='body'>
                <div className='content'>
                    <People info={this.state.people[this.state.index]} />
                </div>
                <div className='options'>
                    <button className='scroll' onClick={this.previous}>{'< Previous'}</button>
                    <div className='toolbar'>
                        <button className='tool'>Edit</button>
                        <button className='tool'>Delete</button>
                        <button className='tool'>New</button>
                    </div>
                    <button className='scroll' onClick={this.next}>{'Next >'}</button>
                </div>
            </div>
        )
    }


}