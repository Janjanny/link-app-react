const initialBookmarks = [ 
    {
        title: "Facebook",
        description: "Connect with friends, family and other people you know. Share photos and videos, send messages and get updates.",
        image: "https://www.facebook.com/images/fb_icon_325x325.png",
        url: "https://www.facebook.com/"
    },
    {
        title: "Youtube",
        description: "Enjoy the videos and music you love, upload original content, and share it all with friends, family, and the world on YouTube.",
        image: "https://www.youtube.com/yts/img/yt_1200-vflhSIVnY.png",
        url: "https://www.youtube.com/"
    },
    {
        title: "Google",
        description: "Search the world's information, including webpages, images, videos and more. Google has many special features to help you find exactly what you're looking for.",
        image: "https://www.google.com/images/branding/googlelogo/1x/googlelogo_white_background_color_272x92dp.png",
        url: "https://www.google.com/"
    }
]

const initialCategories = ["All", "Socials", "Personal", "Education", "Shopping", "Games", "Music"];

// save to localStorage if not present
if(!localStorage.getItem('bookmarks')) {
    localStorage.setItem('bookmarks', JSON.stringify(initialBookmarks))
}

if(!localStorage.getItem('categories')) {
    localStorage.setItem('categories', JSON.stringify(initialCategories))
}

// functions for getting data
export function getBookmarks() {
    return JSON.parse(localStorage.getItem('bookmarks') || [])
}

export function getCategories() {
    return JSON.parse(localStorage.getItem('categories') || [])
}

// function for adding data 
export function addBookmark(bookmark) {
    const bookmarks = getBookmarks();
    bookmarks.push(bookmark);
    localStorage.setItem('bookmarks', JSON.stringify(bookmarks));
}

export function addCategory(category) {
    const categories = getCategories();
    categories.push(category);
    localStorage.setItem('categories', JSON.stringify(categories));
}

//function for modifying the data 
export function removeBookmark(index) {
    const bookmarks = getBookmarks();
    bookmarks.splice(index, 1);
    localStorage.setItem('bookmarks', JSON.stringify(bookmarks))
}

export function removeCategory(index) {
    const categories = getCategories();
    categories.splice(index, 1);
    localStorage.setItem('categories', JSON.stringify(categories))
}

// localStorage.removeItem('bookmarks');
// localStorage.removeItem('categories');



