var main = function() {
    "use strict";
    var addCommentFromInputBox = function(userID) {
        var $userInput = $("#" + userID + "-user-input"),
            $new_comment;

        //check input is not empty
        if ($userInput.val() !== "") {
            //create and add text with p element object
            $new_comment = $("<p>").text(userID + " user: " +
                $userInput.val());
            //add class to object
            if (userID === "first") {
                $new_comment.addClass("first-user-comments");
            } else {
                $new_comment.addClass("second-user-comments");
            }            
            $new_comment.hide();
            $(".comments").append($new_comment);
            $new_comment.fadeIn();
            $userInput.val("");
        }
    };
    $("#first-user-button").on("click", function(event) {
        addCommentFromInputBox("first");
    });
    $("#second-user-button").on("click", function(event) {
        addCommentFromInputBox("second");
    });
};
$(document).ready(main);