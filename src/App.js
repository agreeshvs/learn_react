import './App.css';
import { Footer } from './components/Footer';
import { Header } from './components/Header';
import ListItem from './list/ListItem';

function App() {
  /* function ListItem(){
    return (
          <div className='list-item'>
            <div className='list-title'>
              <h4>Title one</h4>
            </div>
            <div className='list-descr'>
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
            </div>
            <div className='list-label'>
              <span>Label 1</span>
              <span>Label 2</span>
              <span>Label 3</span>
            </div>
          </div>
    )
  } */
  return (
    <div className="App">
      <Header />
      <div className='app-body'>
        <div className='app-list'>
          <ListItem />
          <ListItem />
          <ListItem />
          <ListItem />
          {/* <div className='list-item'>
            <div className='list-title'>
              <h4>Title one</h4>
            </div>
            <div className='list-descr'>
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
            </div>
            <div className='list-label'>
              <span>Label 1</span>
              <span>Label 2</span>
              <span>Label 3</span>
            </div>
          </div> */}
          {/* <div className='list-item'>
            <div className='list-title'>
              <h4>Title one</h4>
            </div>
            <div className='list-descr'>
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
            </div>
            <div className='list-label'>
              <span>Label 1</span>
              <span>Label 2</span>
              <span>Label 3</span>
            </div>
          </div>
          <div className='list-item'>
            <div className='list-title'>
              <h4>Title one</h4>
            </div>
            <div className='list-descr'>
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
            </div>
            <div className='list-label'>
              <span>Label 1</span>
              <span>Label 2</span>
              <span>Label 3</span>
            </div>
          </div> */}
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default App;
