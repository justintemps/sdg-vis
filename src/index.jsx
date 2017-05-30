import React from 'react';
import { render } from 'react-dom';

import './styles/main.scss';
import './fonts/fonts.scss';
import './fonts/font-awesome-4.6.3/scss/font-awesome.scss';
import getData from '../libs/getData.js';
import SDGexplorer from './Components/SDGexplorer/SDGexplorer.jsx';

getData();

render(<SDGexplorer />, document.getElementById('app'));
