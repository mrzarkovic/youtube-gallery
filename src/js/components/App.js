const React = require('react');

const AppActions = require('../actions/AppActions');
const AppStore = require('../stores/AppStore');

const AddForm = require('./AddForm');

function getAppState () {
    return {
        videos: AppStore.getVideos()
    };
}

const App = React.createClass({
    getInitialState: function () {
        return getAppState();
    },
    
    componentDidMount: function () {
        AppStore.addChangeListener(this._onChange);
    },

    componentWillUnmount: function () {
        AppStore.removeChangeListener(this._onChange);
    },

    render: function () {
        console.log(this.state.videos);

        return (
            <div>
                <AddForm />
            </div>
        );
    },

    // Update view state when change is received
    _onChange: function () {
        this.setState(getAppState());
    }
});

module.exports = App;