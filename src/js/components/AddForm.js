const React = require('react');

const AppActions = require('../actions/AppActions');
const AppStore = require('../stores/AppStore');

const AddForm = React.createClass({
    render: function () {
        return (
            <div className="add-form">
              <panel className="c12">
                <h3>Add Form</h3>
                <form onSubmit={this.onSubmit}>
                  <div className="form-group">
                    <label>Video Title</label><br />
                    <input type="text" ref="title" className="form-control" />
                  </div>
                  <div className="form-group">
                    <label>Video ID</label><br />
                    <input type="text" ref="video_id" className="form-control" />
                  </div>
                  <div className="form-group">
                    <label>Video Description</label><br />
                    <textarea ref="description"></textarea>
                  </div>
                  <button type="submit" className="button">Add</button>
                </form>
              </panel>
            </div>
        );
    },

    onSubmit: function (e) {
      e.preventDefault();
      let video = {
        title: this.refs.title.value.trim(),
        video_id: this.refs.video_id.value.trim(),
        description: this.refs.description.value.trim()
      }

      AppActions.saveVideo(video);
    }
});

module.exports = AddForm;