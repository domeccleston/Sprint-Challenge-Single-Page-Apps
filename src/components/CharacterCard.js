import React from "react";
import { Card, Image } from "semantic-ui-react";


export default function CharacterCard({ data }) {
  console.log(data)
  return (
    <Card>
      <Image src={data.image}/>
      <Card.Content>
        <Card.Header>{data.name}</Card.Header>
        <Card.Meta>{data.species} {data.status}</Card.Meta>
        <Card.Description>
          Location: {data.location.name} <br></br>
          Status: {data.status}
        </Card.Description>
      </Card.Content>
    </Card>
  )
}