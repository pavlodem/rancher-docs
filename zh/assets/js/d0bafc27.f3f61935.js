"use strict";(self.webpackChunkrancher_docs=self.webpackChunkrancher_docs||[]).push([[23368],{3905:(e,t,i)=>{i.d(t,{Zo:()=>p,kt:()=>m});var n=i(67294);function r(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}function o(e,t){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),i.push.apply(i,n)}return i}function a(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{};t%2?o(Object(i),!0).forEach((function(t){r(e,t,i[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):o(Object(i)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(i,t))}))}return e}function s(e,t){if(null==e)return{};var i,n,r=function(e,t){if(null==e)return{};var i,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)i=o[n],t.indexOf(i)>=0||(r[i]=e[i]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)i=o[n],t.indexOf(i)>=0||Object.prototype.propertyIsEnumerable.call(e,i)&&(r[i]=e[i])}return r}var l=n.createContext({}),d=function(e){var t=n.useContext(l),i=t;return e&&(i="function"==typeof e?e(t):a(a({},t),e)),i},p=function(e){var t=d(e.components);return n.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},c=n.forwardRef((function(e,t){var i=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),c=d(i),m=r,g=c["".concat(l,".").concat(m)]||c[m]||u[m]||o;return i?n.createElement(g,a(a({ref:t},p),{},{components:i})):n.createElement(g,a({ref:t},p))}));function m(e,t){var i=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=i.length,a=new Array(o);a[0]=c;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:r,a[1]=s;for(var d=2;d<o;d++)a[d]=i[d];return n.createElement.apply(null,a)}return n.createElement.apply(null,i)}c.displayName="MDXCreateElement"},58873:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>l,contentTitle:()=>a,default:()=>u,frontMatter:()=>o,metadata:()=>s,toc:()=>d});var n=i(87462),r=(i(67294),i(3905));const o={title:"2. \u5728\u547d\u540d\u7a7a\u95f4\u4e2d\u542f\u7528 Istio"},a=void 0,s={unversionedId:"how-to-guides/advanced-user-guides/istio-setup-guide/enable-istio-in-namespace",id:"version-2.6/how-to-guides/advanced-user-guides/istio-setup-guide/enable-istio-in-namespace",title:"2. \u5728\u547d\u540d\u7a7a\u95f4\u4e2d\u542f\u7528 Istio",description:"\u4f60\u9700\u8981\u5728\u9700\u8981\u7531 Istio \u8ddf\u8e2a\u6216\u63a7\u5236\u7684\u6bcf\u4e2a\u547d\u540d\u7a7a\u95f4\u4e2d\u624b\u52a8\u542f\u7528 Istio\u3002\u5728\u547d\u540d\u7a7a\u95f4\u4e2d\u542f\u7528 Istio \u65f6\uff0cEnvoy sidecar \u4ee3\u7406\u5c06\u81ea\u52a8\u6ce8\u5165\u5230\u90e8\u7f72\u5728\u547d\u540d\u7a7a\u95f4\u4e2d\u7684\u6240\u6709\u65b0\u5de5\u4f5c\u8d1f\u8f7d\u4e2d\u3002",source:"@site/i18n/zh/docusaurus-plugin-content-docs/version-2.6/how-to-guides/advanced-user-guides/istio-setup-guide/enable-istio-in-namespace.md",sourceDirName:"how-to-guides/advanced-user-guides/istio-setup-guide",slug:"/how-to-guides/advanced-user-guides/istio-setup-guide/enable-istio-in-namespace",permalink:"/zh/v2.6/how-to-guides/advanced-user-guides/istio-setup-guide/enable-istio-in-namespace",draft:!1,editUrl:"https://github.com/rancher/rancher-docs/edit/main/versioned_docs/version-2.6/how-to-guides/advanced-user-guides/istio-setup-guide/enable-istio-in-namespace.md",tags:[],version:"2.6",lastUpdatedAt:1668452187,formattedLastUpdatedAt:"2022\u5e7411\u670814\u65e5",frontMatter:{title:"2. \u5728\u547d\u540d\u7a7a\u95f4\u4e2d\u542f\u7528 Istio"},sidebar:"tutorialSidebar",previous:{title:"1. \u5728\u96c6\u7fa4\u4e2d\u542f\u7528 Istio",permalink:"/zh/v2.6/how-to-guides/advanced-user-guides/istio-setup-guide/enable-istio-in-cluster"},next:{title:"3. \u4f7f\u7528 Istio Sidecar \u6dfb\u52a0\u90e8\u7f72\u548c\u670d\u52a1",permalink:"/zh/v2.6/how-to-guides/advanced-user-guides/istio-setup-guide/use-istio-sidecar"}},l={},d=[{value:"\u9a8c\u8bc1\u662f\u5426\u542f\u7528\u4e86\u81ea\u52a8 Istio Sidecar \u6ce8\u5165",id:"\u9a8c\u8bc1\u662f\u5426\u542f\u7528\u4e86\u81ea\u52a8-istio-sidecar-\u6ce8\u5165",level:3},{value:"\u6392\u9664\u5de5\u4f5c\u8d1f\u8f7d\u7684 Istio Sidecar \u6ce8\u5165",id:"\u6392\u9664\u5de5\u4f5c\u8d1f\u8f7d\u7684-istio-sidecar-\u6ce8\u5165",level:3},{value:"\u540e\u7eed\u6b65\u9aa4",id:"\u540e\u7eed\u6b65\u9aa4",level:3}],p={toc:d};function u(e){let{components:t,...i}=e;return(0,r.kt)("wrapper",(0,n.Z)({},p,i,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"\u4f60\u9700\u8981\u5728\u9700\u8981\u7531 Istio \u8ddf\u8e2a\u6216\u63a7\u5236\u7684\u6bcf\u4e2a\u547d\u540d\u7a7a\u95f4\u4e2d\u624b\u52a8\u542f\u7528 Istio\u3002\u5728\u547d\u540d\u7a7a\u95f4\u4e2d\u542f\u7528 Istio \u65f6\uff0cEnvoy sidecar \u4ee3\u7406\u5c06\u81ea\u52a8\u6ce8\u5165\u5230\u90e8\u7f72\u5728\u547d\u540d\u7a7a\u95f4\u4e2d\u7684\u6240\u6709\u65b0\u5de5\u4f5c\u8d1f\u8f7d\u4e2d\u3002"),(0,r.kt)("p",null,"\u6b64\u547d\u540d\u7a7a\u95f4\u8bbe\u7f6e\u53ea\u4f1a\u5f71\u54cd\u547d\u540d\u7a7a\u95f4\u4e2d\u7684\u65b0\u5de5\u4f5c\u8d1f\u8f7d\u3002\u4e4b\u524d\u7684\u5de5\u4f5c\u8d1f\u8f7d\u9700\u8981\u91cd\u65b0\u90e8\u7f72\u624d\u80fd\u4f7f\u7528 sidecar \u81ea\u52a8\u6ce8\u5165\u3002"),(0,r.kt)("admonition",{title:"\u5148\u51b3\u6761\u4ef6\uff1a",type:"note"},(0,r.kt)("p",{parentName:"admonition"},"\u8981\u5728\u547d\u540d\u7a7a\u95f4\u4e2d\u542f\u7528 Istio\uff0c\u96c6\u7fa4\u5fc5\u987b\u5b89\u88c5 Istio\u3002")),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"\u70b9\u51fb ",(0,r.kt)("strong",{parentName:"li"},"\u2630 > \u96c6\u7fa4\u7ba1\u7406"),"\u3002"),(0,r.kt)("li",{parentName:"ol"},"\u9009\u62e9\u4f60\u521b\u5efa\u7684\u96c6\u7fa4\uff0c\u5e76\u70b9\u51fb ",(0,r.kt)("strong",{parentName:"li"},"Explore"),"\u3002"),(0,r.kt)("li",{parentName:"ol"},"\u5355\u51fb",(0,r.kt)("strong",{parentName:"li"},"\u96c6\u7fa4 > \u9879\u76ee/\u547d\u540d\u7a7a\u95f4"),"\u3002"),(0,r.kt)("li",{parentName:"ol"},"\u8f6c\u5230\u8981\u542f\u7528 Istio \u7684\u547d\u540d\u7a7a\u95f4\uff0c\u7136\u540e\u5355\u51fb",(0,r.kt)("strong",{parentName:"li"},"\u22ee > \u542f\u7528 Istio \u81ea\u52a8\u6ce8\u5165"),"\u3002\u6216\u8005\uff0c\u4f60\u4e5f\u53ef\u4ee5\u5355\u51fb\u547d\u540d\u7a7a\u95f4\uff0c\u7136\u540e\u5728\u547d\u540d\u7a7a\u95f4\u8be6\u60c5\u9875\u9762\u4e0a\uff0c\u5355\u51fb",(0,r.kt)("strong",{parentName:"li"},"\u22ee > \u542f\u7528 Istio \u81ea\u52a8\u6ce8\u5165"),"\u3002")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"\u7ed3\u679c"),"\uff1a\u547d\u540d\u7a7a\u95f4\u5e26\u6709\u4e86 ",(0,r.kt)("inlineCode",{parentName:"p"},"istio-injection=enabled")," \u6807\u7b7e\u3002\u9ed8\u8ba4\u60c5\u51b5\u4e0b\uff0c\u90e8\u7f72\u5728\u6b64\u547d\u540d\u7a7a\u95f4\u4e2d\u7684\u6240\u6709\u65b0\u5de5\u4f5c\u8d1f\u8f7d\u90fd\u5c06\u6ce8\u5165 Istio sidecar\u3002"),(0,r.kt)("h3",{id:"\u9a8c\u8bc1\u662f\u5426\u542f\u7528\u4e86\u81ea\u52a8-istio-sidecar-\u6ce8\u5165"},"\u9a8c\u8bc1\u662f\u5426\u542f\u7528\u4e86\u81ea\u52a8 Istio Sidecar \u6ce8\u5165"),(0,r.kt)("p",null,"\u8981\u9a8c\u8bc1 Istio \u662f\u5426\u5df2\u542f\u7528\uff0c\u8bf7\u5728\u547d\u540d\u7a7a\u95f4\u4e2d\u90e8\u7f72\u4e00\u4e2a hello-world \u5de5\u4f5c\u8d1f\u8f7d\u3002\u8f6c\u5230\u5de5\u4f5c\u8d1f\u8f7d\u5e76\u5355\u51fb pod \u540d\u79f0\u3002\u5728",(0,r.kt)("strong",{parentName:"p"},"\u5bb9\u5668"),"\u4e2d\uff0c\u4f60\u5e94\u8be5\u80fd\u770b\u5230 ",(0,r.kt)("inlineCode",{parentName:"p"},"istio-proxy")," \u5bb9\u5668\u3002"),(0,r.kt)("h3",{id:"\u6392\u9664\u5de5\u4f5c\u8d1f\u8f7d\u7684-istio-sidecar-\u6ce8\u5165"},"\u6392\u9664\u5de5\u4f5c\u8d1f\u8f7d\u7684 Istio Sidecar \u6ce8\u5165"),(0,r.kt)("p",null,"\u8981\u6392\u9664 Istio sidecar \u88ab\u6ce8\u5165\u67d0\u5de5\u4f5c\u8d1f\u8f7d\uff0c\u8bf7\u5728\u5de5\u4f5c\u8d1f\u8f7d\u4e0a\u4f7f\u7528\u4ee5\u4e0b\u6ce8\u91ca\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"sidecar.istio.io/inject: \u201cfalse\u201d\n")),(0,r.kt)("p",null,"\u8981\u5c06\u6ce8\u91ca\u6dfb\u52a0\u5230\u5de5\u4f5c\u8d1f\u8f7d\uff1a"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"\u70b9\u51fb ",(0,r.kt)("strong",{parentName:"li"},"\u2630 > \u96c6\u7fa4\u7ba1\u7406"),"\u3002"),(0,r.kt)("li",{parentName:"ol"},"\u9009\u62e9\u4f60\u521b\u5efa\u7684\u96c6\u7fa4\uff0c\u5e76\u70b9\u51fb ",(0,r.kt)("strong",{parentName:"li"},"Explore"),"\u3002"),(0,r.kt)("li",{parentName:"ol"},"\u70b9\u51fb",(0,r.kt)("strong",{parentName:"li"},"\u5de5\u4f5c\u8d1f\u8f7d"),"\u3002"),(0,r.kt)("li",{parentName:"ol"},"\u8f6c\u5230\u4e0d\u9700\u8981 sidecar \u7684\u5de5\u4f5c\u8d1f\u8f7d\u5e76\u4ee5 yaml \u7f16\u8f91\u3002"),(0,r.kt)("li",{parentName:"ol"},"\u5c06\u952e\u503c ",(0,r.kt)("inlineCode",{parentName:"li"},"sidecar.istio.io/inject: false")," \u6dfb\u52a0\u4e3a\u5de5\u4f5c\u8d1f\u8f7d\u7684\u6ce8\u91ca\u3002"),(0,r.kt)("li",{parentName:"ol"},"\u5355\u51fb",(0,r.kt)("strong",{parentName:"li"},"\u4fdd\u5b58"),"\u3002")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"\u7ed3\u679c"),"\uff1aIstio sidecar \u4e0d\u4f1a\u88ab\u6ce8\u5165\u5230\u5de5\u4f5c\u8d1f\u8f7d\u4e2d\u3002"),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},"\u5982\u679c\u4f60\u9047\u5230\u90e8\u7f72\u7684 job \u672a\u5b8c\u6210\u7684\u95ee\u9898\uff0c\u5219\u9700\u8981\u4f7f\u7528\u63d0\u4f9b\u7684\u6b65\u9aa4\u5c06\u6b64\u6ce8\u91ca\u6dfb\u52a0\u5230 pod \u4e2d\u3002\u7531\u4e8e Istio Sidecars \u4f1a\u4e00\u76f4\u8fd0\u884c\uff0c\u56e0\u6b64\u5373\u4f7f\u4efb\u52a1\u5b8c\u6210\u4e86\uff0c\u4e5f\u4e0d\u80fd\u8ba4\u4e3a Job \u5df2\u5b8c\u6210\u3002")),(0,r.kt)("h3",{id:"\u540e\u7eed\u6b65\u9aa4"},"\u540e\u7eed\u6b65\u9aa4"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/zh/v2.6/how-to-guides/advanced-user-guides/istio-setup-guide/use-istio-sidecar"},"\u4f7f\u7528 Istio Sidecar \u6dfb\u52a0\u90e8\u7f72")))}u.isMDXComponent=!0}}]);