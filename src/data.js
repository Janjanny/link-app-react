const initialBookmarks = [ 
    {
    name: 'Facebook', 
    link: 'https://www.facebook.com/', 
    desc: 'Create an account or log into Facebook. '},

    {
    name: 'Youtube', 
    link: 'https://www.youtube.com/', 
    desc: 'Share your videos with friends, family, and the world.'},

    {
    name: 'Youtube', 
    link: 'https://www.twitter.com/?lang=en', 
    desc: 'From breaking news and entertainment to sports and politics, get the full story with all the live commentary.'},
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


export {bookmarks, categoryList};