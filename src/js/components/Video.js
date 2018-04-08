const React = require('react');

const AppActions = require('../actions/AppActions');
const AppStore = require('../stores/AppStore');

const Video = React.createClass({
    render: function () {
        let link = 'https://www.youtube.com/embed/' + this.props.video.video_id;
        return (
            <div className="c4">
              <h5>{ this.props.video.title }</h5>
              <iframe width="360" height="285" src={ link } frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
              <p>{ this.props.video.description }</p>
            </div>
        );
    }
});

module.exports = Video;