import React, { useEffect, useState } from 'react';
import { useTypedSelector } from '../hooks/useTypedSelector';
import { deleteMail } from '../store/action-creator/mailsAction';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import TableSortLabel from '@material-ui/core/TableSortLabel';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import { useActions } from '../hooks/useAction';
import EditeMailModal from './EditeMailModal';

const useStyles = makeStyles({
  table: {
    minWidth: 900,
  },
});

type Order = 'asc' | 'desc';

interface HeadCell {
  id: string;
  label: string;
  sorteble: boolean
}

const headCells: HeadCell[] = [
  { id: 'name', label: 'Название рассылки', sorteble: true },
  { id: 'create_at', label: 'Дата рассылки', sorteble: true },
  { id: 'quantity', label: 'Кол-во отправленных подарков', sorteble: true },
  { id: 'edit', label: 'Отмена рассылки', sorteble: false },
  { id: 'delete', label: 'Редактировать рассылку', sorteble: false },
];

const MailList: React.FC = () => {
    const classes = useStyles();
    const {mails, error, loading, page, limit, keyword, count} = useTypedSelector(state => state.mail)

    const [editeVisible, setEditeVisible] = useState(false)
    const [order, setOrder] = useState<Order>('asc');
    const [orderBy, setOrderBy] = useState('');
    const [editMail, setEditMail] = useState({});
    const {fetchMails, setMailCount} = useActions();

    useEffect(() => {
        fetchMails(page, limit, order, orderBy, keyword)
    }, [page, order, orderBy, keyword, count])

    const deleteItem = (id: number) => {
        deleteMail(id).then(() => {setMailCount(count - 1)})
    }

    const sortHandler = (id: string) => {
      setOrderBy(id)
      setOrder(order == 'asc' ? 'desc' : 'asc')
    }

    const formatter = new Intl.DateTimeFormat("ru", {
      day: "2-digit",
      month: "2-digit",
      year: "numeric"
    });

    if (loading) {
        return <h1>Loading...</h1>
    }
    if (error) {
        return <h1>{error}</h1>
    }
    
    return (
        <>

        <EditeMailModal open={editeVisible} onClose={() => setEditeVisible(false)} mail={editMail}/>

        <TableContainer component={Paper}>
        <Table className={classes.table} size="small" aria-label="a dense table">
        <TableHead>
          <TableRow>
            {headCells.map((headCell) => (
          <TableCell key={headCell.id}
          sortDirection={orderBy === headCell.id ? order : false}>   
              <TableSortLabel
              active={orderBy === headCell.id}
              direction={orderBy === headCell.id ? order : 'asc'}
              onClick={() => headCell.sorteble ? sortHandler(headCell.id) : null}
              >
              {headCell.label}
              </TableSortLabel>
          </TableCell>
    ))}
          </TableRow>
        </TableHead>
        <TableBody>
          {mails.map((mail) => (
            <TableRow key={mail.id}>
              <TableCell>{mail.name}</TableCell>
              <TableCell>{formatter.format(Date.parse(mail.create_at))}</TableCell>
              <TableCell>{mail.quantity}</TableCell>
              <TableCell><Button variant="contained" color="secondary" onClick = {() => deleteItem(mail.id)}>Удалить</Button></TableCell>
              <TableCell> <Button variant="contained" onClick={() => {setEditMail(mail); setEditeVisible(true)}}>Редактировать</Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    </>
    );
};

export default MailList;