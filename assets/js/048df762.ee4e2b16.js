"use strict";(self.webpackChunkrancher_docs=self.webpackChunkrancher_docs||[]).push([[8492],{3905:(e,t,r)=>{r.d(t,{Zo:()=>l,kt:()=>m});var a=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var d=a.createContext({}),p=function(e){var t=a.useContext(d),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},l=function(e){var t=p(e.components);return a.createElement(d.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,d=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),u=p(r),m=n,k=u["".concat(d,".").concat(m)]||u[m]||c[m]||o;return r?a.createElement(k,i(i({ref:t},l),{},{components:r})):a.createElement(k,i({ref:t},l))}));function m(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,i=new Array(o);i[0]=u;var s={};for(var d in t)hasOwnProperty.call(t,d)&&(s[d]=t[d]);s.originalType=e,s.mdxType="string"==typeof e?e:n,i[1]=s;for(var p=2;p<o;p++)i[p]=r[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,r)}u.displayName="MDXCreateElement"},86108:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>d,contentTitle:()=>i,default:()=>c,frontMatter:()=>o,metadata:()=>s,toc:()=>p});var a=r(87462),n=(r(67294),r(3905));const o={title:"Adding a Sidecar"},i=void 0,s={unversionedId:"how-to-guides/new-user-guides/kubernetes-resources-setup/workloads-and-pods/add-a-sidecar",id:"version-2.6/how-to-guides/new-user-guides/kubernetes-resources-setup/workloads-and-pods/add-a-sidecar",title:"Adding a Sidecar",description:"A sidecar is a container that extends or enhances the main container in a pod. The main container and the sidecar share a pod, and therefore share the same network space and storage. You can add sidecars to existing workloads by using the Add a Sidecar option.",source:"@site/versioned_docs/version-2.6/how-to-guides/new-user-guides/kubernetes-resources-setup/workloads-and-pods/add-a-sidecar.md",sourceDirName:"how-to-guides/new-user-guides/kubernetes-resources-setup/workloads-and-pods",slug:"/how-to-guides/new-user-guides/kubernetes-resources-setup/workloads-and-pods/add-a-sidecar",permalink:"/v2.6/how-to-guides/new-user-guides/kubernetes-resources-setup/workloads-and-pods/add-a-sidecar",draft:!1,editUrl:"https://github.com/rancher/rancher-docs/edit/main/versioned_docs/version-2.6/how-to-guides/new-user-guides/kubernetes-resources-setup/workloads-and-pods/add-a-sidecar.md",tags:[],version:"2.6",lastUpdatedAt:1668452187,formattedLastUpdatedAt:"Nov 14, 2022",frontMatter:{title:"Adding a Sidecar"},sidebar:"tutorialSidebar",previous:{title:"Upgrading Workloads",permalink:"/v2.6/how-to-guides/new-user-guides/kubernetes-resources-setup/workloads-and-pods/upgrade-workloads"},next:{title:"The Horizontal Pod Autoscaler",permalink:"/v2.6/pages-for-subheaders/horizontal-pod-autoscaler"}},d={},p=[{value:"Related Links",id:"related-links",level:2}],l={toc:p};function c(e){let{components:t,...r}=e;return(0,n.kt)("wrapper",(0,a.Z)({},l,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"A ",(0,n.kt)("em",{parentName:"p"},"sidecar")," is a container that extends or enhances the main container in a pod. The main container and the sidecar share a pod, and therefore share the same network space and storage. You can add sidecars to existing workloads by using the ",(0,n.kt)("strong",{parentName:"p"},"Add a Sidecar")," option."),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"In the upper left corner, click ",(0,n.kt)("strong",{parentName:"p"},"\u2630 > Cluster Management"),".")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Go to the cluster where you want to add a sidecar and click ",(0,n.kt)("strong",{parentName:"p"},"Explore"),".")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"In the left navigation bar, click ",(0,n.kt)("strong",{parentName:"p"},"Workload"),".")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Find the workload that you want to extend. Select ",(0,n.kt)("strong",{parentName:"p"},"\u22ee > + Add Sidecar"),".")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Enter a ",(0,n.kt)("strong",{parentName:"p"},"Name")," for the sidecar.")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"In the ",(0,n.kt)("strong",{parentName:"p"},"General")," section, select a sidecar type. This option determines if the sidecar container is deployed before or after the main container is deployed."),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"Standard Container:")),(0,n.kt)("p",{parentName:"li"},"  The sidecar container is deployed after the main container.")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"Init Container:")),(0,n.kt)("p",{parentName:"li"},"  The sidecar container is deployed before the main container.")))),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"From the ",(0,n.kt)("strong",{parentName:"p"},"Container Image")," field, enter the name of the container image that you want to deploy in support of the main container. During deployment, Rancher pulls this image from ",(0,n.kt)("a",{parentName:"p",href:"https://hub.docker.com/explore/"},"Docker Hub"),". Enter the name exactly as it appears on Docker Hub.")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Set the remaining options. You can read about them in ",(0,n.kt)("a",{parentName:"p",href:"/v2.6/how-to-guides/new-user-guides/kubernetes-resources-setup/workloads-and-pods/deploy-workloads"},"Deploying Workloads"),".")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Click ",(0,n.kt)("strong",{parentName:"p"},"Launch"),"."))),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Result:")," The sidecar is deployed according to your parameters. Following its deployment, you can view the sidecar by selecting ",(0,n.kt)("strong",{parentName:"p"},"\u22ee icon (...) > Edit")," for the main deployment."),(0,n.kt)("h2",{id:"related-links"},"Related Links"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://kubernetes.io/blog/2015/06/the-distributed-system-toolkit-patterns/"},"The Distributed System ToolKit: Patterns for Composite Containers"))))}c.isMDXComponent=!0}}]);