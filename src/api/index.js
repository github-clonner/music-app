import http from 'axios';
import { config } from '../config';
import { LastFmApi } from './lastfm.api';

export const musicApi = new LastFmApi(http, config.lastFmApi.endpoint, config.lastFmApi.apiKey);

export { authApi } from './auth.api';