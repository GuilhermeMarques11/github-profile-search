import './App.css';
import SearchForm from './components/SearchForm';
import Title from './components/title';

function App() {
  return (
    <section className="row">
      <div className="container">
        <Title />
        <SearchForm />
      </div>
    </section>
  );
}

export default App;
