import React from 'react';

const PlayersComponent = (props) => {
  // console.log(props);
  let Criketers = props.play;
  console.log(Criketers);
  return (
    <div>
      <h1 className="display-4 font-weight-bold text-primary text-uppercase my-4">
        List Of Players
      </h1>

      <div className="PlayersBlock">
        {Criketers.map((player) => (
          <div className="card">
            <img className="image-card-top" src={player.photo} alt="players" />
            <div className="card-body">
              <h4 className="card-title">{player.name}</h4>
              <p className="card-text">Total Runs: {player.runs}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PlayersComponent;
