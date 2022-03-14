import scifi from '../assets/genres/sci-fi.jpg';

export const genres = [
    {
      name: 'Sci-Fi',
      image: scifi,
    },
    {
      name: 'Mystery',
      image: scifi,
    },
    {
      name: 'Drama',
      image: scifi,
    },
    {
      name: 'Horror',
      image: scifi,
    },
    {
      name: 'Comedy',
      image: scifi,
    },
    {
      name: 'Thriller',
      image: scifi,
    },
    {
      name: 'Biography',
      image: scifi,
    },
    {
      name: 'Action',
      image: scifi,
    },
    {
      name: 'Romance',
      image: scifi,
    },
    {
      name: 'Others',
      image: scifi,
    },
  ];

  export const feedQuery = `*[_type == "pin"] | order(_createdAt desc) {
    image{
      asset->{
        url
      }
    },
        _id,
        destination,
        postedBy->{
          _id,
          userName,
          image
        },
        save[]{
          _key,
          postedBy->{
            _id,
            userName,
            image
          },
        },
      } `;
  
  export const pinDetailQuery = (pinId) => {
    const query = `*[_type == "pin" && _id == '${pinId}']{
      image{
        asset->{
          url
        }
      },
      _id,
      title, 
      about,
      genre,
      destination,
      postedBy->{
        _id,
        userName,
        image
      },
     save[]{
        postedBy->{
          _id,
          userName,
          image
        },
      },
      comments[]{
        comment,
        _key,
        postedBy->{
          _id,
          userName,
          image
        },
      }
    }`;
    return query;
  };
  
  export const pinDetailMorePinQuery = (pin) => {
    const query = `*[_type == "pin" && genre == '${pin.genre}' && _id != '${pin._id}' ]{
      image{
        asset->{
          url
        }
      },
      _id,
      destination,
      postedBy->{
        _id,
        userName,
        image
      },
      save[]{
        _key,
        postedBy->{
          _id,
          userName,
          image
        },
      },
    }`;
    return query;
  };
  
  export const searchQuery = (searchTerm) => {
    const query = `*[_type == "pin" && title match '${searchTerm}*' || genre match '${searchTerm}*' || about match '${searchTerm}*']{
          image{
            asset->{
              url
            }
          },
              _id,
              destination,
              postedBy->{
                _id,
                userName,
                image
              },
              save[]{
                _key,
                postedBy->{
                  _id,
                  userName,
                  image
                },
              },
            }`;
    return query;
  };
  
  export const userQuery = (userId) => {
    const query = `*[_type == "user" && _id == '${userId}']`;
    return query;
  };
  
  export const userCreatedPinsQuery = (userId) => {
    const query = `*[ _type == 'pin' && userId == '${userId}'] | order(_createdAt desc){
      image{
        asset->{
          url
        }
      },
      _id,
      destination,
      postedBy->{
        _id,
        userName,
        image
      },
      save[]{
        postedBy->{
          _id,
          userName,
          image
        },
      },
    }`;
    return query;
  };
  
  export const userSavedPinsQuery = (userId) => {
    const query = `*[_type == 'pin' && '${userId}' in save[].userId ] | order(_createdAt desc) {
      image{
        asset->{
          url
        }
      },
      _id,
      destination,
      postedBy->{
        _id,
        userName,
        image
      },
      save[]{
        postedBy->{
          _id,
          userName,
          image
        },
      },
    }`;
    return query;
  };