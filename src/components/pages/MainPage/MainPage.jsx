import React from 'react';
import styled from 'styled-components';
import { Row, Col } from 'antd';

import Operator from './containers/Operator';
import FilterBar from './containers/FilterBar';
import ContentTable from './containers/ContentTable';
import EntityDialog from './containers/EntityDialog';

const FilterBarWrapper = styled.div`
  margin-bottom: 8px;
`;

const OperatorWrapper = styled.div`
  margin-bottom: 8px;
`;

const ContentTableWrapper = styled.div``;

class MainPage extends React.Component {
  state = {
    visibleEntityDialog: false,
  }

  handleFilterChange = (values) => {
    console.log(values);
  }

  handleAddClick = () => {
    this.toggleEntityDialog();
  }

  toggleEntityDialog = () => {
    this.setState(state => ({
      visibleEntityDialog: !state.visibleEntityDialog,
    }));
  }

  render() {
    return (
      <Row gutter={12}>
        <Col span={6}>
          <FilterBarWrapper>
            <FilterBar onChange={this.handleFilterChange} />
          </FilterBarWrapper>
        </Col>
        <Col span={18}>
          <Row>
            <Col>
              <OperatorWrapper>
                <Operator
                  onAddClick={this.handleAddClick}
                />
              </OperatorWrapper>
            </Col>
            <Col>
              <ContentTableWrapper>
                <ContentTable />
              </ContentTableWrapper>
            </Col>
          </Row>
        </Col>
        <EntityDialog
          destroyOnClose
          title="Добавление"
          visible={this.state.visibleEntityDialog}
          entity={this.entity}
          onCancel={this.toggleEntityDialog}
        />
      </Row>
    );
  }
}

export default MainPage;
