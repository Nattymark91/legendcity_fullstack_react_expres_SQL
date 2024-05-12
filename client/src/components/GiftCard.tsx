import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { useActions } from '../hooks/useAction';

const useStyles = makeStyles({
  root: {
    width: 275,
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
});

export default function GiftCard({gift}) {
  const classes = useStyles();
  const {setCurrentGift} = useActions();

  return (
    <Card className={classes.root}>
      <CardContent>
        <Typography variant="h5" component="h2">
        {gift.title}
        </Typography>
        <Typography className={classes.pos} color="textSecondary">
        Остаток: {gift.quantity}
        </Typography>
        <Typography variant="body2" component="p">
        Дата сгорания: <br/>
        {gift.deadline}
        </Typography>
        <Typography className={classes.pos} color="textSecondary">
        Номинал: {gift.nominal}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small" onClick={()=> {setCurrentGift(gift)}}>Выбрать</Button>
      </CardActions>
    </Card>
  );
}