export default {
  widgets: [
    // {
    //   name: 'sanity-tutorials',
    //   options: {
    //     templateRepoId: 'sanity-io/sanity-template-nextjs-landing-pages'
    //   }
    // },
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
                  buildHookId: '624cf8a34cd786394e98c326',
                  title: 'Sanity Studio',
                  name: 'rebike-studio',
                  apiId: 'b88cbce4-3feb-4f19-92ca-5432584183ef'
                },
                {
                  buildHookId: '624cf8a407fe9441b3ec7460',
                  title: 'Landing pages Website',
                  name: 'rebike',
                  apiId: '6dae710e-3f83-409f-99db-c5d78af3883f'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/jdtimm/rebike',
            category: 'Code'
          },
          { title: 'Frontend', value: 'https://rebike.netlify.app', category: 'apps' }
        ]
      }
    },
    {
      name: 'document-list',
      options: { title: 'Recently edited', order: '_updatedAt desc', limit: 10, types: ['page'] },
      layout: { width: 'medium' }
    },
    { name: 'project-users', layout: { height: 'auto' } }
  ]
}
