const AppDispatcher = require('../dispatcher/AppDispatcher');
const AppConstants = require('../constants/AppConstants');

const AppActions = {
    saveVideo: function (video) {
        AppDispatcher.handleViewAction({
            actionType: AppConstants.SAVE_VIDEO,
            video: video
        });
    }
};

module.exports = AppActions;