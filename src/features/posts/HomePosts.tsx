import Post from './Post';
import { usePosts } from './usePosts';

function HomePosts() {
  const { isLoading, posts } = usePosts();
  if (isLoading) return <p className="text-2xl font-medium">Loading...</p>;
  posts?.map((post) => (
    <Post
      key={post.id}
      id={post.id}
      createdAt={post.createdAt}
      updatedAt={post.updatedAt}
      imageUrl={post.imageUrl}
      postDescription={post.postDescription}
    />
  ));
}

export default HomePosts;
