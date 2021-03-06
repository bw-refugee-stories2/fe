
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { red } from '@material-ui/core/colors';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import DeleteIcon from '@material-ui/icons/Delete';
import ThumbUpIcon from '@material-ui/icons/ThumbUp';
import styled from 'styled-components';
import {axiosWithAuth} from '../axiosWithAuth';



const useStyles = makeStyles(theme => ({
  card: {
    maxWidth: "100%",
    marginTop: 20,
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
  avatar: {
    backgroundColor: red[500],
  },
}));



export default function StoriesReviewCards(props) {

    const approvedStory = {
    id: props.singleStory.id,
    name: props.singleStory.name,
    image_URL: props.singleStory.image_URL,
    quote: props.singleStory.quote,
    content: props.singleStory.content,
    author: props.singleStory.author,
    approved: true
}


  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };



  const handleAcceptClick = e => {
      axiosWithAuth().put(`https://refugee-stories2.herokuapp.com/api/stories/${props.singleStory.id}`, approvedStory)
      .then(response => {
          window.location.reload();
          console.log(response.data);
      }).catch(err => {
          console.log(err);
      })
  }

  const handleDeleteClick = e => {
      axiosWithAuth().delete(`https://refugee-stories2.herokuapp.com/api/stories/${props.singleStory.id}`)
      .then(response => {
          window.location.reload();
          console.log(response);
      })

  }


  return (
    <Card className={classes.card}>
      <CardHeader
        // avatar={
        //   <Avatar aria-label="recipe" className={classes.avatar}>
        //     R
        //   </Avatar>
        // }
        // action={
        //   <IconButton aria-label="settings">
        //     <MoreVertIcon />
        //   </IconButton>
        // }
        title= {props.singleStory.name}
        />
      <CardMedia
        className={classes.media}
        image={props.singleStory.image_URL}
        title={"Paella dish"}
      />
      <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">
         {props.singleStory.quote}
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton>
            <ThumbUpIcon onClick={handleAcceptClick} />
        </IconButton>
        <IconButton>
            <DeleteIcon onClick={handleDeleteClick} />
        </IconButton>
        <IconButton
          className={clsx(classes.expand, {
            [classes.expandOpen]: expanded,
          })}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </IconButton>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography paragraph>
            {props.singleStory.content}
          </Typography>
        </CardContent>
      </Collapse>
    </Card>
  );
}
