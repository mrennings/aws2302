import React, {useState} from 'react';

function NachrichtUpdate( {updateNachricht, text} ) {

    const [nachricht, setNachricht] = useState('');

    function handleUpdate(e) {
        e.preventDefault();
        const data = {motd: nachricht};
        fetch('http://localhost:8080/api/nachricht/update', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data),
        })
        setNachricht('');
        updateNachricht(nachricht);
    }

    return (
        <div className="NachrichtUpdate">
            <h2>Update Nachricht</h2>
            
            <input type="text" value={nachricht} onChange={e => setNachricht(e.target.value)} placeholder={text} />
            <button onClick={handleUpdate}>Update</button>
        </div>
    );
}

export default NachrichtUpdate;