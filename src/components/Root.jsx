import React from 'react';
import { hot } from 'react-hot-loader';
import { ThemeProvider } from 'styled-components';

import { MainLayout } from 'components/layouts';
import { MainPage } from 'components/pages';

import theme from 'config/theme';

class Root extends React.Component {
  render() {
    return (
      <ThemeProvider theme={theme}>
        <MainLayout>
          <MainPage />
        </MainLayout>
      </ThemeProvider>
    );
  }
}

export default hot(module)(Root);
