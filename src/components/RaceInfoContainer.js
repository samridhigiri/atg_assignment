import React from 'react';
import PropTypes from 'prop-types';

import Trackdetails from './Trackdetails';
import Raceinformation from './Raceinformation';
import Racedetails from './Racedetails';

function RaceinfoContainer({raceResults,type,recentProducts}){

    return(
    <div className='container'>
      {raceResults && (
          <div style={{display:'flex',flexDirection:'column'}}>
            <Trackdetails data={recentProducts} type={type}></Trackdetails>
            {raceResults?.races?.map((race) => (
            <div className="site-card-border-less-wrapper" key={race.id}>
              <Raceinformation data={race}></Raceinformation>
              <Racedetails race={race}></Racedetails>
            </div>
            ))}
          </div>
        )}
        </div>
    );     
}

RaceinfoContainer.propTypes = {
  raceResults: PropTypes.object,
  type:PropTypes.string,
  recentProducts:PropTypes.object
};

export default RaceinfoContainer;