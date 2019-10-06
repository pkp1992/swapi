import React, {Component} from 'react'
import './ItemList.css'

export default class ItemList extends Component {
    state = {
        list: ['Ivan', "luck", 'Some']
    }
    render() {
        const {list} = this.state;
        const item = list.map(el => {
            return <li key={el}>{el}</li>
        })
        return(
            <div className='list'>
                <ul>
                    {item}
                </ul>
            </div>
        )
    }
}