import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import { client } from '../client';
import MasonryLayout from './MasonryLayout';
import Spinner from './Spinner';

const Feed = () => {
  const [loading, setLoading] = useState(false);
  const { genreId } = useParams();

  useEffect(() => {
    setLoading(true);

    if(genreId) {
      const query = searchQuery(genreId);
    } else {

    }
  }, [genreId]);

  if(loading) return <Spinner message="We are adding new movies to your feed!" />

  return (
    <div>
      
    </div>
  )
}

export default Feed