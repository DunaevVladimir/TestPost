import React from 'react';
import { Link } from 'react-router-dom';

const Navigation = React.memo(function ({link, title}) {

  return (
    <Link to={link}>
      {title}
    </Link>
  );
});

export { Navigation };