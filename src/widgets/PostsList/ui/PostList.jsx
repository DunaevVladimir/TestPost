import { useCallback, useState } from 'react';
import { useGetPostsListQuery } from '@/entities/Post';
import { Observer } from '@/shared/observer';
import { Post } from '@/entities/Post';
import { Loading } from '@/shared/ui/loading/loading';
import './index.css';

export function PostsList() {

  const [query, setQuery] = useState({limit: 10, start: 0});

  const { data: posts = [], isLoading, isFetching } = useGetPostsListQuery(query);

  const callbacks = {
    onObserve: useCallback(() => {
      if (isFetching === false) {
        setQuery((prev) => {return {...prev, start: prev.start + 10}})
      }
    }, [isFetching]),
    onEndObserve: useCallback(() => {}, []),
  }

  if (isLoading) {
    return <Loading />
  }

  return (
    <Observer onObserve={callbacks.onObserve} onEndObserve={callbacks.onEndObserve} margin={200}>
      <div className='PostList'>
          {posts.map((post) => (
            <Post key={post.id} data={post}/>
          ))}
      </div>
    </Observer>
  );
};