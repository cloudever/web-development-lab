import React from 'react';
import { Modal } from 'antd';

import { EntityForm } from 'components/forms';

class EntityDialog extends React.Component {
  submitForm = () => {
    this.form.form.submitForm();
  }

  gerFormRef = (el) => {
    this.form = el;
  }

  handleFormSubmit = (values) => {
    console.log(values);
  }

  render() {
    const { entity, ...rest } = this.props;

    return (
      <Modal onOk={this.submitForm} {...rest}>
        <EntityForm
          ref={this.gerFormRef}
          onSubmit={this.handleFormSubmit}
          entity={entity}
        />
      </Modal>
    );
  }
}

export default EntityDialog;
