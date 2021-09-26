const documents = [
    {
        exceptions: [
            {
                description: 'First sale of property',
            },
        ],
        issuer: {
            cost: '$148',
            name: 'San Francisco Department of Building Inspection',
            time: '9 business days',
        },
        name: {
            primary: '3R',
            secondary: 'Report of Residential Building Record',
        },
        requiredBy: {
            frequency: 'common',
            name: 'San Francisco',
            type: 'City & County',
        },
    },
    {
        addOns: [
            {
                description: 'Underground Storage Tanks must be removed prior to closing escrow'
            },
        ],
        issuer: {
            cost: '$80',
            name: 'Several inspectors',
            time: '3 business days',
        },
        name: {
            primary: 'Bureau of Fire Prevention Permit',
        },
        requiredBy: {
            frequency: 'sometimes',
            name: 'San Francisco',
            type: 'City & County',
        },
    },
    {
        exceptions: [
            {
                description: 'Not enforced by City',
                frequency: 'common',
            },
        ],
        issuer: {
            cost: '$123',
            name: 'Several approved inspectors',
            time: '3 business days',
        },
        name: {
            primary: 'Energy and Water Conservation Certificate',
        },
        requiredBy: {
            frequency: 'rare',
            name: 'San Francisco',
            type: 'City & County',
        },
    },
]

export default documents