export interface Post {
  userId: number;
  id: number;
  title: string;
  body: string;
}

export default async function Home() {
  const response = await fetch('https://jsonplaceholder.typicode.com/posts');

  // Error handling for API response
  if (!response.ok) {
    return <div>Something went wrong</div>;
  }

  const data: Post[] = await response.json(); 

  return (
    <div className="p-8 gap-3 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
      {data.map((post) => (
        <div
          className="border border-gray-300 rounded-lg shadow-md p-4 mb-4 bg-pink-200"
          key={post.id}
        >
          <h1 className="text-lg font-bold mb-2">{post.title}</h1>
          <p className="text-gray-600">{post.body}</p>
        </div>
      ))}
    </div>
  );
}
