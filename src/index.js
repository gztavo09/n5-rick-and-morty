import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App.jsx';

window.renderRam = (containerId, history) => {
  ReactDOM.render(
    <App history={history} />,
    document.getElementById(containerId),
  );
};

window.unmountRam = containerId => {
  ReactDOM.unmountComponentAtNode(document.getElementById(containerId));
};

if (!document.getElementById('Ram-container')) {
  ReactDOM.render(<App />, document.getElementById('root-ram'));
}
