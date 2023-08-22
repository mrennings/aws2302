import React, { useState, useEffect } from 'react';
import NachrichtUpdate from './NachrichtUpdate';

function Nachricht() {
    const [nachricht, setNachricht] = useState('');

    function updNachricht(motd) {
        setNachricht(motd);
    }


    useEffect(() => {
        fetch('http://localhost:8080/api/nachricht')
            .then(response => response.json())
            .then(json => {
                console.log(json)
                setNachricht(json.nachricht);
            });
    }, []);

    return (
        <div className="Nachricht">
            <h1>Aktuelle Nachricht:</h1>
            <h2>{nachricht}</h2>
            <NachrichtUpdate updateNachricht={updNachricht} text={nachricht} />
        </div>
    );
}

export default Nachricht;