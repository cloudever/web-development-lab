import React from 'react';
import styled from 'styled-components';

import { Layout } from 'antd';

const Header = styled(Layout.Header)`
  box-shadow: 0 0 10px #989898;
  z-index: 1;
  background: ${props => props.theme.blue}
`;

const HeaderText = styled.div`
  color: #fff;
  text-align: center;
  font-size: 18px;
`;

const FooterText = styled.div`
  color: #fff;
  text-align: center;
  color: #a7a7a7
`;

const Content = styled(Layout.Content)`
  margin: 0 50px;
  display: flex;
  box-shadow: 0 0 10px #e4e4e4;
  z-index: 0;
`;

const ContentInner = styled.div`
  background: #fff;
  padding: 25px;
  flex: 1
`;

class MainLayout extends React.Component {
  render() {
    const {
      children,
    } = this.props;

    return (
      <Layout>
        <Header>
          <HeaderText>
            Расписание экзаменов и зачетов
          </HeaderText>
        </Header>
        <Content>
          <ContentInner>
            {children}
          </ContentInner>
        </Content>
        <Layout.Footer>
          <FooterText>
            Created  by Ivanov Pavel
          </FooterText>
        </Layout.Footer>
      </Layout>
    );
  }
}

export default MainLayout;

