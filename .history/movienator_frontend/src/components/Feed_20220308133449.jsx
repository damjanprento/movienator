import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import { client } from '../client';
import { feedQuery, searchQuery } from '../utils/data';
import MasonryLayout from './MasonryLayout';
import Spinner from './Spinner';

const Feed = () => {
  const [loading, setLoading] = useState(false);
  const [pins, setPins] = useState(null);
  const { genreId } = useParams();

  useEffect(() => {
    setLoading(true);

    if(genreId) {
      const query = searchQuery(genreId);

      client.fetch(query)
        .then((data) => {
          setPins(data);
          setLoading(false);
        })
    } else {
      client.fetch(feedQuery)
        .then((data) => {
          setPins(data);
          setLoading(false);
        })
    }
  }, [genreId]);

  if(loading) return <Spinner message="We are adding new movies to your feed!" />

  return (
    <div>
      
    </div>
  )
}

export default Feed