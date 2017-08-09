export class LastFmApi {
    constructor(http, apiEndpoint, apiKey) {
        this._http = http;
        this._host = apiEndpoint;
        this._apiKey= apiKey;
    }

    getArtists = ({ artist = 'the', page, limit }) => {
        let requestUrl = `${this._host}/?method=artist.search&api_key=${this._apiKey}&artist=${artist}&format=json`;

        page = !!page ? `&page=${page}` : '';
        limit = !!limit ? `&limit=${page}` : '';

        requestUrl = requestUrl + page + limit;

        return this._http.get(requestUrl).then(response => response.data.results.artistmatches.artist);
    }
}