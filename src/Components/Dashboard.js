import React from 'react';
import Table from './Table';
import Photos from './Photos';
import { useState } from 'react';

function Dashboard(props) {
    const [design, setDesign] = useState('userlist')

    // const change = () => {

    // }

    return (
        <div style={{display: 'flex', justifyContent: 'flex-start',gap: '200px'}}>
            <div style={{backgroundColor: 'red',display: 'flex', justifyContent: 'flex-start',flexDirection: 'column'}} >
                <button onClick={() => setDesign('userlist')}>User List</button>
                <button onClick={() => setDesign('photos')}>Photos</button>
            
            </div>
            <div style={{backgroundColor: 'blue'}}>
                {design == 'userlist' ? 
                    <Table />
                        :
                    <Photos />
                }
            </div>
        </div>
    );
}

export default Dashboard;