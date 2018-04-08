const AppDispatcher = require('../dispatcher/AppDispatcher');
const AppConstants = require('../constants/AppConstants');

const AppActions = {
    saveVideo: function (video) {
        AppDispatcher.handleViewAction({
            actionType: AppConstants.SAVE_VIDEO,
            video: video
        });
    },

    receiveVideos: function (videos) {
      AppDispatcher.handleViewAction({
        actionType: AppConstants.RECEIVE_VIDEOS,
        videos: videos
      });
    }
};

module.exports = AppActions;