import { Route, Routes } from 'react-router-dom';
import './App.css';
import AddedPeople from './components/AddedPeople/AddedPeople';
import Delete from './components/Delete/Delete';
import Form from './components/Form/Form';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import Update from './components/Update/Update';
import UpdateDetails from './components/UpdateDetails/UpdateDetails';


function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes>
          <Route path='/' element={<Home></Home>}></Route>
          <Route path='/form' element={<Form></Form>}></Route>
          <Route path='/addedPeople' element={<AddedPeople></AddedPeople>}></Route>
          <Route path='/delete' element={<Delete></Delete>}></Route>
          <Route path='/update' element={<Update></Update>}></Route>
          <Route path='/update/:id' element={<UpdateDetails></UpdateDetails>}></Route>
      </Routes>
    </div>
  );
}

export default App;
