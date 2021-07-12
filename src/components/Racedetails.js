/* eslint-disable react/display-name */
import React from 'react';
import PropTypes from 'prop-types';
import { Table } from 'antd';

import HorseDetails from './HorseDetails';

function Racedetails(props){
    const { race } = props;
    const columns = [
        {
            title: '',
            dataIndex: '',
            key: 'x',
          },
        { title: 'Start number', dataIndex: 'number', key: 'number' },
        { title: 'Horse', dataIndex: ['horse','name'], key: 'name' },
        { title: 'Driver', dataIndex: 'driverName', key: 'driverName' },
      ];
      
      const data = race.starts.map((it,index)=>{
          it['key'] = index;
          it['driverName'] = `${it?.driver?.firstName} ${it?.driver?.lastName}`;//it?.driver?.firstName+' '+it?.driver?.lastName;
          return it;
      });

    const horseDetails = (data) => <HorseDetails horseInfo={data?.horse}></HorseDetails>;
   
    return(
        <Table
        columns={columns}
        expandable={{
          expandedRowRender: horseDetails
        }}
        dataSource={data}
        pagination={false}
      />
    );
}

Racedetails.propTypes = {
  race: PropTypes.object
};

export default Racedetails;