function backEndURL() {
    return "https://raccoons-rest.herokuapp.com/api/";
}

function getPostsForCategory(category) {
    console.log("Requesting posts for '%s' category", category);
    $.ajax({
        url: backEndURL() + "get-posts/" + category,
        type: "post",
        contentType: "application/json",
        success: function (data) {
            console.log("Received posts:", data);
            addPostsToView(JSON.parse(data));
        },
        error: function (e) {
            console.log("Error:", e);
        }
    });
}

function addPostsToView(posts) {
    if (posts == null || posts.length === 0) {
        console.log("Nothing to add to view");
        return;
    }

    for (let post of posts) {
        console.log("Elem", post);
        let postAsCard =
            '<div class="card" >\n' +
            '                <div><img src="' +
            post.image +
            '" ' +
            ' class="card-img-top"\n' +
            '                     alt="Image"></div>\n' +
            '                <div class="card-body">\n' +
            '                    <h5 class="card-title">' +
            post.title +
            "</h5>\n" +
            '                    <p class="card-text">' +
            post.description +
            "</p>\n" +
            '                    <a href="maintenance.html" class="btn btn-primary">Apply for this project!</a>\n' +
            "                </div>\n" +
            "            </div>";
        $(".cards").append(postAsCard);
    }
}
