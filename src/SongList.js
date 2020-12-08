import React from "react";
import { Card, Button } from "semantic-ui-react";

function SongList(props) {
  const songs = props.songs.map((song) => {
    return (
      <Card key={song.id}>
        <Card.Content>
          <Card.Header> Title: {song.title}</Card.Header>
          <Card.Description>Song:{song.artist}</Card.Description>
          <Card.Description>Album: {song.album}</Card.Description>
        </Card.Content>
        <Card.Content extra>
          <Button>Delete Song</Button>
          <Button>Edit Song</Button>
        </Card.Content>
      </Card>
    );
  });

  return <Card.Group>{songs}</Card.Group>;
}

export default SongList;
