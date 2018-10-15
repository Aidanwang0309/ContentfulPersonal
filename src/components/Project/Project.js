import React from "react";
import "./Project.css";
import { Grid, Image } from "semantic-ui-react";

const project = props => {
  let imageURL = "https:" + props.avatar;
  console.log(imageURL);
  return (
    <Grid>
      <Grid.Row>
        <Grid.Column width={3} />
        <Grid.Column width={10}>
          <h1>{props.name}</h1>
          <h2>{props.description}</h2>
          <Image className="Image" src={imageURL} />
        </Grid.Column>
        <Grid.Column width={3} />
      </Grid.Row>
    </Grid>
  );
};

export default project;
