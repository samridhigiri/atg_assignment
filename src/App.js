import React,{useState} from 'react';
import './App.css';

import { Layout } from 'antd';

import GametypeSelection from './components/GametypeSelection';
import RaceinfoContainer from './components/RaceInfoContainer';
import { baseURL,sortProductsByTime } from './utils';
import Spinner from './components/Spinner';

const { Header, Content } = Layout;

function App() {

  const [inputState, setState] = useState('');
  const [raceResults, setraceResults] = useState(null);
  const [recentProducts, setrecentProducts] = useState(null);
  const [spinner,setSpinner] = useState(false);


  const setGameType = (gameType) => {
    setState(gameType);
    if(gameType){
      getProductsDetails(gameType);
    }
  };

  const getProductsDetails = async (gameType) => {
    setSpinner(true);
    const url = `${baseURL}/products/${gameType}`;
    try {
      const response = await fetch(url);
      const json = await response.json();
      if (json?.results?.length>0) {
        const betTypeDetail = json.results.sort(sortProductsByTime)[0];
        setrecentProducts(betTypeDetail);
        getData(betTypeDetail.id);
      }
    } catch (err) {
      setSpinner(false);
      setraceResults(null);
    }
  };

  const getData = async (id) => {
    const URL = `${baseURL}/games/${id}`;
    try {
      const response = await fetch(URL);
      const json = await response.json();
      setSpinner(false);
      setraceResults({ ...json});
    } catch (err) {
      setraceResults(null);
      setSpinner(false);
    }
  };
  
  return (
<>
    <Layout>
      <Header style={{"background":"rgb(0, 79, 159)",position: "fixed", zIndex: 1, width: "100%"}}><GametypeSelection handleChange={setGameType}></GametypeSelection></Header>
      <Content style={{ padding: "0 50px",marginTop: 64}}>
        <RaceinfoContainer raceResults = {raceResults} type={inputState} recentProducts={recentProducts}></RaceinfoContainer>
      </Content>
    </Layout>
    <Spinner spinner={spinner}></Spinner>
  </>
  );
}

export default App;
