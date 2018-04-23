import React from 'react';
import styled from 'styled-components';
import { Row, Col, Button } from 'antd';

const Wrapper = styled.div`
  text-align: right
`;

class OperatorContainer extends React.Component {
  handleAddClick = (e) => {
    this.props.onAddClick(e);
  }

  render() {
    return (
      <Wrapper>
        <Button type="primary" onClick={this.handleAddClick}>Добавить позицию</Button>
      </Wrapper>
    );
  }
}

export default OperatorContainer;
