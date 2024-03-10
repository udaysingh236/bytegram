import { IPost } from '../types';
import { PAGE_SIZE } from '../utils/constants';
import supabase from './supabase';

interface IGetFolloweePosts {
  posts: IPost[];
  count: number | null;
}

export async function getFolloweePosts(page: number): Promise<IGetFolloweePosts> {
  const from = (page - 1) * PAGE_SIZE;
  const to = from + PAGE_SIZE - 1;
  const {
    data: posts,
    error,
    count,
  } = await supabase
    .from('posts')
    .select('*', { count: 'exact' })
    .range(from, to)
    .order('createdAt', { ascending: false });
  if (error) {
    throw new Error(error.message);
  }

  return { posts, count };
}
