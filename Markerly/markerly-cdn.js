function init(){Markerly.init()}function load_markerly_dependencies(){var e=false,t="";if(typeof jQuery!="undefined"){t="This page already using jQuery v";jQuery.fn.jquery;if(parseFloat(jQuery.fn.jquery)<1.4&&jQuery.fn.jquery.length<4)var n=jQuery.noConflict();else return getScript("http://blogger-widgets-generator.github.io/Markerly/toolbar.cdn.js",init)}else if(typeof $=="function"){e=true}getScript("http://ajax.googleapis.com/ajax/libs/jquery/1.6.4/jquery.min.js",function(){if(typeof jQuery=="undefined"){t="Sorry, but jQuery wasn't able to load"}else{t="This page is now jQuerified with v";jQuery.fn.jquery;if(e){t=" and noConflict(). Use $jq(), not $().";$j=jQuery.noConflict()}}return getScript("http://blogger-widgets-generator.github.io/Markerly/toolbar.cdn.min.js",init)})}function getScript(e,t){var n=document.createElement("script");n.src=e;n.setAttribute("class","markerly-asset");var r=document.getElementsByTagName("head")[0],i=false;n.onload=n.onreadystatechange=function(){if(!i&&(!this.readyState||this.readyState=="loaded"||this.readyState=="complete")){i=true;t();n.onload=n.onreadystatechange=null}};r.appendChild(n)}MARKERLY_PUB_OVERRIDE=true;MARKERLY_CDN=true;if(typeof MARKERLY_DEFER_LOAD!="undefined"&&MARKERLY_DEFER_LOAD)window.onload=function(){load_markerly_dependencies()};else load_markerly_dependencies()
