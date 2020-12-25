export default {
  widgets: [
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'auto'}
    },
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Deploy after publishing new content to go live',
              sites: [
                {
                  buildHookId: '5e231ba5e6ddb672cafff5e0',
                  title: 'Edwinteaches.com',
                  name: 'et-s-g-site',
                  apiId: '2d35f1b0-8b23-4c58-b154-867f898823ab'
                }
              ]
            }
          },
          {name: 'structure-menu'}
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/etuned/et-s-g-site',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://www.edwinteaches.com', category: 'apps'}
        ]
      }
    }
  ]
}
