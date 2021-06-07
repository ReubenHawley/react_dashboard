import React from 'react';
import Link from '@material-ui/core/Link';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Title from './Title';
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import clsx from "clsx";

function preventDefault(event) {
  event.preventDefault();
}

const useStyles = makeStyles({
  depositContext: {
    flex: 1,
  },
});

export default function CustomCard(props) {
  const classes = useStyles();
    const fixedHeightPaper = clsx(classes.paper, classes.fixedHeight);
  return (
    <React.Fragment>

        <Grid item xs={12} md={4} lg={3}>
            <Title>{props.title}</Title>
              <Paper className={fixedHeightPaper}>
                  <Typography component="p" variant="h4">
                    $3,024.00
                  </Typography>
                  <Typography color="textSecondary" className={classes.depositContext}>
                    on 15 March, 2019
                  </Typography>
                  <div>
                    <Link color="primary" href="#" onClick={preventDefault}>
                      View balance
                    </Link>
                  </div>
              </Paper>
        </Grid>
    </React.Fragment>
  );
}
