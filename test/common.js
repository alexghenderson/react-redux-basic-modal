/* global global */
import {jsdom} from 'jsdom';

global.document = jsdom('<!doctype html><html><body></body></html>');
global.window = global.document.defaultView;
global.navigator = global.document.defaultView.navigator;
