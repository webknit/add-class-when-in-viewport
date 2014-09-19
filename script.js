/* - BASE HTML TEMPLATE
------------------------------------------------- 
	Description: JS Scripts
	Author:Shane Prendergast
	Author URL:http://www.webknit.co.uk
	Template URL:http://base.webknit.co.uk/
*/

// Reading this article for inspiration
// http://css-tricks.com/slide-in-as-you-scroll-down-boxes/

// Plugin used
// https://github.com/teamdf/jquery-visible/
(function(e){e.fn.visible=function(t,n,r){var i=e(this).eq(0),s=i.get(0),o=e(window),u=o.scrollTop(),a=u+o.height(),f=o.scrollLeft(),l=f+o.width(),c=i.offset().top,h=c+i.height(),p=i.offset().left,d=p+i.width(),v=t===true?h:c,m=t===true?c:h,g=t===true?d:p,y=t===true?p:d,b=n===true?s.offsetWidth*s.offsetHeight:true,r=r?r:"both";if(r==="both")return!!b&&m<=a&&v>=u&&y<=l&&g>=f;else if(r==="vertical")return!!b&&m<=a&&v>=u;else if(r==="horizontal")return!!b&&y<=l&&g>=f}})(jQuery)

// JS EXAMPLE

// Variables
var wholeWindow = $(window);
var box = $('.box');

// Scroll the window, check if element if view
// If it is then add a class
// Lots of ways to enhance and elaborate on this script based on individual needs
wholeWindow.scroll(function() {

	if (box.visible(true)) {

		box.addClass('active');

	}

});