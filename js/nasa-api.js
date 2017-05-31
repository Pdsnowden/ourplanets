/* File Name: nasa-api.js */
/* Date: 05/30/17 */
/* Programmer: Rebecca Kennedy */

/* eslint-env jquery */
/* eslint no-empty-class: 0,no-extra-strict:0,no-wrap-func:0,global-strict:0,no-alert:0,quotes:0,strict:0 */
/* global document, $ */

$(document).ready(function() {

var beginUrl = "https://api.nasa.gov/planetary/apod?api_key=KDngDjbv8NilLaR3FEFcHvC72IMAtILiF3H1X4Cy&date=";

var date;
var planet;    
    
    /* When a list item is selected by the user, a date should be stored in the date variable and the classname is stored in the planet variable.*/
    $("#planLinks li").click(function() {
        if ($(this).hasClass("mercury")) {
                 date = "2004-09-12";
         planet = ".mercury";
        } else if ($(this).hasClass("venus")) {
            date = "2004-05-16";
            planet = ".venus";
        } else if ($(this).hasClass("earth")) {
            date = "2005-01-02";
            planet = ".earth";
        } else if ($(this).hasClass("mars")) {
            date = "2001-07-18";
            planet = ".mars";
        } else if ($(this).hasClass("jupiter")) {
            date = "2006-05-05";
            planet = ".jupiter";
        } else if ($(this).hasClass("saturn")) {
            date = "2003-08-17";
            planet = ".saturn";
        } else if ($(this).hasClass("uranus")) {
            date = "2001-08-26";
            planet = ".uranus";
        } else if ($(this).hasClass("neptune")) {
            date = "1998-02-21";
            planet = ".neptune";
        }
        /* The URL is concatinated together. */
        var url = beginUrl + date;

        /* The url and planet variables are passed in and information is displayed on the HTML screen. */
        $(planet).click(function() {
            $.ajax({ 
                url: url,
                success: function(result){
                if("planCopyright" in result) {
                  $("#planCopyright").text("Image Credits: " + result.copyright);
                }
                else {
                  $("#planCopyright").text("Image Credits: " + "Public Domain");
                }
  
                if(result.media_type == "video") {
                  $("#planImg").css("display", "none"); 
                  $("#apod_vid_id").attr("src", result.url);
                }
                else {
                  $("#apod_vid_id").css("display", "none"); 
                  $("#planImg").attr("src", result.url);
                }  
                $("#planText").text(result.explanation);
                $("#videoTitle").text(result.title);
                }
            });
        });
    });
});