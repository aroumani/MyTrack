/*
Title: Simple Progress bar
Desc: Re-usable animated bar plugin
Created: 01.12
Updated: 01.27.12
Version 0.91

Compiled with CoffeeScript, use original for detailed comments
*/$(function(){return $.fn.simpleProgressBar=function(a){var b;b={direction:"horizontal",innerLength:0,outerLength:100};a=$.extend(b,a);return this.each(function(a){var c,d,e,f,g,h,i,j,k;i=$(this);c=b.direction;f=i.attr("data-bar-length")||b.innerLength;if(c==="horizontal"){h=$(this).width();d="width"}else if(c==="vertical"){h=$(this).height();d="height"}f=parseInt(f,10)*.01;g=f*h;k=d;j={};j[k]=g+"px";e=i.append('<div class="innerbar"></div>');return i.children(".innerbar").css(d,"0px").animate(j,"slow")})}});