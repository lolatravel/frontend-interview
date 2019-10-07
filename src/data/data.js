export const tripsData = [
    {
        id: '1235324321',
        name: 'San Francisco Trip',
        startDate: 'Sun, 5/21',
        endDate: 'Sun, 5/24',
        bookedBy: {
            id: '124123123123',
            firstName: 'Jamie',
            lastName: 'Waters'
        },
        image:
            'https://d2h1f73ho9g5gq.cloudfront.net/GOM_4b2zHlO6tWb4K-T3A629sNE=/300x0/filters:max_bytes(200000)/https://defn81iarepzg.cloudfront.net/stock_travel/USA/CA/San_Francisco/shutterstock_273811460.jpg',
        travelers: [
            {
                id: '124123123123',
                firstName: 'Jamie',
                lastName: 'Waters'
            },
            {
                id: '45743252346',
                firstName: 'Kara',
                lastName: null
            }
        ],
        bookings: [
            {
                type: 'flight',
                airline: 'Delta'
            },
            {
                type: 'hotel',
                hotelName: 'Marriott Downtown'
            }
        ]
    },
    {
        id: '54352345234',
        name: 'Seattle Trip',
        startDate: 'Sun, 8/21',
        endDate: 'Sun, 8/28',
        bookedBy: {
            id: '1345135123',
            firstName: 'Collin',
            lastName: 'Mckinney'
        },
        image:
            'https://d2h1f73ho9g5gq.cloudfront.net/UxjVC4xTl8yloDih173-kVWQYKc=/300x0/filters:max_bytes(200000)/https://defn81iarepzg.cloudfront.net/stock_travel/USA/WA/Seattle/shutterstock_182447111.jpg',
        travelers: [
            {
                id: '124123123123',
                firstName: 'Jamie',
                lastName: 'Waters'
            }
        ],
        bookings: [
            {
                type: 'flight',
                airline: 'JetBlue'
            },
            {
                type: 'hotel',
                hotelName: 'Marriott Downtown'
            }
        ]
    },
    {
        id: '1235324321',
        name: 'London Trip',
        startDate: 'Sun, 6/21',
        endDate: 'Sun, 6/27',
        bookedBy: {
            id: '124123123123',
            firstName: 'Jamie',
            lastName: 'Waters'
        },
        travelers: [
            {
                id: '1231234112',
                firstName: 'Alicia',
                lastName: 'Perez'
            },
            {
                id: '1345135123',
                firstName: 'Collin',
                lastName: 'Mckinney'
            }
        ],
        bookings: [
            {
                type: 'flight',
                airline: 'Delta'
            },
            {
                type: 'hotel',
                hotelName: 'Marriott Downtown'
            }
        ]
    },
    {
        id: '456345235',
        name: 'Barcelona Trip',
        startDate: 'Mon, 7/14',
        endDate: 'Mon, 7/21',
        bookedBy: {
            id: '45743252346',
            firstName: 'Nick',
            lastName: 'Bond'
        },
        image:
            'https://d2h1f73ho9g5gq.cloudfront.net/_V-VAfnu72hDUZzfzjdIFJ56nFs=/300x0/filters:max_bytes(200000)/https://defn81iarepzg.cloudfront.net/stock_travel/Spain/Barcelona/shutterstock_331844231.jpg',
        travelers: [
            {
                id: '652623451345',
                firstName: 'Nick',
                lastName: 'Bond'
            },
            {
                id: '5678678457645',
                firstName: 'Jake',
                lastName: 'Jones'
            },
            {
                id: '1345135123',
                firstName: 'Collin',
                lastName: 'Mckinney'
            },
            {
                id: '124123123123',
                firstName: 'Jamie',
                lastName: 'Waters'
            }
        ],
        bookings: [
            {
                type: 'flight',
                airline: 'American Airlines'
            },
            {
                type: 'hotel',
                hotelName: 'Marriott Downtown'
            }
        ]
    }
];

export const currentUser = {
    id: '657354624562456542',
    firstName: 'Current',
    lastName: 'User'
};
