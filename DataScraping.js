const axios = require('axios');
const cheerio = require('cheerio');

async function scrapeUserData(username) {
    try {
        const response = await axios.get(`https://www.instagram.com/${username}`);
        const $ = cheerio.load(response.data);

        const name = $('meta[property="og:title"]').attr('content');
        const bio = $('meta[property="og:description"]').attr('content');
        const imageUrl = $('meta[property="og:image"]').attr('content');

        console.log(`Name: ${name}`);
        console.log(`Bio: ${bio}`);
        console.log(`Profile Image: ${imageUrl}`);

    } catch (error) {
        console.error('Error scraping data:', error);
    }
}

scrapeUserData('instagram_username');