export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-eleventy-blog'
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
                  buildHookId: '62de5eac1cba530fa55fbaa6',
                  title: 'Sanity Studio',
                  name: 'sanity-eleventy-blog-studio-m1yap55c',
                  apiId: '805beb67-b388-49e1-9acf-2b27d1de76e7'
                },
                {
                  buildHookId: '62de5ead8ea3651336267c4e',
                  title: 'Blog Website',
                  name: 'sanity-eleventy-blog-web-wdxzcioz',
                  apiId: '00c38489-0cf4-47ca-8faa-93dac0bc706f'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/lazio/sanity-eleventy-blog',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-eleventy-blog-web-wdxzcioz.netlify.app', category: 'apps'}
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
