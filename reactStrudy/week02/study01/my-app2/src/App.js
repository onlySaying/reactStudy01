import { useState } from 'react';
import Left from './components/Left';
import StudentList from './components/StudentList';
import { studentList } from './components/Data';

function App() {

  const [student, setStudent ] = useState(studentList[0].name);
  return (
    <>
      <StudentmanagePage/StudentmanagePage
    </>
  );
}

export default App;
