import React, { useState } from 'react';

function IPApiForm() {
    const [ipAddress, setIPAddress] = useState('');
    const [ipInfo, setIPInfo] = useState(null);

    const fetchIPInfo = async () => {
        try {
            const response = await fetch(`http://ip-api.com/json/${ipAddress}`);
            const data = await response.json();
            setIPInfo(data);
        } catch (error) {
            console.error('Fehler:', error);
        }
    };

    return (
        <div>
            <h1>Informationen zur IP</h1>
            <input type="text"
                value={ipAddress}
                onChange={(e) => setIPAddress(e.target.value)}
                placeholder='IP-Adresse'
            />
            <button onClick={fetchIPInfo} >Senden</button>
            {ipInfo && (
                <div>
                    <h2>Ihre Angefragten Informationen:</h2>
                    <pre>{JSON.stringify(ipInfo, null, 2)}</pre>
                </div>
            )}
        </div>
    );
}

export default IPApiForm;
