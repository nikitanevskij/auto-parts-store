import React from 'react';
import './result.css';
import { Table } from 'antd';

export const Result = ({ data, status }) => {
  const columns = [
    {
      title: '№',
      dataIndex: 'number',
      key: 'number',
    },
    {
      title: 'ID',
      dataIndex: 'id',
      key: 'id',
    },
    {
      title: 'АРТИКУЛ',
      dataIndex: 'article',
      key: 'article',
    },
    {
      title: 'НАЗВАНИЕ',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: 'БРЕНД',
      dataIndex: 'brand',
      key: 'brand',
    },
    {
      title: 'ЦЕНА, RUB',
      dataIndex: 'price',
      key: 'price',
    },
    {
      title: 'КОЛИЧЕСТВО',
      dataIndex: 'quantity',
      key: 'quantity',
    },
  ];
  return (
    <div className="result-block">
      <Table
        loading={status === 'loading'}
        columns={columns}
        dataSource={data}
        pagination={false}
        scroll={{ x: 'max-content' }}
      />
    </div>
  );
};
