const documents = [
    {
        finePrint: 'Not required for first sale of new property',
        issuer: {
            application: 'https://sfdbi.org/applying3R',
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
            contractor: 'http://www.ggtr.com/',
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
        finePrint: 'There is no entity that follows up on this requirement',
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
        finePrint: 'Not required if sewer lateral was completely replaced in the past 20 years',
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