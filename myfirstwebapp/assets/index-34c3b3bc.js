(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))r(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const o of t.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function l(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function r(e){if(e.ep)return;e.ep=!0;const t=l(e);fetch(e.href,t)}})();let L=document.getElementById("html"),E=document.getElementById("change_btn"),m=document.getElementById("change_image");E.addEventListener("click",()=>{L.classList.toggle("dark"),m.src.includes("assets/moon.svg")?m.src="assets/sun.svg":m.src="assets/moon.svg"});let a=document.getElementById("change_image2"),p=document.getElementById("change_btn2");p.addEventListener("click",()=>{L.classList.toggle("dark"),a.src.includes("assets/moon.svg")?a.src="assets/sun.svg":a.src="assets/moon.svg"});let h=document.getElementById("main_menu"),B=document.getElementById("mobile_btn");B.addEventListener("click",()=>{h.classList.toggle("hidden")});onsubmit=function(n){let l=document.Form1.fname.value,r=document.Form1.emailAdd.value,e=document.Form1.address.value,t=document.Form1.contact.value,o=document.Form1.message.value,s=document.getElementById("warn1"),i=document.getElementById("warn2"),c=document.getElementById("warn3"),u=document.getElementById("warn4");const g=/^[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z])+$/,f=/^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/,y=/^([0-9]{10})+$/;l==""||r==""||e==""||t==""||o==""?(s.innerHTML="*Fields Can Not Be Empty",n.preventDefault()):s.innerHTML="",g.test(l)?i.innerHTML="":(i.innerHTML="*This Field Should Contain Alphabates Only",n.preventDefault()),f.test(r)?c.innerHTML="":(c.innerHTML="*Please Enter A Valid Email Address",n.preventDefault()),y.test(t)?u.innerHTML="":(u.innerHTML="*This Field Should Contain 10 Digits Number Only",n.preventDefault()),g.test(l)&&f.test(r)&&y.test(t)&&(s.innerHTML="Your Query Have Been Submitted Successfully")};const v=document.getElementById("formReset");v.addEventListener("click",I);function I(){let d=document.getElementById("fname"),n=document.getElementById("emailAdd"),l=document.getElementById("address"),r=document.getElementById("contact"),e=document.getElementById("message"),t=document.getElementById("warn1"),o=document.getElementById("warn2"),s=document.getElementById("warn3"),i=document.getElementById("warn4");d.innerHTML="",n.innerHTML="",l.innerHTML="",r.innerHTML="",e.innerHTML="",t.innerHTML="",o.innerHTML="",s.innerHTML="",i.innerHTML=""}