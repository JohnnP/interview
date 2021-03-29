import { useState, useRef } from 'react';
import SearchBar from './components/SearchBar';
import ResultList from './components/ResultList';
import getRepository from './services/github-repository';
import { debounce } from 'lodash';

import './App.scss';


function App(): JSX.Element {
  const [querie, setQuerie] = useState<string>('');
  const [data, setData] = useState<any>({});
  const [loading, setLoading] = useState<boolean>(false);
  const [page, setPage] = useState<number>(1);

  const onChange = async (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    setQuerie(value);

    if(value === '') {
      setData({data: {}});
    } else {
      await debouncedCall(value);
    }   
  };

 

  const getData = async (value: any) => {
    setLoading(true);
    const response = await getRepository(value, 1) || {data: {}};
    setData(response.data);
    setPage(1);
    setLoading(false);
  };  

  const debouncedCall = useRef(debounce(getData, 500)).current;
  
  const getPlus = async () => {
    const nextPage = page + 1;
    const response = await getRepository(querie, nextPage) || {data: {}};
    setPage(nextPage);
    setData((data: any) => ({...data, items: [...data.items, ...response.data.items]}));
  };

  return (
    <div className="App">
      <SearchBar value={querie} onChange={onChange} />
      {loading ? <div>Loading ...</div> : <ResultList list={data.items} />}
      {data.items && <button onClick={getPlus}>Plus</button>}
    </div>
  ); 
}

export default App;
