(this.webpackJsonpprojectthree=this.webpackJsonpprojectthree||[]).push([[0],{12:function(e,t,n){e.exports={item:"CategoryItem_item__26ect",link:"CategoryItem_link__3sIHc",position:"CategoryItem_position__3b9WL",titleName:"CategoryItem_titleName__UKG2K",description:"CategoryItem_description__2ooPq"}},14:function(e,t,n){e.exports={meal:"Meal_meal__35GvE",flexItems:"Meal_flexItems__3B6jk",imgMeal:"Meal_imgMeal__2X-za",titleMeal:"Meal_titleMeal__3s2He",button:"Meal_button__2LQq-"}},21:function(e,t,n){e.exports={search:"Search_search__FGndH",button:"Search_button__2oNGI"}},22:function(e,t,n){e.exports={flexItems:"MealList_flexItems__1F7ud",button:"MealList_button__2RdhB"}},24:function(e,t,n){e.exports={link:"Header_link__1trs5"}},26:function(e,t,n){e.exports={spiner:"Preloader_spiner__28h2f"}},27:function(e,t,n){},32:function(e,t,n){},33:function(e,t,n){},44:function(e,t,n){"use strict";n.r(t);var c=n(1),a=n.n(c),r=n(23),s=n.n(r),i=(n(32),n(33),n(4)),o=n(24),l=n.n(o),j=n(0);function u(){return Object(j.jsx)("header",{children:Object(j.jsx)(i.b,{to:"/",className:l.a.link,children:"Home"})})}function b(){return Object(j.jsx)(j.Fragment,{})}var h=n(2),d=n(8),m=n(11),f=n.n(m),x=n(16),O="https://www.themealdb.com/api/json/v1/".concat("1","/"),p=function(){var e=Object(x.a)(f.a.mark((function e(t){var n;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat(O,"lookup.php?i=").concat(t));case 2:return n=e.sent,e.next=5,n.json();case 5:return e.abrupt("return",e.sent);case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),_=function(){var e=Object(x.a)(f.a.mark((function e(){var t;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat(O,"categories.php"));case 2:return t=e.sent,e.next=5,t.json();case 5:return e.abrupt("return",e.sent);case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),g=function(){var e=Object(x.a)(f.a.mark((function e(t){var n;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch(O+"filter.php?c=".concat(t));case 2:return n=e.sent,e.next=5,n.json();case 5:return e.abrupt("return",e.sent);case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),v=n(26),N=n.n(v);function y(){var e="spinner-border text-warning "+N.a.spiner;return Object(j.jsx)(j.Fragment,{children:Object(j.jsx)("div",{className:e,role:"status",children:Object(j.jsx)("span",{className:"visually-hidden",children:"Loading..."})})})}var C=n(15),M=n(12),k=n.n(M);function w(e){e.idCategory;var t=e.strCategory,n=e.strCategoryThumb,c=e.strCategoryDescription;return Object(j.jsxs)("div",{className:k.a.item,children:[Object(j.jsx)("div",{children:Object(j.jsx)("img",{src:n,alt:""})}),Object(j.jsxs)("div",{className:k.a.position,children:[Object(j.jsx)("div",{className:k.a.description,children:c.length>300?c.slice(0,300)+"...":c}),Object(j.jsx)(i.b,{className:k.a.link,to:"/category/".concat(t),children:"Link here"}),Object(j.jsx)("div",{className:k.a.titleName,children:t})]})]})}function I(e){var t=e.catalog;return Object(j.jsx)("div",{children:t.map((function(e){return Object(j.jsx)(w,Object(C.a)({},e),e.idCategory)}))})}var R=n(21),F=n.n(R);function S(e){var t=e.cb,n=Object(c.useState)(""),a=Object(d.a)(n,2),r=a[0],s=a[1],i=function(){t(r),console.log(r)};return Object(j.jsx)(j.Fragment,{children:Object(j.jsxs)("div",{className:F.a.search,children:[Object(j.jsx)("input",{type:"text",placeholder:"search",onKeyDown:function(e){"Enter"===e.key&&i()},onChange:function(e){return s(e.currentTarget.value)},value:r}),Object(j.jsx)("button",{className:F.a.button,onClick:i,children:"Search"})]})})}function L(){var e=Object(c.useState)([]),t=Object(d.a)(e,2),n=t[0],a=t[1],r=Object(c.useState)([]),s=Object(d.a)(r,2),i=s[0],o=s[1],l=Object(h.g)(),u=l.pathname,b=(l.search,Object(h.f)().push);console.log(b);return Object(c.useEffect)((function(){_().then((function(e){a(e.categories),o(e.categories)}))}),[]),Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)(S,{cb:function(e){o(n.filter((function(t){return t.strCategory.toLowerCase().includes(e.toLocaleString())}))),b({pathname:u,search:"?search=".concat(e)})}}),n.length?Object(j.jsx)(I,{catalog:i}):Object(j.jsx)(y,{})]})}function T(){return Object(j.jsx)(j.Fragment,{children:"Page not found"})}var B=n(27),E=n.n(B),H=n(14),P=n.n(H);function G(e){var t=e.strMeal,n=e.idMeal,c=e.strMealThumb;return Object(j.jsxs)("div",{className:P.a.meal,children:[Object(j.jsx)("div",{children:Object(j.jsx)("img",{className:P.a.imgMeal,src:c,alt:""})}),Object(j.jsxs)("div",{children:[Object(j.jsx)("div",{className:P.a.titleMeal,children:t}),Object(j.jsx)(i.b,{className:P.a.button,to:"/meal/".concat(n),children:"Watch recipe"})]})]})}var K=n(22),W=n.n(K);function D(e){var t=e.meals,n=Object(h.f)().goBack;return Object(j.jsxs)("div",{className:W.a.flexItems,children:[Object(j.jsx)("div",{className:W.a.button,onClick:function(){n()},children:Object(j.jsx)("i",{className:"fas fa-long-arrow-alt-left"})}),t.map((function(e){return Object(j.jsx)(G,Object(C.a)({},e),e.idMeal)}))]})}function q(){var e=Object(c.useState)([]),t=Object(d.a)(e,2),n=t[0],a=t[1],r=Object(h.h)().name;return console.log(r),Object(c.useEffect)((function(){g(r).then((function(e){return a(e.meals)}))}),[r]),Object(j.jsx)("div",{children:n.length?Object(j.jsx)(D,{meals:n}):Object(j.jsx)(y,{})})}var A=n(9),J=n.n(A);function Y(){var e=Object(c.useState)([]),t=Object(d.a)(e,2),n=t[0],a=t[1],r=Object(h.f)().goBack,s=Object(h.h)().id;return Object(c.useEffect)((function(){p(s).then((function(e){return a(e.meals[0])}))}),[]),console.log(s),Object(j.jsxs)("div",{style:{color:"white"},children:[Object(j.jsx)("div",{className:J.a.button,onClick:function(){r()},children:Object(j.jsx)("i",{className:"fas fa-long-arrow-alt-left"})}),Object(j.jsxs)("div",{className:J.a.flex,children:[Object(j.jsxs)("div",{className:J.a.pRelative,children:[Object(j.jsx)("img",{className:J.a.image,src:n.strMealThumb,alt:""}),Object(j.jsx)("h1",{className:J.a.title,children:n.strMeal}),Object(j.jsxs)("div",{className:J.a.categoryResipe,children:[Object(j.jsx)("h6",{className:J.a.category,children:n.strCategory}),n.strArea?Object(j.jsx)("h6",{children:n.strArea}):null]})]}),Object(j.jsx)("iframe",{src:"https://www.youtube.com/embed/"+"".concat(n.strYoutube).substr(32,15),title:s})]}),Object(j.jsx)("div",{className:J.a.instructions,children:n.strInstructions})]})}var z=function(){return Object(j.jsx)(j.Fragment,{children:Object(j.jsxs)(i.a,{basename:"/projectThreeOfThree",children:[Object(j.jsx)(u,{}),Object(j.jsx)("main",{className:E.a.classContainer,children:Object(j.jsxs)(h.c,{children:[Object(j.jsx)(h.a,{exact:!0,path:"/",children:Object(j.jsx)(L,{})}),Object(j.jsx)(h.a,{path:"/category/:name",component:q}),Object(j.jsx)(h.a,{path:"/meal/:id",component:Y}),Object(j.jsx)(h.a,{component:T})]})}),Object(j.jsx)(b,{})]})})},Q=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,45)).then((function(t){var n=t.getCLS,c=t.getFID,a=t.getFCP,r=t.getLCP,s=t.getTTFB;n(e),c(e),a(e),r(e),s(e)}))};s.a.render(Object(j.jsx)(a.a.StrictMode,{children:Object(j.jsx)(z,{})}),document.getElementById("root")),Q()},9:function(e,t,n){e.exports={button:"Resipe_button__KrfpT",image:"Resipe_image__1dWny",flex:"Resipe_flex__2y1Y1",title:"Resipe_title__1x35c",pRelative:"Resipe_pRelative__3Fugr",categoryResipe:"Resipe_categoryResipe__21dMO",instructions:"Resipe_instructions__1pgW4"}}},[[44,1,2]]]);
//# sourceMappingURL=main.40862fb2.chunk.js.map