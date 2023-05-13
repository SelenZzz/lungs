import{createContext as r,useContext as t,useState as e,useEffect as n}from"react";import{jsx as o}from"react/jsx-runtime";var a=r({getLang:function(){return""},getLangDate:function(){return""}}),i=function(){return t(a)},u=function(r){var t=r.unixtime,o=r.dateLangKey,a=r.monthsLangKey,u=r.relativeFromDay,l=r.relativeLangKey,c=i().getLangDate,f=e(""),v=f[0],g=f[1];return n((function(){if(t){var r=c(t,o,a,u,l);g(r)}}),[o,c,a,u,l,t]),t?v:""},l=function(){return l=Object.assign||function(r){for(var t,e=1,n=arguments.length;e<n;e++)for(var o in t=arguments[e])Object.prototype.hasOwnProperty.call(t,o)&&(r[o]=t[o]);return r},l.apply(this,arguments)},c=function(r,t){if(!t)return r;for(var e=0,n=Object.entries(t);e<n.length;e++){var o=n[e],a=o[0],i=o[1];r=r.replaceAll("{".concat(a,"}"),i.toString())}return r},f=function(r,t,e){if(void 0===r&&(r=""),"object"!=typeof r)return c(r,t);if(!e)return c(r[5],t);var n="1",o=Math.floor(e/10)%10==1;!o&&[2,3,4].includes(e%10)&&(n="2"),(o||[5,6,7,8,9,0].includes(e%10))&&(n="5");var a=r[n];if(t)for(var i=0,u=Object.entries(t);i<u.length;i++){var l=u[i],f=l[0],v=l[1];a=a.replaceAll("{".concat(f,"}"),v.toString())}return c(a,t)},v="yermak-langs-cache",g=3600,d=86400,s=function(r,t,e,n,o){var a=Math.round((+new Date-r)/1e3);return n&&a<d*n?o?function(r,t){var e=t,n=Math.round((+new Date-r)/1e3);if(n<30)return f(e.just);if(n<60)return f(e.seconds,{n:n},n);if(n<120)return f(e.minute);if(n<g){var o=Math.floor(n/60);return f(e.minutes,{n:o},o)}if(1===Math.floor(n/g))return f(e.hour);if(n<d){var a=Math.floor(n/g);return f(e.hours,{n:a},a)}if(n<2*d)return f(e.yesterday);var i=Math.floor(n/d);return f(e.more,{n:i},i)}(r,o):"":t&&e?function(r,t,e){var n=new Date(r),o=n.getDate(),a=n.getMonth().toString(),i=n.getFullYear(),u=t;return(u=(u=u.replace("{day}",o.toString())).replace("{month}",e[a])).replace("{year}",i.toString())}(r,t,e):""},h=function(r){var t=r.children,i=r.langPack,u=r.localStorageCache,c=void 0===u||u,g=e(i),d=g[0],h=g[1];n((function(){var r;if("object"==typeof d&&localStorage.setItem(v,JSON.stringify(d)),!d&&c){var t=JSON.parse(null!==(r=localStorage.getItem(v))&&void 0!==r?r:"");"object"==typeof t&&h(t)}}),[d,c]);var m={getLang:function(r,t,e){var n,o=null===(n=null==d?void 0:d.commons)||void 0===n?void 0:n[r];return f(o,t,e)},getLangDate:function(r,t,e,n,o){var a,i,u,l=null===(a=null==d?void 0:d.dates)||void 0===a?void 0:a[t],c=null===(i=null==d?void 0:d.months)||void 0===i?void 0:i[e],f=o?null===(u=null==d?void 0:d.relativeDates)||void 0===u?void 0:u[o]:void 0;return s(r,l,c,n,f)}};return o(a.Provider,l({value:m},{children:t}))},m=["0","1","2","3","4","5","6","7","8","9","10","11"];export{h as LangsProvider,m as monthKeys,u as useDate,i as useLangs};
//# sourceMappingURL=index.js.map
