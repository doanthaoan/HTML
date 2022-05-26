let data = [
    {
        image: "images/1.jpg",
        title: "Tiêu đề bài viết 01",
        author: "Thanh",
        short_content: "Lorem 1",
        content: "full content 1",
        tags: ["Create", "News"],
        likes: 12,
        comments: 20,
        url: "blog-detail.html",
        date: "FEB 14"
    },
    {
        image: "images/2.jpg",
        title: "Tiêu đề bài viết 02",
        author: "Thanh",
        short_content: "Lorem 2",
        content: "full content 2",
        tags: ["Create"],
        likes: 2,
        comments: 10,
        url: "blog-detail.html",
        date: "JAN 22"
    },
    {
        image: "images/project1.jpg",
        title: "Tiêu đề bài viết 03",
        author: "Thanh",
        short_content: "Lorem 3",
        content: "full content 2",
        tags: ["Create", "News", "Blog"], // Creative, News, Blog
        likes: 120,
        comments: 30,
        url: "blog-detail.html",
        date: "APR 15"
    },
    {
        image: "images/4.jpg",
        title: "Tiêu đề bài viết 03",
        author: "Thanh",
        short_content: "Lorem 3",
        content: "full content 2",
        tags: ["Create", "News", "Blog"], // Creative, News, Blog
        likes: 120,
        comments: 30,
        url: "blog-detail.html",
        date: "APR 15"
    },
    {
        image: "images/6.jpg",
        title: "Tiêu đề bài viết 03",
        author: "Thanh",
        short_content: "Lorem 3",
        content: "full content 2",
        tags: ["Create", "News", "Blog"], // Creative, News, Blog
        likes: 120,
        comments: 30,
        url: "blog-detail.html",
        date: "APR 15"
    },
];

/* Show/Hide Date functions 
    - Based on current structure.
    - Input: current hover element
*********************************/
function showDate(element) {
    // console.log(element.children[0].children[1]);
    let dateBlock = element.children[0].children[1];
    dateBlock.style.left = "0";
}
function hideDate(element) {
    let dateBlock = element.children[0].children[1];
    dateBlock.style.left = "-100%";
}

// Init blog-content for blog. Need for next script to show/hide date info
document.getElementById("blog-content").innerHTML = blogItem;

// // get all elements with class .blog-item
let itemBlocks = document.getElementsByClassName('blog-item');

// // Add event mouseover/mouseout for EACH (ALL) elements with class .blog-item
for (let i = 0; i < itemBlocks.length; i++) {
    itemBlocks[i].addEventListener('mouseover', (e) => {
        e.stopPropagation(); // stop the event loop when it occured 1 time
        showDate(itemBlocks[i]);
    });
    itemBlocks[i].addEventListener('mouseout', (e) => {
        e.stopPropagation(); // stop the event loop when it occured 1 time
        hideDate(itemBlocks[i]);
    })
}

// HOVER USING jQuery

// $('#blog-content').html(blogItem); // Add content using blogItem 

$('.blog-item').hover(
    function () {  // mouse in
        $(this).find('.date').css({
            "left": "0",
            "background-color": "red",
            "color": "black",
            'font-size': "10px!important"
        });
    },
    function () { // mouse out
        $(this).find('.date').css("left", "-100%");
    }
)