import React from 'react';
import './App.css';
import { Layout } from 'antd';
import { Result } from './components/Result/Result';
import { Search } from './components/Search/Search';
import axios from 'axios';

const { Content } = Layout;

const key = '';

export const App = () => {
  const [status, setStatus] = React.useState('success');
  const [articles, setArticles] = React.useState([]);
  const [fetchResult, setFetchResult] = React.useState([]);

  React.useEffect(() => {
    if (!articles.length) return;
    async function fethParts() {
      try {
        setStatus('loading');
        setArticles([]);
        const { data } = await axios.post(
          'https://germsp.ru/test-search-products',
          { searchArticles: articles },
          {
            headers: {
              Authorization: `Bearer ${key}`,
            },
          },
        );
        setStatus('success');
        setFetchResult(data);
      } catch (error) {
        setStatus('error');
      }
    }
    fethParts();
  }, [articles]);

  return (
    <Layout className="layout">
      <Content className="content">
        <Search setArticles={setArticles} status={status} />
        <Result data={fetchResult} status={status} />
      </Content>
    </Layout>
  );
};
