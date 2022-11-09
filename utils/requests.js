const API_KEY = process.env.API_KEY

export default {
    fetchTrending: {
        title: "Trending",
        url: `/trending/allweek?api_key=${API_KEY}&language=en-US`
    },
    fetchTop_Rated: {
        title: "Top Rated",
        url: `/movie/top_rated?api_key=${API_KEY}&language=en-US`
    }
}