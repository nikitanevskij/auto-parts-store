import React from 'react';
import './search.css';
import { Input, Button } from 'antd';

const { TextArea } = Input;

export const Search = () => {
  const [value, setValue] = React.useState('');

  const onChangeValue = (e) => {
    setValue(e.target.value);
  };

  const createArrayArticles = () => {
    const array = value.split('\n');
  };

  return (
    <div className="search-block">
      <h3 className="search-title">Товары</h3>
      <TextArea
        value={value}
        onChange={onChangeValue}
        className="search-input"
        rows={4}
        placeholder="Для поиска введите один или несколько артукулов в столбик"
      />
      <Button type="primary" className="search-button" onClick={createArrayArticles}>
        Поиск
      </Button>
    </div>
  );
};
