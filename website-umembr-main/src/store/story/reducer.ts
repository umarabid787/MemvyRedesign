import {
  CLEAN_PREV_PROMPTS,
  CREATE_PAYLOAD_TRIGGER,
  CREATE_STORIES_ASYNC,
  SET_CREATE_SECTION_TRIGGER,
  SET_PROMPTS_TRIGGER,
  SET_STEP_CREATE_TRIGGER,
  SET_ACTUAL_STORY_ASYNC,
  RESET_STORY_STATE,
  UPDATE_STORY_ASYNC,
  DELETE_STORY_ASYNC,
} from './action-types';

const initialState = {
  storySection: '',
  createStep: 0,
  stories: [],
  prev_stories: {},
  prompts: {},
  storyStepName: '',
  story: {},
};

const stories = (state = initialState, { type, payload }: any) => {
  switch (type) {
    case SET_CREATE_SECTION_TRIGGER:
      return { ...state, storySection: payload };
    case SET_STEP_CREATE_TRIGGER:
      return { ...state, createStep: payload };
    case CREATE_STORIES_ASYNC:
      return { ...state, story: payload };
    case CREATE_PAYLOAD_TRIGGER:
      return { ...state, prev_stories: payload };
    case SET_PROMPTS_TRIGGER:
      return { ...state, prompts: payload };
    case CLEAN_PREV_PROMPTS:
      return { ...state, prev_stories: {}, prompts: {} };
    case SET_ACTUAL_STORY_ASYNC:
      return { ...state, story: payload };
    case RESET_STORY_STATE:
      return { ...initialState };
    case UPDATE_STORY_ASYNC:
      return { ...state, story: payload };
    case DELETE_STORY_ASYNC:
      return { ...state, story: {} };
    default:
      return state;
  }
};

export default stories;
