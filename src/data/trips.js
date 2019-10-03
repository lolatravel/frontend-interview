export const tripsData = [
    {
        id: '1235324321',
        name: 'San Francisco Trip',
        dates: 'Sun, 5/21 - Sun, 5/24',
        nights: 3,
        bookedBy: {
            id: '124123123123',
            firstName: 'Jamie',
            lastName: null
        },
        image:
            'https://d2h1f73ho9g5gq.cloudfront.net/GOM_4b2zHlO6tWb4K-T3A629sNE=/300x0/filters:max_bytes(200000)/https://defn81iarepzg.cloudfront.net/stock_travel/USA/CA/San_Francisco/shutterstock_273811460.jpg',
        travelers: [
            {
                id: '124123123123',
                firstName: 'Jamie',
                lastName: null
            },
            {
                id: '45743252346',
                firstName: 'Kara',
                lastName: 'Waters'
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
        dates: 'Sun, 8/21 - Sun, 8/28',
        nights: 7,
        bookedBy: {
            id: '45743252346',
            firstName: 'Kara',
            lastName: 'Waters'
        },
        image:
            'https://d2h1f73ho9g5gq.cloudfront.net/UxjVC4xTl8yloDih173-kVWQYKc=/300x0/filters:max_bytes(200000)/https://defn81iarepzg.cloudfront.net/stock_travel/USA/WA/Seattle/shutterstock_182447111.jpg',
        travelers: [
            {
                id: '1231234112',
                firstName: 'Alicia',
                lastName: 'Perez'
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
        dates: 'Sun, 6/21 - Sun, 6/27',
        nights: 6,
        bookedBy: {
            id: '45743252346',
            firstName: 'Kara',
            lastName: 'Waters'
        },
        travelers: [
            {
                id: '45743252346',
                firstName: 'Kara',
                lastName: 'Waters'
            },
            {
                id: '1231234112',
                firstName: 'Alicia',
                lastName: 'Perez'
            },
            {
                id: '213413256t324',
                firstName: 'Patrice',
                lastName: 'Bergeron'
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
    }
];
