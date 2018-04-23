import React from 'react';
import { hot } from 'react-hot-loader';
import { ThemeProvider } from 'styled-components';

import { LocaleProvider } from 'antd';
import ruRU from 'antd/lib/locale-provider/ru_RU';
import 'moment/locale/ru';

import { PouchDBProvider } from 'components/containers';

import { MainLayout } from 'components/layouts';
import { MainPage } from 'components/pages';

import theme from 'config/theme';

import database from 'services/database';

class Root extends React.Component {
  render() {
    return (
      <LocaleProvider locale={ruRU}>
        <ThemeProvider theme={theme}>
          <PouchDBProvider database={database}>
            <MainLayout>
              <MainPage />
            </MainLayout>
          </PouchDBProvider>
        </ThemeProvider>
      </LocaleProvider>
    );
  }
}

export default hot(module)(Root);
