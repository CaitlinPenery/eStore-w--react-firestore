import { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import style from './SearchBar.module.scss';
import { SearchContext } from '../../context/SearchProvider';

function SearchBar() {
  const [inputValue, setInputValue] = useState('');
  const context = useContext(SearchContext);
  console.log(context);
  const { setSearch } = context;

  const navigate = useNavigate();

  const onSubmit = (e) => {
    e.preventDefault();
    setSearch(inputValue);
    navigate('/users');
  };

  return (
    <form className={style.form} onSubmit={onSubmit}>
      <input
        type='text'
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
      <input type='submit' value='Search' />
    </form>
  );
}

export default SearchBar;
