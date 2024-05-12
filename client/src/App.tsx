import { Button } from '@material-ui/core';
import CreateMailModal from './components/CreateMailModal';
import MailList from './components/MailList';
import PaginationModule from './components/Pagination';
import SerchBar from './components/SearchBar';
import { useState } from 'react';

function App() {
  const [createVisible, setCreateVisible] = useState(false)

  return (
    <>
    <div style={{display: 'flex', justifyContent: 'space-between', margin: 20}}>
      <Button variant="contained" onClick={() => setCreateVisible(true)}>Создать акцию</Button>   
      <SerchBar/>
    </div>
    <MailList/>
    <PaginationModule/>
    <CreateMailModal open={createVisible} onClose={() => setCreateVisible(false)}/>
    </>
  );
}

export default App
