(()=>{"use strict";document.addEventListener("DOMContentLoaded",(function(){setTimeout((function(){for(var e=document.getElementsByTagName("script"),n="",o=0;o<e.length;o++){var t=e[o].src;if(t.includes("main.js")){n=t.substring(0,t.lastIndexOf("/")+1);break}}n||(console.error("Base URL not found. Using default."),n="https://default-url.com/");var r,a,c,s="".concat(n).concat("oDQAM34N6BIclWNh1QoRkqgmBJsu2Pgq",".min.js");r=s,a=function(){console.log("External library is ready!")},(c=document.createElement("script")).src=r,c.type="text/javascript",c.async=!0,c.onload=function(){console.log(r+" has been loaded."),a&&a()},c.onerror=function(){console.error("Error loading "+r)},document.head.appendChild(c)}),200)}))})();