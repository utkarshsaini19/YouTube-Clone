import {legacy_createStore as createStore,applyMiddleware,combineReducers} from 'redux';
import {composeWithDevTools} from 'redux-devtools-extension'
import thunk from 'redux-thunk'
import {authReducer} from './reducers/auth.reducer'
import { channelDetailsReducer } from './reducers/channel.reducer';
import { homeVideosReducer,relatedVideoReducer,selectedVideoReducer,searchedVideoReducer, subscriptionsChannelReducer, channelVideosReducer } from './reducers/videos.reducer';
import { commentListReducer } from './reducers/comments.reducer';



const rootReducer = combineReducers({
    auth: authReducer,
    homeVideos: homeVideosReducer,
    selectedVideo : selectedVideoReducer,
    channelDetails : channelDetailsReducer,
    commentList : commentListReducer,
    relatedVideos : relatedVideoReducer,
    searchedVideos : searchedVideoReducer,
    subscriptionsChannel: subscriptionsChannelReducer,
    channelVideos: channelVideosReducer

})

const store = createStore(
    rootReducer,
    {},
    composeWithDevTools(applyMiddleware(thunk)))

export default store