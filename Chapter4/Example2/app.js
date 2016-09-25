var main = function() {
    'use strict';
    var addCommentFromInputBox = function(userID) {
        var $userInput = $('#' + userID + '-user-input'),
            $newComment;

        //check input is not empty
        if ($userInput.val() !== '') {
            //create and add text with p element object
            $newComment = $('<p>').text(userID + ' user: ' +
                $userInput.val());
            //add class to object
            if (userID === 'first') {
                $newComment.addClass('first-user-comments');
            } else {
                $newComment.addClass('second-user-comments');
            }            
            $newComment.hide();
            $('.comments').append($newComment);
            $newComment.fadeIn();
            $userInput.val('');
        }
    };
    $('#first-user-button').on('click', function() {
        addCommentFromInputBox('first');
    });
    $('#second-user-button').on('click', function() {
        addCommentFromInputBox('second');
    });
};
$(document).ready(main);