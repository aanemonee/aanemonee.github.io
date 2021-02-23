"use strict";var userName,introPageText=document.querySelector(".intro-page__text-greeting"),introPage=document.querySelector(".intro-page"),navMenu=document.querySelector(".navigation-mobile"),bgLaptop=document.querySelector(".secondary-bg"),bgLight=document.querySelector(".light-bg"),introText=document.querySelector(".intro-page__text"),skilsPageSlider=document.querySelector(".skills-page__content"),skilsPageLine=document.querySelector(".skills-page__content-box"),skillsPageItems=document.querySelectorAll(".skills-page__content-item"),sl=document.querySelector(".slider"),sln=document.querySelector(".slider-line"),si=document.querySelectorAll(".slider-item"),headerContent=document.querySelector(".site-header__content"),clearName=function(e){e.innerText="Welcome"};null!==localStorage.getItem("name")&&(userName=localStorage.getItem("name"),introPageText.innerText="Welcome, ".concat(userName,"!"));var sendName=function(e){var t=e,e=document.querySelector(".svelte-input-name").value;t.innerText="Welcome, ".concat(e,"! Now reload page"),localStorage.setItem("name",e)},DEBOUNCE=function(i,r){var a;return function(){for(var e=this,t=arguments.length,n=new Array(t),o=0;o<t;o++)n[o]=arguments[o];clearTimeout(a),a=setTimeout(function(){i.apply(e,n)},r)}},elemHeightChanger=function(e,t,n){return e.offsetHeight===n?e.style.height="".concat(t,"px"):e.style.height="".concat(n,"px")},CustomSlider=function(e,t,n){function o(){a.style.transform="translate(-".concat(l*s,"px)")}var i=e,r=n,a=t,l=0,s=0,t=function(){s=i.offsetWidth,a.style.width="".concat(s*r.length,"px"),r.forEach(function(e){e.style.width="".concat(s,"px"),e.style.height="auto"}),o()};window.addEventListener("resize",DEBOUNCE(t,200));return t(),{next:function(){(l+=1)>=r.length&&(l=0),o()},prev:function(){--l<0&&(l=r.length-1),o()}}},MYSLIDER=new CustomSlider(sl,sln,si),togglePopup=function(e){e.classList.toggle("visible-popup")},toggleLight=function(e){e.classList.toggle("hidden")},lightOnOpacity=function(e){e.classList.toggle("low-opacity")},bgAnimation=function(e,t){var n=e;t&&1031<window.innerWidth&&t.addEventListener("mousemove",DEBOUNCE(function(e){var t=e.clientX/window.innerWidth*30-15,e=e.clientY/window.innerHeight*10-5;return n.setAttribute("style","background-position: ".concat(t,"px ").concat(e,"px;"))},10))},SKILLSLIDER={};function skillsPageGridOrSlider(){return!(1031<window.innerWidth)&&(skilsPageSlider.classList.add("skills-page__slider"),skilsPageLine.classList.add("skills-page__slider-line"),skillsPageItems.forEach(function(e){e.classList.add("skills-page__slider-item")}),SKILLSLIDER=new CustomSlider(skilsPageSlider,skilsPageLine,skillsPageItems))}var clearLocalStorage=function(){localStorage.clear()};document.addEventListener("DOMContentLoaded",function(){skillsPageGridOrSlider(),document.addEventListener("click",function(){var e=event.target.dataset.role,t=event.target.dataset.step,n=document.querySelector("#".concat(t));if(!e)return!1;switch(event.preventDefault(),e){case"mobile-main-nav":DEBOUNCE(elemHeightChanger(headerContent,200,50),1e3),DEBOUNCE(togglePopup(navMenu),1e3);break;case"light-switcher":toggleLight(bgLight),lightOnOpacity(introText);break;case"link":n.scrollIntoView({behavior:"smooth",block:"start"});break;case"slider-next":MYSLIDER.next();break;case"slider-prev":MYSLIDER.prev();break;case"skills-slider-next":SKILLSLIDER.next();break;case"skills-slider-prev":SKILLSLIDER.prev();break;case"forgotName":clearLocalStorage(),clearName(introPageText);break;case"setName":sendName(introPageText)}});var t=window.pageYOffset;window.onscroll=DEBOUNCE(function(){var e=window.pageYOffset;e<t?document.querySelector(".site-header").style.top="0":(90===navMenu.offsetHeight&&(togglePopup(navMenu),elemHeightChanger(headerContent,200,50)),document.querySelector(".site-header").style.top="-50px"),t=e},50),document.addEventListener("scroll",DEBOUNCE(function(){var e=document.querySelector(".about-page").getBoundingClientRect();window.pageYOffset>e.top?(bgLight.classList.add("hidden"),introText.classList.add("low-opacity")):window.pageYOffset<e.top&&(bgLight.classList.remove("hidden"),introText.classList.remove("low-opacity"))},50)),bgAnimation(bgLaptop,introPage)});
//# sourceMappingURL=main.js.map
