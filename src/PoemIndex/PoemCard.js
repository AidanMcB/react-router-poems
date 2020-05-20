import React from 'react';
import { useHistory } from 'react-router'

export function PoemCard(props){
    let history = useHistory()
    
    const { poem } = props
    return (
        <div className="ui card">
            <div className="content">
                <div className="header">{poem.name}</div>
                <button className="button ui green" 
                onClick={() => history.push(`/poems/${poem.id}`)}>See Details</button>
            </div>
        </div>
    )
}