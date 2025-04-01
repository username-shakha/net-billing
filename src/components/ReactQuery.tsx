import { useQuery } from '@tanstack/react-query';

function ReactQuery() {
  const { data, isLoading, error } = useQuery({
    queryKey: ['exampleData'],
    queryFn: () =>
      fetch('https://jsonplaceholder.typicode.com/posts/1').then((res) =>
        res.json(),
      ),
  });

  if (isLoading) return <p>Загрузка...</p>;
  if (error) return <p>Ошибка: {error.message}</p>;

  console.log(data);
  return (
    <>
      <h1>React Query</h1>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </>
  );
}

export default ReactQuery;
