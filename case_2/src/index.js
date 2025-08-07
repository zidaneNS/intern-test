const comments = [
    {
    commentId: 1,
    commentContent: 'Hai',
    replies: [
    {
    commentId: 11,
    commentContent: 'Hai juga',
    replies: [
    {
    commentId: 111,
    commentContent: 'Haai juga hai jugaa'
    },
    {
    commentId: 112,
    commentContent: 'Haai juga hai jugaa'
    }
    ]
    },
    {
    commentId: 12,
    commentContent: 'Hai juga',
    replies: [
    {
    commentId: 121,
    commentContent: 'Haai juga hai jugaa'
    }
    ]
    }
    ]
    },
    {
    commentId: 2,
    commentContent: 'Halooo'
    }
    ]

function getTotalComments(comments) {
    let total = 0;

    function countComments(commentList) {
        for (const comment of commentList) {
            total++;
            if (comment.replies && comment.replies.length > 0) {
                countComments(comment.replies);
            }
        }
    }

    countComments(comments);
    return total;
}

const totalComments = getTotalComments(comments);
console.log("Total komentar adalah", totalComments);
