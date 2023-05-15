import{createContext as r,useContext as t,useState as n,useEffect as e}from"react";import{jsx as o}from"react/jsx-runtime";var a=["0","1","2","3","4","5","6","7","8","9","10","11"],i=function(){return i=Object.assign||function(r){for(var t,n=1,e=arguments.length;n<e;n++)for(var o in t=arguments[n])Object.prototype.hasOwnProperty.call(t,o)&&(r[o]=t[o]);return r},i.apply(this,arguments)},u=function(r,t){if(!t)return r;for(var n=0,e=Object.entries(t);n<e.length;n++){var o=e[n],a=o[0],i=o[1];r=r.replaceAll("{".concat(a,"}"),i.toString())}return r},l=function(r,t,n){if(void 0===r&&(r=""),"object"!=typeof r)return u(r,t);if(!n)return u(r[5],t);var e="1",o=Math.floor(n/10)%10==1;!o&&[2,3,4].includes(n%10)&&(e="2"),(o||[5,6,7,8,9,0].includes(n%10))&&(e="5");var a=r[e];if(t)for(var i=0,l=Object.entries(t);i<l.length;i++){var c=l[i],v=c[0],f=c[1];a=a.replaceAll("{".concat(v,"}"),f.toString())}return u(a,t)},c=3600,v=86400,f=function(r,t,n,e,o){var a=Math.round((+new Date-r)/1e3);return e&&a<v*e?o?function(r,t){var n=t,e=Math.round((+new Date-r)/1e3);if(e<30)return l(n.just);if(e<60)return l(n.seconds,{seconds:e},e);if(e<c){var o=Math.floor(e/60);return l(n.minutes,{minutes:o},o)}if(e<v){var a=Math.floor(e/c);return l(n.hours,{hours:a},a)}if(e<2*v)return l(n.yesterday);var i=Math.floor(e/v);return l(n.more,{days:i},i)}(r,o):"":t&&n?function(r,t,n){var e=new Date(r),o=e.getDate(),a=e.getMonth().toString(),i=e.getFullYear(),u=t;return(u=(u=u.replace("{day}",o.toString())).replace("{month}",n[a])).replace("{year}",i.toString())}(r,t,n):""},d=r({getLang:function(){return""},getLangDate:function(){return""}}),s=function(){return t(d)},g=function(r){var t=r.children,n=r.langPack,e={getLang:function(r,t,e){if(!(null==n?void 0:n.commons))return"";var o=n.commons[r];return l(o,t,e)},getLangDate:function(r,t,e,o,a){var i,u,l;if(!(null==n?void 0:n.commons)||!n.dates||!(null==n?void 0:n.relativeDates))return"";var c=null===(i=null==n?void 0:n.dates)||void 0===i?void 0:i[t],v=null===(u=null==n?void 0:n.months)||void 0===u?void 0:u[e],d=a?null===(l=null==n?void 0:n.relativeDates)||void 0===l?void 0:l[a]:void 0;return f(r,c,v,o,d)}};return o(d.Provider,i({value:e},{children:t}))},h=function(r){var t=r.unixtime,o=r.dateLangKey,a=r.monthsLangKey,i=r.relativeFromDay,u=r.relativeLangKey,l=s().getLangDate,c=n(""),v=c[0],f=c[1];return e((function(){if(t){var r=l(t,o,a,i,u);f(r)}}),[o,a,i,u,t]),t?v:""};export{g as LangsProvider,a as monthKeys,h as useClientDate,s as useLangs};
//# sourceMappingURL=index.js.map
