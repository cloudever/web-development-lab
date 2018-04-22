import 'core-js/fn/string/starts-with';

import 'assets/styles/app.less';

import React from 'react';
import { render } from 'react-dom';

import Root from 'components/Root';

const rootNode = document.getElementById('root');

render(<Root />, rootNode);
