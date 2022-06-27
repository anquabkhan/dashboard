import React ,{useState} from 'react';

function Table(props) {
    const [players,setPlayers] = useState([
        {position: "forward", name: "leborn", team: "lakers"},
        {position: "guard", name: "Russell Westbrook", team: "Rockets"},
        {position: "guard", name: "james", team: "Rockets"},
      ])
    return (
        <div>
          <p>hiiiii abuuasdf sdfhisd fwuef osfsdhfni shfushf sf sdfhs f</p>  
        <table>
            <thead>
            <tr>
                <th>Id</th>
                <th>First Name</th>
                <th>Last Name</th>
                <th>Username</th>
            </tr>
            </thead>
            <tbody style={{background: 'red'}}>
            {/* <tr>
                <td>1</td>
                <td>Mark</td>
                <td>Otto</td>
                <td>@fat</td>
            </tr> */}
            { players.map( (player,index) => {
                return(
                <tr key={index}>
                    <td>{index}</td>
                    <td>{player.position}</td>
                    <td>{player.name}</td>
                    <td>{player.team}</td>
                </tr>
                )
            })}
            </tbody>

        </table>



        </div>
    );
}

export default Table;