const React = require('react');

const AppActions = require('../actions/AppActions');
const AppStore = require('../stores/AppStore');

const Video = require('./Video');

const VideosList = React.createClass({
    render: function () {
        return (
            <div className="row">
              { this.props.videos.map((video, index) => {
                return <Video video={ video } key={ index } />
              }) }
            </div>
        );
    }
});

module.exports = VideosList;