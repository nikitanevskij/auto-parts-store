import React from 'react';
import './search.css';
import { Input, Button, Alert } from 'antd';

const { TextArea } = Input;

export const Search = ({ setArticles, status }) => {
  const [value, setValue] = React.useState('');

  const onChangeValue = (e) => {
    setValue(e.target.value);
  };

  const createArticles = () => {
    const arcticles = value.split('\n');
    setArticles(arcticles);
  };

  return (
    <div className="search-block">
      <h3 className="search-title">Товары</h3>
      {status === 'error' && (
        <Alert
          message="Внутренняя ошибка сервера. Попробуйте снова."
          type="warning"
          showIcon
          style={{ marginBottom: '20px', width: '100%' }}
        />
      )}
      <TextArea
        value={value}
        onChange={onChangeValue}
        className="search-input"
        rows={4}
        placeholder="Для поиска введите один или несколько артукулов в столбик"
      />
      <Button type="primary" className="search-button" onClick={createArticles}>
        Поиск
      </Button>
    </div>
  );
};
