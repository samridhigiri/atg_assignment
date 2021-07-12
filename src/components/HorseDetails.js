import React from 'react';
import PropTypes from 'prop-types';
import { Row,Col } from 'antd';

function HorseDetails({horseInfo}){

    return(
        <>
        <Row gutter={[16, 16]}>
        <Col span={4}><span className='hoseInfoText'>Trainer:</span></Col>
        <Col span={8}><span>{horseInfo?.trainer?.firstName} {horseInfo?.trainer?.lastName}</span></Col>
      </Row>
      <Row gutter={[16, 16]}>
        <Col span={4}><span className='hoseInfoText'>Horse Father:</span></Col>
        <Col span={8}><span>{horseInfo?.pedigree?.father?.name}</span></Col>
      </Row>
      </>
    );
}

HorseDetails.propTypes = {
  horseInfo: PropTypes.object
};

export default HorseDetails;