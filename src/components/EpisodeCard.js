import React from "react";
import { Card, Icon } from "semantic-ui-react";

export default function EpisodeCard({data}) {
    console.log(data);
    return (
        <Card>
            <Card.Content>
                <Card.Header>
                    {data.episode}: {data.name}
                </Card.Header>
                <Card.Meta>
                    {data.air_date}
                </Card.Meta>
                <br></br>
                <Card.Content extra>
                    <Icon name='user' />
                    {data.characters.length} characters
                </Card.Content>
            </Card.Content>
        </Card>
    )
}