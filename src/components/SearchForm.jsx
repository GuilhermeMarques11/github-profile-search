import { useState } from 'react';
import Lupa from '../assets/lupa.png';
import styles from './SearchForm.module.css';
import UserProfile from './UserProfile';

const SearchForm = () => {
  const [inputValue, setInputValue] = useState('');
  const [userData, setUserData] = useState([]);
  const [fetchCompleted, setFetchCompleted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  function handleSubmit() {
    setFetchCompleted(false);
    setLoading(true);
    setError(null);
    fetch(`https://api.github.com/users/${inputValue}`)
      .then((response) => {
        if (!response.ok) {
          throw new Error('Erro na requisição');
        }
        return response.json();
      })
      .then((data) => {
        setUserData(data);
        setFetchCompleted(true);
        setLoading(false);
        setError(null);
      })
      .catch((err) => {
        let erroMessage =
          'Nenhum perfil foi encontrado com esse nome de usuário. Tente novamente';
        if (err) setError(erroMessage);
        setLoading(false);
      });
  }

  return (
    <>
      <div className={styles.searchForm}>
        <input
          className={styles.input}
          type="text"
          value={inputValue}
          placeholder="Digite um usuário do GitHub"
          onChange={(event) => setInputValue(event.target.value)}
        />
        <div onClick={handleSubmit} className={styles.buttonSearch}>
          <img src={Lupa} alt="Lupa" />
        </div>
      </div>
      <UserProfile
        userData={userData}
        error={error}
        fetchCompleted={fetchCompleted}
      />
      {loading && <p style={{ textAlign: 'center' }}>Carregando usuário...</p>}
    </>
  );
};

export default SearchForm;
