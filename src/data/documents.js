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
    {
        exceptions: [
            {
                description: 'Sewer lateral was completely replaced in the past 20 years',
            },
            {
                description: 'A clean inpection report from the past 7 years',
            },
        ],
        issuer: {
            cost: '$400',
            name: 'East Bay Municipal Utility District (EBMUD)',
            time: '14 business days',
        },
        name: {
            primary: 'PSL',
            secondary: 'Private Sewer Lateral Inspection',
        },
        requiredBy: {
            frequency: 'common',
            name: 'Oakland',
            type: 'City',
        },
    },
    {
        issuer: {
            cost: '$85',
            name: 'Oakland Department of Transportation',
            time: '3 business days',
        },
        name: {
            primary: 'Sidewalk Certification',
        },
        requiredBy: {
            frequency: 'common',
            name: 'Oakland',
            type: 'City',
        },
    },
]

export default documents