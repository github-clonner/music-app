export const Artist = rawArtist => ({
    id: rawArtist.mbid,
    name: rawArtist.name,
    url: rawArtist.url,
    listeners: rawArtist.listeners,
    images: rawArtist.image.find(image => image.size === 'medium')['#text']
});