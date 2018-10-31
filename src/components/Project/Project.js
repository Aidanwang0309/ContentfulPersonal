import React from "react";
import "./Project.css";
import { Grid, Image } from "semantic-ui-react";

const project = props => {
  let imageURL = "https:" + props.avatar;
  return (
    <Grid>
      <Grid.Row>
        <Grid.Column
          className="ProjectContainer"
          width={16}
          style={{ padding: "0" }}
        >
          {/* <h1>{props.name}</h1> */}
          {/* <h2>{props.description}</h2> */}
          <Image className="Image" src={imageURL} href="" />
        </Grid.Column>
      </Grid.Row>
    </Grid>
  );
};

export default project;
