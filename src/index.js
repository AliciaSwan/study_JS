'use strict';

import 'fetch-polyfill';
import "isomorphic-fetch";
import 'es6-promise';
import 'cross-fetch/polyfill';
import '@babel/polyfill';
import 'nodelist-foreach-polyfill';
import elementClosest from 'element-closest';
import 'whatwg-fetch';
elementClosest(window);
require ('formdata-polyfill');

import countTimer from './modules/countTimer';
import addDots from './modules/addDots';
import calc from './modules/calc';
import calcValidator from './modules/calcValidator';
import changePhoto from './modules/changePhoto';
import formValidator from './modules/formValidator';
import scroll from './modules/scroll';
import sendForm from './modules/sendForm';
import slider from './modules/slider';
import tabs from './modules/tabs';
import toggleMenu from './modules/toggleMenu';
import togglePopUp from './modules/togglePopup';

countTimer();
addDots();
calc();
calcValidator();
changePhoto();
formValidator();
scroll();
sendForm();
slider();
tabs();
toggleMenu();
togglePopUp();