// Your code here ...

import { ApiGetClient } from './apiClient.js';

var options = {
  headers: {
    Accept: 'application/json'
  },
  method: 'get',
  queryparams: {
      'results': 5
    },
  apibaseurl: 'https://randomuser.me',
  apipath: '/api/'
}

export var getUsersClient = new ApiGetClient;
getUsersClient.initialize(options);
