import{createContext as r,useContext as t,useState as n,useEffect as e}from"react";import{jsx as o}from"react/jsx-runtime";var a=r({getLang:function(){return""},getLangDate:function(){return""}}),i=function(){return t(a)},u=function(r){var t=r.unixtime,o=r.dateLangKey,a=r.monthsLangKey,u=r.relativeFromDay,l=r.relativeLangKey,c=i().getLangDate,v=n(""),f=v[0],g=v[1];return e((function(){if(t){var r=c(t,o,a,u,l);g(r)}}),[o,c,a,u,l,t]),t?f:""},l=function(){return l=Object.assign||function(r){for(var t,n=1,e=arguments.length;n<e;n++)for(var o in t=arguments[n])Object.prototype.hasOwnProperty.call(t,o)&&(r[o]=t[o]);return r},l.apply(this,arguments)},c=function(r,t){if(!t)return r;for(var n=0,e=Object.entries(t);n<e.length;n++){var o=e[n],a=o[0],i=o[1];r=r.replaceAll("{".concat(a,"}"),i.toString())}return r},v=function(r,t,n){if(void 0===r&&(r=""),"object"!=typeof r)return c(r,t);if(!n)return c(r[5],t);var e="1",o=Math.floor(n/10)%10==1;!o&&[2,3,4].includes(n%10)&&(e="2"),(o||[5,6,7,8,9,0].includes(n%10))&&(e="5");var a=r[e];if(t)for(var i=0,u=Object.entries(t);i<u.length;i++){var l=u[i],v=l[0],f=l[1];a=a.replaceAll("{".concat(v,"}"),f.toString())}return c(a,t)},f="yermak-langs-cache",g=3600,d=86400,s=function(r,t,n,e,o){var a=Math.round((+new Date-r)/1e3);return e&&a<d*e?o?function(r,t){var n=t,e=Math.round((+new Date-r)/1e3);if(e<30)return v(n.just);if(e<60)return v(n.seconds,{n:e},e);if(e<120)return v(n.minute);if(e<g){var o=Math.floor(e/60);return v(n.minutes,{n:o},o)}if(1===Math.floor(e/g))return v(n.hour);if(e<d){var a=Math.floor(e/g);return v(n.hours,{n:a},a)}if(e<2*d)return v(n.yesterday);var i=Math.floor(e/d);return v(n.more,{n:i},i)}(r,o):"":t&&n?function(r,t,n){var e=new Date(r),o=e.getDate(),a=e.getMonth().toString(),i=e.getFullYear(),u=t;return(u=(u=u.replace("{day}",o.toString())).replace("{month}",n[a])).replace("{year}",i.toString())}(r,t,n):""},h=function(r){var t=r.children,i=r.langPack,u=r.localStorageCache,c=void 0===u||u,g=n(i),d=g[0],h=g[1];e((function(){var r;d&&localStorage.setItem(f,JSON.stringify(d)),!d&&c&&h(JSON.parse(null!==(r=localStorage.getItem(f))&&void 0!==r?r:""))}),[d,c]);var m={getLang:function(r,t,n){var e,o=null===(e=null==d?void 0:d.commons)||void 0===e?void 0:e[r];return v(o,t,n)},getLangDate:function(r,t,n,e,o){var a,i,u,l=null===(a=null==d?void 0:d.dates)||void 0===a?void 0:a[t],c=null===(i=null==d?void 0:d.months)||void 0===i?void 0:i[n],v=o?null===(u=null==d?void 0:d.relativeDates)||void 0===u?void 0:u[o]:void 0;return s(r,l,c,e,v)}};return o(a.Provider,l({value:m},{children:t}))},m=["0","1","2","3","4","5","6","7","8","9","10","11"];export{h as LangsProvider,m as monthKeys,u as useDate,i as useLangs};
//# sourceMappingURL=index.js.map
