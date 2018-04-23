import React from 'react';
import { Formik } from 'formik';
import { Form, Select, Input } from 'antd';

class EntityForm extends React.Component {
  getFormRef = (el) => {
    this.form = el;
  }

  render() {
    return (
      <Formik
        ref={this.getFormRef}
        initialValues={{
          subject: '',
          subjectType: '',
          group: '',
          cabinet: '',
        }}
        onSubmit={this.props.onSubmit}
        render={({
          values,
          handleChange,
          handleSubmit,
        }) => (
          <Form onSubmit={handleSubmit} horizontal>
            <Form.Item label="Название предмета">
              <Input placeholder="Введите название предмета" name="subject" onChange={handleChange} value={values.subject} />
            </Form.Item>
            <Form.Item label="Тип сдачи">
              <Select placeholder="Выберите тип сдачи" name="subjectType" value={values.subjectType} />
            </Form.Item>
            <Form.Item label="Обучающаяся группа">
              <Select placeholder="Выберите группу" name="group" value={values.group} />
            </Form.Item>
            <Form.Item label="Кабинет">
              <Input placeholder="Введите номер кабинета" name="cabinet" value={values.cabinet} />
            </Form.Item>
          </Form>
        )}
      />
    );
  }
}

export default EntityForm;
