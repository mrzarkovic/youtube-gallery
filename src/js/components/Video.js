const React = require('react');

const AppActions = require('../actions/AppActions');
const AppStore = require('../stores/AppStore');

const Video = React.createClass({
    render: function () {
        let link = 'https://www.youtube.com/embed/' + this.props.video.video_id;
        return (
            <div className="c4">
              <h5>{ this.props.video.title } <span className="delete"><a href="" onClick={this.onDelete.bind(this, this.props.video.id)}>X</a></span></h5>
              <iframe width="360" height="285" src={ link }></iframe>
              <p>{ this.props.video.description }</p>
            </div>
        );
    },

    onDelete: function (id, e) {
      e.preventDefault();
      AppActions.removeVideo(id);
    }
});

module.exports = Video;