import { useEffect, useState } from 'react';
import useDebounce from './hooks/use-debounce';
import useFetch from './hooks/use-fetch';

// const DATA = ['bike', 'dog', 'coin', 'cat', 'shop', 'turtle'];
const App = () => {
  // const [results, setResults] = useState([]);
  const [text, setText] = useState('');

  const deb = useDebounce(text, 500);
  const url = `https://swapi.dev/api/planets/?search=${deb}`;
  const { data, isLoading, error } = useFetch(url);

  if (isLoading) {
    return <pre>Loading</pre>;
  }

  if (error) {
    return <pre>ups... an error occured</pre>;
  }

  // useEffect(() => {
  //   const d = DATA.filter((el) => el.toLowerCase().includes(deb));
  //   setResults(d);
  // }, [deb]);

  return (
    <div
      className="App"
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: '20px',
        flexDirection: 'column',
      }}
    >
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      {data?.length > 0 ? (
        data?.map((el, i) => <div key={i}>{el.name}</div>)
      ) : (
        <div>No results</div>
      )}
    </div>
  );
};

export default App;
