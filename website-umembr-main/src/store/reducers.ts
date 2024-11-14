import { combineReducers } from 'redux';
import intermitence from './intermitence/reducer';
import forgotPassword from './forgot-password/reducer';
import home from './home/reducer';
import auth from './auth/reducer';
import story from './story/reducer';
import memory from './memory/reducer';
import collaborator from './collaborator/reducer';
import notifications from './notifications/reducer';
import analytics from './analytics/reducer';
import analyticsStories from './analyticsStories/reducer';
import hasChanges from './hasChanges/reducer'

const reducers: any = combineReducers({
  intermitence,
  forgotPassword,
  home,
  auth,
  story,
  memory,
  collaborator,
  notifications,
  analytics,
  analyticsStories,
  hasChanges,
});

export default reducers;
