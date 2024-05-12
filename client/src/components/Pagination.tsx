import React, { useState } from 'react';
import { useActions } from '../hooks/useAction';
import Pagination from '@material-ui/lab/Pagination';
import { useTypedSelector } from '../hooks/useTypedSelector';



export default function PaginationModule() {
  const {count, limit} = useTypedSelector(state => state.mail);
  const {setMailPage} = useActions();

  const [page, setPage] = useState(1);

  const handleChange = (event: React.ChangeEvent<unknown>, value: number) => {
    setPage(value);
    setMailPage(value);
  };


  return (
    <Pagination count={Math.ceil(count / limit)} page={page} onChange={handleChange} />
  );
}