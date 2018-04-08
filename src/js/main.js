const React = require('react');
const ReactDOM = require('react-dom');

const App = require('./components/App');
const AppAPI = require('./utils/appAPI');

AppAPI.getVideos();

ReactDOM.render(
    <App />, 
    document.getElementById('app')
);