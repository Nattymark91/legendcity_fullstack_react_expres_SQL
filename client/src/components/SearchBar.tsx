import { useState } from 'react';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import InputBase from '@material-ui/core/InputBase';
import { useActions } from '../hooks/useAction';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      padding: '2px 4px',
      display: 'flex',
      alignItems: 'center',
      width: 400,
    },
    input: {
      marginLeft: theme.spacing(1),
      flex: 1,
    },
    iconButton: {
      padding: 10,
    },
    divider: {
      height: 28,
      margin: 4,
    },
  }),
);

export default function SerchBar() {
  const classes = useStyles();
  const [searchValue, setSearchValue] = useState('');
  const {setMailKeyword} = useActions();

  return (
    <Paper component="form" className={classes.root}>
      <InputBase
        className={classes.input}
        placeholder="Введите данные для поиска"
        inputProps={{ 'aria-label': 'Введите данные для поиска' }}
        value={searchValue}
        onChange={e => {setSearchValue(e.target.value), setMailKeyword(e.target.value)}}
      />
    </Paper>
  );
}