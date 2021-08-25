window.htconfig = {
  Default: {
    toolTipDelay: 100,
    toolTipContinual: true,
    debugTipBackground: 'rgba(61,61,61,0.6)',
    debugTipLabelColor: '#fff',
    convertURL: (url: string) => {
      const storagePrefix = '/ht_';
      if (
        storagePrefix &&
        url &&
        !/^data:image/.test(url) &&
        !/^http/.test(url) &&
        !/^https/.test(url)
      ) {
        url = `${storagePrefix}/${url}`;
      }
      // append timestamp
      url += `${url.indexOf('?') >= 0 ? '&' : '?'}ts=${Date.now()}`;
      // append sid
      const match = window.location.href.match('sid=([0-9a-z-]*)');
      if (match) {
        // eslint-disable-next-line prefer-destructuring
        window.sid = match[1];
      }
      if (window.sid) {
        url += `&sid=${window.sid}`;
      }
      return url;
    },
  },
};
