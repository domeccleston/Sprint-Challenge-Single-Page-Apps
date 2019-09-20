import React from "react";
import { Card, Icon} from "semantic-ui-react";

export default function LocationCard({data}) {
  console.log(data)

  return (
    <Card>
      <Card.Content
      header={data.name}
      meta={data.type}
      description={data.dimension === 'unknown' ? "Unknown Dimension" : data.dimension}/>
      <Card.Content extra>
        <Icon name='user' />
        {data.residents.length > 1 ? `${data.residents.length} residents` : `${data.residents.length} resident`}
      </Card.Content>
    </Card>
  )
}
