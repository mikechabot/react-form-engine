export default {
    id: 'boolForm',
    title: 'Booleans',
    faIcon: {
        name: 'adjust'
    },
    sections: [
        {
            id: 'boolSection',
            title: 'Booleans',
            subsections: [
                {
                    id: 'boolSubsection',
                    title: 'Store Boolean Values',
                    subtitle: 'Persists as "[id]:[value:Boolean]" in the Model',
                    fields: [
                        {
                            id: 'bool1',
                            type: 'boolean',
                            title: 'Checkbox'
                        },
                        {
                            id: 'bool2',
                            type: 'boolean',
                            title: 'Radio (Inline)',
                            inline: true,
                            options: [{ title: 'Sure!' }, { title: 'No Way!' }]
                        },
                        {
                            id: 'bool3',
                            type: 'boolean',
                            title: 'Radio (Block)',
                            inline: false,
                            options: [{ title: 'Yes' }, { title: 'No' }]
                        }
                    ]
                }
            ]
        }
    ],
    decorators: {
        bool2: {
            hint: 'Option titles are configurable, but the value is always boolean.'
        }
    }
};
