import './App.css';
import Header from "./components/Header";
import Form from "./components/Form";
import FirstName from "./components/FirstName";
import LastName from "./components/LastName";
import Email from "./components/Email";
import Button from "./components/Button";

function App() {
  return (
      <div className='app'>
          <Header/>
          <Form>
              <FirstName/>
              <LastName/>
              <Email/>
              <Button/>
          </Form>
      </div>
  );
}

export default App;
