

const initialBookmarks = [ 
    {
        title: "Facebook",
        description: "Connect with friends, family and other people you know. Share photos and videos, send messages and get updates.",
        image: "https://www.facebook.com/images/fb_icon_325x325.png",
        url: "https://www.facebook.com/",
        category: "Socials"
    },
    {
        title: "Youtube",
        description: "Enjoy the videos and music you love, upload original content, and share it all with friends, family, and the world on YouTube.",
        image: "https://www.youtube.com/yts/img/yt_1200-vflhSIVnY.png",
        url: "https://www.youtube.com/",
        category: 'Entertainment'
    },
    {
        title: "Google",
        description: "Search the world's information, including webpages, images, videos and more. Google has many special features to help you find exactly what you're looking for.",
        image: "https://www.google.com/images/branding/googlelogo/1x/googlelogo_white_background_color_272x92dp.png",
        url: "https://www.google.com/",
        category: "Education"
    },

    {
        title: "Amazon",
        description: "Online shopping from the earth's biggest selection of books, magazines, music, DVDs, videos, electronics, computers, software, apparel & accessories, shoes, jewelry, tools & hardware, housewares, furniture, sporting goods, beauty & personal care, groceries & just about anything else.",
        image: "https://www.amazon.com/favicon.ico",
        url: "https://www.amazon.com/",
        category: "Shopping"
    },
    {
        title: "Steam",
        description: "Steam is the ultimate destination for playing, discussing, and creating games.",
        image: "https://store.steampowered.com/favicon.ico",
        url: "https://store.steampowered.com/",
        category: "Games"
    },
    {
        title: "Spotify",
        description: "Music for everyone. Millions of songs and podcasts. No credit card needed.",
        image: "https://www.scdn.co/i/_global/favicon.png",
        url: "https://www.spotify.com/",
        category: "Music"
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

// fetching API
async function metaDataRetrieve(link, linkCategory) {
    const maxAttempt = 3;
    const apiKey = "8e3715ba4067d7eabaaa4d7441f04f84";
    const apiUrl =`https://api.linkpreview.net/?key=${apiKey}&q=${encodeURIComponent(link)}`

    try {
        const response = await fetch(apiUrl);
        
        
        const data = await response.json();

        const title = data.title || 'No title available';
        const description = data.description || 'No description available';
        const image = data.image || '/favicon.ico';
        const url = link;
        const category = linkCategory

        return { title, description, image, url, category };
    }

    catch (err) {
        console.error('Error fetching metadata: ', err);
        return { title: 'No title available', description: 'No description available', icon: '/favicon.ico' };
    }
}

// const newBookmark = metaDataRetrieve('https://google.com')

// console.log(newBookmark);

// function for adding data 
export async function addBookmark(link, linkCategory) {

    const {title, description, image, url } = await metaDataRetrieve(link);

    const newBookmark = {
        title: title,
        description: description,
        image: image,
        url: url,
        category: linkCategory
        
    }

    // if (newBookmark.title == "No title available") {

    // }
    
    const bookmarks = getBookmarks();
    bookmarks.push(newBookmark);
    localStorage.setItem('bookmarks', JSON.stringify(bookmarks));
}


// function for adding category
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


//for testing, reset function
export const resetData = () => {
    localStorage.removeItem('bookmarks');
    localStorage.removeItem('categories');
    window.location.reload()
}


// styles
export const blueButton = 'fixed bottom-36 right-20 flex justify-center items-center bg-gradient-to-br from-blue-500 via-blue-600 to-blue-700 text-sm font-medium py-2 px-4 gap-2 rounded-md cursor-pointer text-white';

export const redButton = 'text-white bg-gradient-to-r from-red-400 via-red-500 to-red-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2';

