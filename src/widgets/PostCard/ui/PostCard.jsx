import { useParams, Link } from 'react-router-dom';
import { useGetPostQuery } from '@/entities/Post';
import { Navigation } from '@/features/navigation';
import { Loading } from '@/shared/ui/loading/loading';
import './index.css';

export function PostCard({link}) {

  const params = useParams();

  const { data: post = {}, isLoading } = useGetPostQuery(params.id);

  if (isLoading) {
    return <Loading />
  }

  return (
    <div className="PostCard">
      <h1 className="PostCard-title">{`${post.id} ${post.title}`}</h1>
      <p className="PostCard-body">{`${post.body}`}</p>
      <Navigation link={link} title={'назад'}/>
    </div>
  );
};