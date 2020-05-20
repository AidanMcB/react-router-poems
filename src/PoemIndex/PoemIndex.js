import React, { useState, useEffect } from 'react';
import { PoemCard } from './PoemCard';
import { useParams } from 'react-router'
import { useHistory } from 'react-router'

export function PoemIndex(){
    let [ poems, setPoem ] = useState([])
    let params = useParams()
    // console.log(params) 

    let history = useHistory()
    useEffect(() => {
        fetch(`http://localhost:3000/poems`)
            .then( res => res.json())
            .then( poems => setPoem(poems) )
    }, [])

    return (
        <div className="ui cards" style={{ marginTop: 20 }}>
            {poems.map( poem => (
                <PoemCard
                    key={poem.id}
                    poem={poem}
                />
            ))}
            <button className="ui button green" onClick={() => history.push('/new')}>Add New Poem</button>
        </div>
    )
}