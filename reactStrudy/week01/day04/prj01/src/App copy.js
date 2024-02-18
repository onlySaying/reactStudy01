import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import { Table } from 'react-bootstrap';

function App() {
  return (
    <div>
      <h1>hello world</h1>
      <InputGroup className="mb-3">
        <Form.Control
          placeholder="해야할 일을 입력 하세요."
          aria-label="해야할 일을 입력 하세요."
          aria-describedby="basic-addon2"
        />
        <Button variant="outline-secondary" id="saveBtn">
          Button
        </Button>
      </InputGroup>
      

      <Table striped bordered hover size="sm">
            <thead>
                <tr>
                <th>#</th>
                <th>First Name</th>
                <th>Last Name</th>
                <th>Username</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                <td>1</td>
                <td>Mark</td>
                <td>Otto</td>
                <td>@mdo</td>
                </tr>
                <tr>
                <td>2</td>
                <td>Jacob</td>
                <td>Thornton</td>
                <td>@fat</td>
                </tr>
            </tbody>
      </Table>

    </div>
  );
}

export default App;
