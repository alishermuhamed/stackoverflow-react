import fetch from 'axios';
import * as types from '../constants';

export const getUserQuestions = userId =>
  fetch(
    `${types.BASE_URL}users/${userId}/questions?order=desc&sort=activity` +
      `&site=stackoverflow&filter=!t)IWLZ8DYuwPXmtkiznF4Ow-NjKgM99${types.KEY}`
  ).then(response => response.data);

export const getUserQuestionsCount = userId =>
  fetch(
    `${types.BASE_URL}users/${userId}/questions?site=stackoverflow` +
      `&filter=total${types.KEY}`
  ).then(response => response.data);

export const getUserAnswersCount = userId =>
  fetch(
    `${types.BASE_URL}users/${userId}/answers?site=stackoverflow` +
      `&filter=total${types.KEY}`
  ).then(response => response.data);
