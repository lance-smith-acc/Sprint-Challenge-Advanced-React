import React from 'react';
import {Card, CardBody, CardHeader, CardSubtitle, CardText} from 'reactstrap';

const PlayerCard = props => {
    return (
        <Card key={props.id} style={{width:"50%", margin:"0 auto", marginBottom:"1%"}}>
            <CardBody>
                <CardHeader data-testid={`player-name${props.id}`} style={{margin:"0 auto", marginBottom:"2%", width:"75%"}}>{props.name}</CardHeader>
                <CardSubtitle data-testid={`country-name${props.id}`}>{props.country}</CardSubtitle>
                <CardText>Total Searches: {props.searches}</CardText>
            </CardBody>
        </Card>
    )
}

export default PlayerCard;