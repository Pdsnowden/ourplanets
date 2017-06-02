/* File Name: nasa-api.js */
/* Date: 06/02/17 */
/* Programmer: Rebecca Kennedy */

/* eslint-env jquery */
/* eslint no-empty-class: 0,no-extra-strict:0,no-wrap-func:0,global-strict:0,no-alert:0,quotes:0,strict:0 */
/* global document, $ */

$(document).ready(function() {
    var urlBefore = "https://api.nasa.gov/planetary/apod?api_key=KDngDjbv8NilLaR3FEFcHvC72IMAtILiF3H1X4Cy&date=";
    $(".mercury").click(function() {
        $.ajax({ 
            url: urlBefore + "2004-09-12",
            success: results(function() {
            })
        });
    });
    
    $(".venus").click(function() {
        $.ajax({ 
            url: urlBefore + "2004-05-16",
            success: results(function() {
            })
        });
    });
    
    $(".earth").click(function() {
        $.ajax({ 
            url: urlBefore + "2005-01-02",
            success: results(function() {
            })
        });
    });
    
    $(".mars").click(function() {
        $.ajax({ 
            url: urlBefore + "2001-07-18",
            success: results(function() {
            })
        });
    });
    
    $(".jupiter").click(function() {
        $.ajax({ 
            url: urlBefore + "2006-05-05",
            success: results(function() {
            })
        });
    });
    
    $(".saturn").click(function() {
        $.ajax({ 
            url: urlBefore + "2003-08-17",
            success: results(function() {
            })
        });
    });
    
    $(".uranus").click(function() {
        $.ajax({ 
            url: urlBefore + "2001-08-26",
            success: results(function() {
            })
        });
    });
 
    $(".neptune").click(function() {
        $.ajax({ 
            url: urlBefore + "1998-02-21",
            success: results(function() {
            })
        });
    });
    
    function results(func) {
        return function(data) {
            if("planCopyright" in data) {
                $("#planCopyright").text("Image Credits: " + data.copyright);
            }
            else {
                func(data);
                $("#planCopyright").text("Image Credits: " + "Public Domain");
            }
  
            if(data.media_type == "video") {
                $("#planImg").css("display", "none"); 
                $("#apod_vid_id").attr("src", data.url);
            }
            else {
                $("#apod_vid_id").css("display", "none"); 
                $("#planImg").attr("src", data.url);
            }  
            $("#planText").text(data.explanation);
            $("#planName").text(data.title);
         };
    }
});