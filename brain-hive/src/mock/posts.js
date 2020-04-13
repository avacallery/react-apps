const posts = [
    {
        posterName: 'Ava Callery',
        resourceAuthor: 'Paul McCartney',
        jobSkillLevel: 'Junior Developer',
        cohort: '4',
        title: 'How To Write A Song About React: Lesson 1',
        categories: ['Apple', 'react'],
        summary: 'McCartney sure knows how to write a song but I do not think he knows much about react.',
        link: 'www.google.com/search?q=PaulMcCartney',
        resourceType: 'Article',
        datePublihed: '1965-11-20:00:00:00z',
        videolength: null,
        timeToComplete: 10,
        rating: 3,
        comments: [
            {
                commenter: 'Ava', text: 'Love the Beatles.'
            },
            { commenter: 'Ringo', text: 'This is not the real Paul.' }
        ],
    },
    {
        posterName: 'Ava Callery',
        resourceAuthor: 'Shaun Pelling (The Net Ninja)',
        jobSkillLevel: 'Advanced',
        cohort: '8',
        title: 'Complete React Tutorial (& Redux) #12 - Nesting Components',
        categories: ['react', 'redux'],
        summary: "This was a quick video that efficiently shows how to nest components in a React app.",
        link: 'https://www.youtube.com/watch?v=dQublHlGgBw',
        resourceType: 'Video',
        datePublished: '2018-08-10.00:00:00z',
        videoLength: 5,
        timeToComplete: 8,
        rating: 5,
        comments: [{ commenter: "Shaun Pelling", text: 'Remember to subscribe, mate.' }]
    },
    {
        posterName: 'Arnell Milhouse',
        resourceAuthor: 'Albert Einstein',
        jobSkillLevel: 'Advanced',
        cohort: '0',
        title: 'The Universal Equation',
        categories: ['FORTRAN', 'redux'],
        summary: 'This was a great article about blending fortran and redux.',
        link: 'www.google.com/search?q=AlbertEintstein',
        resourceType: 'Article',
        datePublihed: '1943-10-03:00:00:00z',
        videolength: null,
        timeToComplete: 3,
        rating: 5,
        comments: [{
            commenter: 'Cliff', text: 'Nice post.'
        },
        { commenter: 'Ava', text: 'Einstein rules.' }
        ]
    }
];

export default posts;