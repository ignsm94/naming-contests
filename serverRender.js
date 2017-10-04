import config from './config';
import React from 'react';
import ReactDOMServer from 'react-dom/server';
import axios from 'axios';
import App from './src/components/App';

const serverRender = () =>
  axios.get(`${config.serverUrl}/api/contests`)
    .then(resp => {
      return ReactDOMServer.renderToString(
        <App data={resp.data} />
      );
    })
    .catch(err => console.error(err));

export default serverRender;
