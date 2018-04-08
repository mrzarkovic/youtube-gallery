const EventEmitter = require('events').EventEmitter;
const assign = require('object-assign');

const AppDispatcher = require('../dispatcher/AppDispatcher');
const AppConstants = require('../constants/AppConstants');
const AppAPI = require('../utils/appAPI');

const CHANGE_EVENT = 'change';

var _videos = [];

const AppStore = assign({}, EventEmitter.prototype, {
    saveVideo: function (video) {
      _videos.push(video);
    },

    getVideos: function () {
        return _videos;
    },

    setVideos: function (videos) {
      _videos = videos;
    },

    removeVideo: function (videoId) {
        let index = _videos.findIndex( v => v.id == videoId);
        _videos.splice(index, 1);
    },
    
    emitChange: function () {
        this.emit(CHANGE_EVENT);
    },

    addChangeListener: function (callback) {
        this.on(CHANGE_EVENT, callback);
    },

    removeChangeListener: function (callback) {
        this.removeListener(CHANGE_EVENT, callback);
    }
});

AppDispatcher.register(function (payload) {
    let action = payload.action;

    switch(action.actionType) {
        case AppConstants.SAVE_VIDEO:
            console.log('Saving video...');

            // Store Save
            AppStore.saveVideo(action.video);

            // API Save
            AppAPI.saveVideo(action.video);

            AppStore.emitChange();
            break;
        case AppConstants.RECEIVE_VIDEOS:
            console.log('Receiving videos...');

            // Store Save
            AppStore.setVideos(action.videos);

            AppStore.emitChange();
            break;
        case AppConstants.REMOVE_VIDEO:
            console.log('Removing video...');

            // Store Remove
            AppStore.removeVideo(action.videoId);

            // API Remove
            AppAPI.removeVideo(action.videoId);

            AppStore.emitChange();
            break;
    }

    return true;
});

module.exports = AppStore;