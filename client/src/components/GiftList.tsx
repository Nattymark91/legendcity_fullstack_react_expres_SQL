import React from 'react';
import { useTypedSelector } from '../hooks/useTypedSelector';
import GiftCard from './GiftCard';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
    },
    paper: {
      height: 140,
      width: 100,
    },
    control: {
      padding: theme.spacing(2),
    },
  }),
);


const GiftList: React.FC = () => {
    const classes = useStyles();
    const {gifts, error, loading} = useTypedSelector(state => state.gift)

    if (loading) {
        return <h1>Loading...</h1>
    }
    if (error) {
        return <h1>{error}</h1>
    }
    
    return (
        <>
        <Grid container className={classes.root} spacing={2}>
      <Grid item xs={12}>
        <Grid container justifyContent="center" spacing={2}>
        {gifts.map((gift) => (
            <Grid key={gift.id} item>
              <GiftCard key={gift.id} gift={gift}/>
            </Grid>
          ))}
        </Grid>
      </Grid>
    </Grid>
    </>
    );
};

export default GiftList;