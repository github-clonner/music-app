export const Artist = rawArtist => ({
    id: rawArtist.mbid,
    name: rawArtist.name,
    url: rawArtist.url,
    listeners: rawArtist.listeners,
    image: rawArtist.image.find(image => image.size === 'mega')['#text']
});