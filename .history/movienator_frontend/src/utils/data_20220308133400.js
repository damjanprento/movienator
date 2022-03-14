export const userQuery = (userId) => {
    const query = `*[_type == "user" && _id == '${userId}']`;

    return query;
}

export const searchQuery = (searchTerm) => {
    const query = `*[_type == "pin" && title match '${searchTerm}*' || genre match '${searchTerm}*' || about match '${searchTerm}*']{
        image {
            asset -> {
                url
            }
        },
        _id,
        destination,
        postedBy -> {
            _id,
            userName,
            image
        },
        save[] {
            _key,
            postedBy -> {
                _id,
                userName,
                image
            },
        },
    }`

    return query;
}

//gi redi po descending order, toj sto posleden kreiral, negovoto ke e prvo
export const feedQuery = `*[_type == 'pin'] | order(_createdAt desc) {
    image {
        asset -> {
            url
        }
    },
    _id,
    destination,
    postedBy -> {
        _id,
        userName,
        image
    },
    save[] {
        _key,
        postedBy -> {
            _id,
            userName,
            image
        },
    },
}`