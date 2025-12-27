// Mock Data for Frontend Development
// Used to simulate backend responses

export const mockMovies = [
    {
        id: 1,
        title: 'Avengers: Endgame',
        genre: 'Action/Sci-Fi',
        description: 'After the devastating events of Infinity War, the universe is in ruins.',
        image: 'https://via.placeholder.com/300x450?text=Avengers',
    },
    {
        id: 2,
        title: 'The Lion King',
        genre: 'Animation/Drama',
        description: 'Simba idolizes his father, King Mufasa, and takes to heart his own royal destiny.',
        image: 'https://via.placeholder.com/300x450?text=Lion+King',
    },
    {
        id: 3,
        title: 'Joker',
        genre: 'Crime/Drama',
        description: 'In Gotham City, mentally troubled comedian Arthur Fleck is disregarded and mistreated by society.',
        image: 'https://via.placeholder.com/300x450?text=Joker',
    },
];

export const mockShowtimes = {
    1: ['10:00 AM', '01:00 PM', '04:00 PM', '07:00 PM'],
    2: ['11:00 AM', '02:00 PM', '05:00 PM'],
    3: ['09:00 PM', '11:55 PM'],
};

export const mockTheaters = [
    { id: 1, name: 'PVR Cinemas', location: 'City Mall' },
    { id: 2, name: 'INOX', location: 'Downtown' },
];
