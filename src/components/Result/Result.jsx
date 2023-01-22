import './result.css';
import { Table } from 'antd';

export const Result = ({ data, status }) => {
  const columns = [
    {
      title: '№',
      dataIndex: 'number',
      key: 'number',
      render: (text, record, index) => index + 1,
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
      render: (_, { brand }) => <>{brand.name}</>,
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
