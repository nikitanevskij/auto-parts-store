import React from 'react';
import './App.css';
import { Layout } from 'antd';
import { Result } from './components/Result/Result';
import { Search } from './components/Search/Search';

const { Content } = Layout;

export const App: React.FC = () => {
  return (
    <Layout className="layout">
      <Content className="content">
        <Search />
        <Result />
      </Content>
    </Layout>
  );
};
