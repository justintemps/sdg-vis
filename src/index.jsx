import React from 'react';
import { render } from 'react-dom';

import './styles/main.scss';
import './fonts/fonts.scss';
import './fonts/font-awesome-4.6.3/scss/font-awesome.scss';

import SDGexplorer from './Components/SDGexplorer/SDGexplorer.jsx';

render(<SDGexplorer />, document.getElementById('app'));
