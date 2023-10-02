import React from 'react';
import { Navigation } from '@/features/navigation';
import './index.css';

const Post = React.memo(function ({data}) {

  return (
    <div className="Post">
      <p className="Post-body">{`${data.id} ${data.title} ${data.body}`}</p>
      <Navigation link={`/${data.id}`} title={'просмотр'}/>
    </div>
  );
});

export { Post };