export const trips = [
    {
        id: '1235324321',
        name: 'San Francisco Trip',
        dates: 'Sun, 5/21 - Sun, 5/24',
        nights: 3,
        bookedBy: 'Jamie',
        travelers: [
            {
                firstName: 'Jamie',
                lastName: 'Waters'
            },
            {
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
        bookedBy: 'Jane',
        travelers: [
            {
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
        bookedBy: 'Jamie',
        travelers: [
            {
                firstName: 'Patrice',
                lastName: 'Bergeron'
            },
            {
                firstName: 'Tom',
                lastName: 'Brady'
            },
            {
                firstName: 'Kemba',
                lastName: 'Walker'
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
