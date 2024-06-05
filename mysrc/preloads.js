
    (function() {
      var baseURL = "https://cdn.shopify.com/shopifycloud/checkout-web/assets/";
      var scripts = ["https://cdn.shopify.com/shopifycloud/checkout-web/assets/runtime.latest.en.d04c1aaea74a26093255.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/9244.latest.en.8553974a21b639b095a4.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/6655.latest.en.2e66baebe20bc5ed0fe5.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/6134.latest.en.03c0b36e91bf756d5735.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/app.latest.en.d81ac894ac70b33a6d33.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/9315.latest.en.7c8f677325d8263eb161.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/8383.latest.en.68213c11b0a115555fa3.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/5669.latest.en.eddf96d2cfec72a2522c.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/4653.latest.en.8b8dd5f99bf4c2cf409b.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/2990.latest.en.1b16af4110a9f40d7b36.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/8546.latest.en.22c24b42f6c7b0708b82.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/8610.latest.en.c17195be77d604f7eaee.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/6589.latest.en.14b0025dcc6b1389a1a6.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/OnePage.latest.en.a8a1206cfbdc5fd5801c.js"];
      var styles = ["https://cdn.shopify.com/shopifycloud/checkout-web/assets/9244.latest.en.169892172732d59a777d.css","https://cdn.shopify.com/shopifycloud/checkout-web/assets/app.latest.en.71184ade77e999e513cd.css","https://cdn.shopify.com/shopifycloud/checkout-web/assets/6268.latest.en.14532e2108b477e5b681.css"];
      var fontPreconnectUrls = [];
      var fontPrefetchUrls = [];
      var imgPrefetchUrls = [];

      function preconnect(url, callback) {
        var link = document.createElement('link');
        link.rel = 'dns-prefetch preconnect';
        link.href = url;
        link.crossOrigin = '';
        link.onload = link.onerror = callback;
        document.head.appendChild(link);
      }

      function preconnectAssets() {
        var resources = [baseURL].concat(fontPreconnectUrls);
        var index = 0;
        (function next() {
          var res = resources[index++];
          if (res) preconnect(res[0], next);
        })();
      }

      function prefetch(url, as, callback) {
        var link = document.createElement('link');
        if (link.relList.supports('prefetch')) {
          link.rel = 'prefetch';
          link.fetchPriority = 'low';
          link.as = as;
          if (as === 'font') link.type = 'font/woff2';
          link.href = url;
          link.crossOrigin = '';
          link.onload = link.onerror = callback;
          document.head.appendChild(link);
        } else {
          var xhr = new XMLHttpRequest();
          xhr.open('GET', url, true);
          xhr.onloadend = callback;
          xhr.send();
        }
      }

      function prefetchAssets() {
        var resources = [].concat(
          scripts.map(function(url) { return [url, 'script']; }),
          styles.map(function(url) { return [url, 'style']; }),
          fontPrefetchUrls.map(function(url) { return [url, 'font']; }),
          imgPrefetchUrls.map(function(url) { return [url, 'image']; })
        );
        var index = 0;
        (function next() {
          var res = resources[index++];
          if (res) prefetch(res[0], res[1], next);
        })();
      }

      function onLoaded() {
        preconnectAssets();
        prefetchAssets();
      }

      if (document.readyState === 'complete') {
        onLoaded();
      } else {
        addEventListener('load', onLoaded);
      }
    })();
  