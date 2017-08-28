import { parseQueryString } from 'mootools';

/**
 * Request next set of members through ApiGetClient
 */

export class ApiGetClient {

  constructor() {
    this.options = {
        headers: {
          Accept: 'application/json'
        },
        method: 'GET',
        queryparams: null,
        apibaseurl: '',
        apipath: ''
      };
  }

  initialize (options) {
    this.options = options;
    this.setApiUrl();
    this.setQueryParams(this.options.queryparams);
    this.send();
  }

  setApiUrl() {
    this.apiurl = this.options.apibaseurl;
    this.apiurl += this.options.apipath;
  }

  setQueryParams(params) {
    var apiquerystring = {};
    if (params) {
      Object.merge(apiquerystring, params);
    }
    console.log(apiquerystring);
    if (Object.getLength(apiquerystring) > 0) {
      this.apiurl += '?' + Object.toQueryString(apiquerystring);
      this.apiurl = this.apiurl.replace("'", '%27');
    }
  }

  getRequestUrl() {
    return this.apiurl;
  }

  handleApiRequest(xmlHttpRequest) {
    if (xmlHttpRequest.readyState == 4 && xmlHttpRequest.status == 200) {
        var response = JSON.parse(xmlHttpRequest.responseText);
        if (typeof this.results === 'object')  {
          this.results = Object.assign({}, this.results, response.results);
        } else {
          this.results = response.results;
        }

    }
  }

  send(query_string) {
    if (typeof(query_string) === 'string') {
      this.options = Object.merge(this.options, {postdata: query_string.parseQueryString()})
    }

    var requesturl = this.getRequestUrl();
    console.log(requesturl);
    this.options = Object.merge(this.options, {url: requesturl, data: this.options.postdata});

    var xHttpRequest = new XMLHttpRequest();
    xHttpRequest.open(this.options.method, this.options.url, false);
    xHttpRequest.send();
    // init and save request results
    xHttpRequest.onreadystatechange = this.handleApiRequest(xHttpRequest);
  }

}
