import React, {useState} from "react";

export default function AlbumTitle({name, userId, email}) {
    const [albums, setAlbums] = useState([]);

    const nameClick = async (event) => {
        event.preventDefault();

        const response = await fetch(`https://jsonplaceholder.typicode.com/users/${userId}/albums`);
        const albumsFromAPI = await response.json();
        setAlbums(albumsFromAPI);
    };

    return (
        <div>
            <h1 onClick={nameClick}>{name}</h1>
            <a href={email}>{email}</a>
            {albums.map((album) => (<li key={album.id}>{album.title}</li>))}
        </div>
    )
}