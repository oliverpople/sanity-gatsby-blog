export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gatsby-blog'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5d1e76926455af2ceaf6ffc4',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-blog-studio-6n6z6if9',
                  apiId: '409c41b3-862f-4f40-98c4-41b17e9d1f05'
                },
                {
                  buildHookId: '5d1e7691a461181cf623785f',
                  title: 'Blog Website',
                  name: 'sanity-gatsby-blog-web-su6rntdg',
                  apiId: '26e4cb34-3446-4dee-a61d-9720272b0f4e'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/oliverpople/sanity-gatsby-blog',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-gatsby-blog-web-su6rntdg.netlify.com', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
