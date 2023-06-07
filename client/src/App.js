import './App.css';

function App() {
  return (
    <div className="dev-background">
      <h1>
        <span className='dev-span'>
          Job Board
        </span> "за IT общността"
      </h1>
      <form className='dev-search-form'>
        <input  className='dev-search-input' type='search'/>
        <input className='dev-submit-btn' type='submit'/>
      </form>
    </div>
  );
}

export default App;
