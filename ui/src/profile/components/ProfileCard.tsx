import React from "react";

import { makeStyles } from "@material-ui/core/styles";
import Card from '@material-ui/core/Card';
import CardContent from "@material-ui/core/CardContent";
import CardMedia from '@material-ui/core/CardMedia';

import { ProfileDetails } from "./ProfileDetails";

const useStyles = makeStyles(() => ({
  details: {
    "height": "auto",
    "width": "400px",
    "min-width": "400px",
    "box-shadow": "10px 10px 20px #c9c9c9"
  },
  profilePic: {
    "height": "400px",
    "width": "100%"
  },
}));

export interface ProfileCardProps {
  name: string;
  race: string;
  birthyear: string;
}

export const ProfileCard = (props: ProfileCardProps) => {
  const classes = useStyles();

  return (
    <Card className={classes.details}>
      <CardMedia 
        className={classes.profilePic}
        image="https://66.media.tumblr.com/9c0f217919b12c3b378ba878a4e370b1/tumblr_o7sgjyR0fP1s7x9qwo2_500.jpg" 
      />
      <CardContent>
        <ProfileDetails 
          name={props.name}
          race={props.race}
          birthyear={props.birthyear}
        />
      </CardContent>
    </Card>
  );
}