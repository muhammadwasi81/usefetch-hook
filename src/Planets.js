import useFetch from './hooks/use-fetch';

const Planets = () => {
  const url = 'https://swapi.dev/api/planets/';
  const { data, isLoading, error } = useFetch(url);
  if (isLoading) {
    return <div>Loading...</div>;
  }
  if (error) {
    return <div>Something went wrong</div>;
  }
  return (
    <div>
      {data?.map((el, index) => (
        <>
          <ul key={index}>
            <li>{el.name}</li>
            <li>{el.population}</li>
          </ul>
        </>
      ))}
    </div>
  );
};

export default Planets;
