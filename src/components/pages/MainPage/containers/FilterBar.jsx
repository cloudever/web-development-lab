import React from 'react';
import styled from 'styled-components';
import memoize from 'lodash/memoize';

import { Row as _Row, Col, Select, Form } from 'antd';

const Row = styled(_Row)`
`;

const FormItem = styled(Form.Item)`
  margin-bottom: 8px;
`;

const subjects = [
  { id: 1, title: 'ООП' },
  { id: 2, title: 'МОВПО' },
  { id: 3, title: 'ВП' },
];

const subjectTypes = [
  { id: 0, title: 'Экзамен' },
  { id: 1, title: 'Зачет' },
];

const groups = [
  { id: 1, title: 'КТМ-01-16/1' },
];

class FilterBarContainer extends React.Component {
  state = {}

  handleChange = memoize((field, fromEvent = true) => (e) => {
    this.setState({
      [field]: fromEvent ? e.target.value : e,
    }, () => this.props.onChange(this.state));
  })

  render() {
    return (
      <Form horizontal>
        <Row>
          <Col span={24}>
            <FormItem label="Выбор предмета">
              <Select
                allowClear
                placeholder="Предмет"
                onChange={this.handleChange('subject', false)}
              >
                {subjects.map(opt => (
                  <Select.Option value={opt.id}>
                    {opt.title}
                  </Select.Option>
                ))}
              </Select>
            </FormItem>
          </Col>
          <Col span={24}>
            <FormItem label="Выбор типа сдачи">
              <Select
                allowClear
                placeholder="Тип сдачи"
                onChange={this.handleChange('subjectType', false)}
              >
                {subjectTypes.map(opt => (
                  <Select.Option value={opt.id}>
                    {opt.title}
                  </Select.Option>
                ))}
              </Select>
            </FormItem>
          </Col>
          <Col span={24}>
            <FormItem label="Выбор группы">
              <Select
                allowClear
                placeholder="Группа"
                onChange={this.handleChange('group', false)}
              >
                {groups.map(opt => (
                  <Select.Option value={opt.id}>
                    {opt.title}
                  </Select.Option>
                ))}
              </Select>
            </FormItem>
          </Col>
          <Col span={24}>
            <FormItem label="Выбор кабинета">
              <Select
                allowClear
                placeholder="Кабинет"
                onChange={this.handleChange('group', false)}
              >
                {groups.map(opt => (
                  <Select.Option value={opt.id}>
                    {opt.title}
                  </Select.Option>
                ))}
              </Select>
            </FormItem>
          </Col>
        </Row>
      </Form>
    );
  }
}

export default FilterBarContainer;
