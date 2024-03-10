import { useQuery } from '@tanstack/react-query';
import { useSearchParams } from 'react-router-dom';
import { getFolloweePosts } from '../../services/apiPosts';

export function usePosts() {
  const [searchParams] = useSearchParams();
  const page = !searchParams.get('page') ? 1 : Number(searchParams.get('page'));
  const {
    isLoading,
    data: { posts, count } = {},
    error,
  } = useQuery({
    queryKey: ['posts', page],
    queryFn: () => getFolloweePosts(page),
    retry: false,
  });

  return { isLoading, error, posts, count };
}
