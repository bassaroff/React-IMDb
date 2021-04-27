const API_KEY = '5aaaf9174cb696d6721682d0e041661d';
const API_BASE='https://api.themoviedb.org/3';

const basicFetch = async (endpoint) => {
    const req = await fetch(`${API_BASE}${endpoint}`)
    const json = await req.json();
    return json;
}
export default{
    getHomeList: async()=>{
        return[
            {
                slug:'originals',
                title:'Originals on TMDb',
                items:await basicFetch(`/discover/tv?with_networl=213&api_key=${API_KEY}`)
            },
            {
                slug:'trending',
                title:'Recommendations',
                items:await basicFetch(`/trending/all/week?api_key=${API_KEY}`)
            },
            {
                slug:'toprated',
                title:'Top rated',
                items:await basicFetch(`/movie/top_rated?api_key=${API_KEY}`)
            },
            {
                slug:'action',
                title:'Action',
                items:await basicFetch(`/discover/movie?with_genres=28&api_key=${API_KEY}`)
            },
            {
                slug:'comedy',
                title:'Comedy',
                items:await basicFetch(`/discover/movie?with_genres=35&api_key=${API_KEY}`)
            },
            {
                slug:'horror',
                title:'Horror',
                items:await basicFetch(`/discover/movie?with_genres=27&api_key=${API_KEY}`)
            },
            {
                slug:'romance',
                title:'Romance',
                items:await basicFetch(`/discover/movie?with_genres=10749&api_key=${API_KEY}`)
            },
            {
                slug:'documentary',
                title:'Documentary',
                items:await basicFetch(`/discover/movie?with_genres=99&api_key=${API_KEY}`)
            },
        ]
    },
    getMovieInfo: async(movieId, type) => {
        let info = {};
        if(movieId){
            switch(type){
                case 'movie':
                    info = await basicFetch(`/movie/${movieId}?api_key=${API_KEY}`);
                    // if(info.success===false){
                    //     info = await basicFetch(`/tv/${movieId}?api_key=${API_KEY}`);
                    // }
                    break;
                case 'tv':
                    info = await basicFetch(`/tv/${movieId}?api_key=${API_KEY}`);
                    // if(info.success===false){
                    //     info = await basicFetch(`/movie/${movieId}?api_key=${API_KEY}`);
                    // }
                    break;
                default:
                    info = null;
                    break;
            }
        }
        return info;
    },
    getCompanyInfo: async(company_id) =>{
        let company = await basicFetch(`/company/${company_id}?api_key=${API_KEY}`)
        return JSON.stringify(company)
    },
    getTopRatedMovies: async() => {
        let top = await basicFetch(`/movie/top_rated?api_key=${API_KEY}`);
        return top;
    },
    getCredits: async(id) => {
        let credits = await basicFetch(`/movie/${id}/credits?api_key=${API_KEY}`)
        return credits
    },
    getSimilar: async(id) => {
        let similar = await basicFetch(`/movie/${id}/similar?api_key=${API_KEY}`)
        return similar
    },
    getReviews: async(id) => {
        let reviews = await basicFetch(`/movie/${id}/reviews?api_key=${API_KEY}`)
        return reviews
    },
}