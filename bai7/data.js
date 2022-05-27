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


// BLOG TWO

// data:
let postsData = [
    {
        month: "November 2013",
        data: [{
            image: "images/1.jpg",
            title: "Tiêu đề bài viết 01",
            author: "Thanh",
            short_content: "Lorem 1",
            content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean dapibus, dui a malesuada elementum, nisi diam malesuada quam, quis cursus metus purus vel augue. In id cursus risus, in interdum risus. Vivamus augue augue, sagittis vel fermentum eu, porta ut nunc. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Mauris a consequat augue. In non sem nec sem blandit pretium et laoreet nisi. Pellentesque hendrerit quam eu semper laoreet. In hac habitasse platea dictumst. Nam ac pellentesque sem. Donec quis hendrerit nisl, id malesuada tellus. Phasellus massa magna, sodales eu fringilla ut, convallis eget elit. Aliquam consequat molestie commodo. Sed et risus mauris.",
            tags: ["Create", "News"],
            likes: 12,
            comments: 20,
            url: "blog-detail.html",
            date: "NOV 14"
        },
        {
            image: "https://www.youtube.com/watch?v=Oe421EPjeBE",
            title: "Tiêu đề bài viết 02",
            author: "Thanh",
            short_content: "Lorem 2",
            content: "Quisque ullamcorper ornare ipsum. Sed egestas porttitor lorem. Nam venenatis id libero ac aliquet. Ut semper ultricies est ac mattis. Etiam condimentum enim nec purus euismod, accumsan posuere dui bibendum. Donec augue ante, pellentesque eu nulla vel, tincidunt cursus massa. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Donec commodo feugiat quam nec scelerisque. Nullam laoreet euismod mi volutpat dignissim.",
            tags: ["Create"],
            likes: 2,
            comments: 10,
            url: "blog-detail.html",
            date: "NOV 22"
        },
        {
            image: "images/project1.jpg",
            title: "Tiêu đề bài viết 03",
            author: "Thanh",
            short_content: "Lorem 3",
            content: "Praesent eget dapibus mi. Aenean nulla turpis, dapibus sit amet elit a, tincidunt condimentum odio. Duis dolor massa, tincidunt eu porta id, pharetra ut nunc. Mauris accumsan ligula suscipit lorem pulvinar euismod non et libero. Quisque nibh ex, iaculis at vehicula sed, condimentum ac massa. Vestibulum sit amet eros a augue molestie molestie in id ante. Nullam iaculis dolor at augue varius consectetur. Morbi enim elit, congue eget dolor vel, hendrerit scelerisque diam. Proin placerat pellentesque ultricies. Nam molestie orci non elit consequat aliquam. Sed eleifend ultricies bibendum.",
            tags: ["Create", "News", "Blog"], // Creative, News, Blog
            likes: 120,
            comments: 30,
            url: "blog-detail.html",
            date: "NOV 15"
        }]
    },
    {
        month: "September 2013",
        data: [{
            image: "images/4.jpg",
            title: "Tiêu đề bài viết 03",
            author: "Thanh",
            short_content: "Lorem 3",
            content: "Pellentesque nec justo eu eros viverra hendrerit. Praesent ex turpis, aliquam et eros eu, pellentesque molestie urna. Integer vulputate mollis ligula, eget maximus odio iaculis sed. Ut sem lectus, lacinia sed orci at, viverra ultricies ante. Mauris ut erat sem. Integer viverra diam tortor, sit amet congue dui elementum fringilla. In in lacinia quam.",
            tags: ["Create", "News", "Blog"], // Creative, News, Blog
            likes: 120,
            comments: 30,
            url: "blog-detail.html",
            date: "SEP 15"
        },
        {
            image: "https://www.youtube.com/watch?v=Qhaz36TZG5Y",
            title: "Tiêu đề bài viết 03",
            author: "Thanh",
            short_content: "Lorem 3",
            content: "In et nisi semper, venenatis felis eu, molestie ligula. Pellentesque turpis lacus, volutpat id dolor ut, laoreet faucibus neque. Vivamus ornare rutrum dignissim. Nulla et lectus dapibus, convallis eros id, bibendum ipsum. Morbi molestie finibus elementum. Nam a lorem quis turpis consequat ultrices. Fusce at faucibus arcu. Vivamus faucibus viverra massa, sit amet ornare felis sollicitudin id. Donec a lacus lorem. Aliquam vitae hendrerit turpis, ut viverra sem. Nullam ipsum sapien, facilisis quis risus eget, porttitor vulputate sapien.",
            tags: ["Create", "News", "Blog"], // => "Creative, News, Blog"
            likes: 120,
            comments: 30,
            url: "blog-detail.html",
            date: "SEP 17"
        }]
    },
];