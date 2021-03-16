export default {
  widgets: [
    { name: 'structure-menu' },
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
                  buildHookId: '6050a7c3f51df5bd04866122',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-blog-studio-r1b51biz',
                  apiId: '689f1d32-c0ba-4151-ac55-dd4149bb43ea'
                },
                {
                  buildHookId: '6050a7c3432356b4db9e4024',
                  title: 'Blog Website',
                  name: 'sanity-gatsby-blog-web-ih2m9z6z',
                  apiId: 'a284a1f4-0925-436b-9037-627bcf260eeb'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/vinayg-cp/sanity-gatsby-blog',
            category: 'Code'
          },
          { title: 'Frontend', value: 'https://sanity-gatsby-blog-web-ih2m9z6z.netlify.app', category: 'apps' }
        ]
      }
    },
    { name: 'project-users', layout: { height: 'auto' } },
    {
      name: 'document-list',
      options: { title: 'Recent blog posts', order: '_createdAt desc', types: ['post'] },
      layout: { width: 'medium' }
    }
  ]
}
