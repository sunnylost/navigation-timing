var t = performance.timing;

var phases = [
  {
    name: 'Redirect',
    start: 'redirectStart',
    end: 'redirectEnd',
    index: 0
  }, {
    name: 'App cache',
    start: 'fetchStart',
    end: 'domainLookupStart',
    index: 1
  }, {
    name: 'DNS',
    start: 'domainLookupStart',
    end: 'domainLookupEnd',
    index: 2
  }, {
    name: 'TCP',
    start: 'connectStart',
    end: 'connectEnd',
    index: 3
  }, {
    name: 'Request',
    start: 'requestStart',
    end: 'responseStart',
    index: 4
  }, {
    name: 'Response',
    start: 'responseStart',
    end: 'responseEnd',
    index: 5
  }, {
    name: 'Processing',
    start: 'domLoading',
    end: 'domComplete',
    index: 6
  }, {
    name: 'onLoad',
    start: 'loadEventStart',
    end: 'loadEventEnd',
    index: 7
  }
];

var colors = [
  'c00', 'c33', '339', '06c', '09c', '360', '690', '7c3'
];

var totalCost = 0;

window.onload = function() {
  setTimeout(function() {
    phases.forEach(function(v) {
      var start = t[v.start],
          end = t[v.end];
      totalCost += (v.value = (start == 0 ? 0 : (end - start)));
    })
    phases.sort(function(a, b) {
      return b.value - a.value;
    })
    phases.forEach(function(v, i) {
      v.color = colors[i];
    })
    console.log(phases);
  }, 0)
};

/**
 * unload
 *   unloadEventStart
 *   unloadEventEnd
 *
 * navigationStart
 *
 * redirect
 *   redirectStart
 *   redirectEnd
 *
 * App cache
 *   fetchStart
 *
 * DNS
 *   domainLookupStart
 *   domainLookupEnd
 *
 * TCP
 *   connectStart
 *     secureConnectionStart
 *   connectEnd
 *
 * Request
 *   requestStart
 *
 * Response
 *   responseStart
 *   responseEnd
 *
 * Processing
 *   domLoading
 *   domInteractive
 *
 *   domContentLoadedEventStart
 *   domContentLoadedEventEnd
 *
 *   domComplete
 *
 * onLoad
 *   loadEventStart
 *   loadEventEnd
 *
 */