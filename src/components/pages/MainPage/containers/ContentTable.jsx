import React from 'react';

import { Table } from 'antd';

class ContentTableContainer extends React.Component {
  render() {
    const columns = [
      {
        title: 'Группа',
        dataIndex: 'name',
        key: 'name',
      }, {
        title: 'Наименование предмета',
        dataIndex: 'age',
        key: 'age',
      }, {
        title: 'Номер кабинета',
        dataIndex: 'age',
        key: 'age',
      }, {
        title: 'Дата сдачи',
        dataIndex: 'address',
        key: 'address',
      }, {
        title: 'Тип сдачи',
        dataIndex: 'address',
        key: 'address',
      },
    ];

    return (
      <Table dataSource={[]} columns={columns} />
    );
  }
}

export default ContentTableContainer;
