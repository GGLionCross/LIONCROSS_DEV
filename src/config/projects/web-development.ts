export default {
  statboosthq: {
    name: 'statboosthq',
    title: 'statboosthq.com',
    url: 'https://www.statboosthq.com/',
    tags: ['Website Manager', 'Wix'],
    previewSrc: '/portfolio/statboosthq/thumbnail.png',
    dialogComponent: () =>
      import('components/project/dialogs/StatboostDialog.vue'),
    highlightSrcs: [
      '/portfolio/statboosthq/highlights/home-1.png',
      '/portfolio/statboosthq/highlights/home-2.png',
      '/portfolio/statboosthq/highlights/home-3.png',
      '/portfolio/statboosthq/highlights/home-4.png',
      '/portfolio/statboosthq/highlights/shop.png',
      '/portfolio/statboosthq/highlights/about.png',
      '/portfolio/statboosthq/highlights/contact.png'
    ],
    responsibilities: [
      'Developed website for desktop and mobile',
      'Organize media files and database collections',
      'Utilize Corvid API to implement unique filters',
      'Troubleshoot visual and functional issues'
    ]
  },
  myhhub: {
    name: 'myhhub',
    title: 'myhhub.com',
    url: '',
    tags: ['Vue', 'Quasar', 'JavaScript', 'PHP', 'SQL', 'jQuery'],
    previewSrc: '', // '/portfolio/myhhub/thumbnail.png',
    dialogComponent: () =>
      import('components/project/dialogs/StatboostDialog.vue'),
    highlightSrcs: [
      // '/portfolio/myhhub/highlights/login.png',
      // '/portfolio/myhhub/highlights/claims_listing.png',
      // '/portfolio/myhhub/highlights/edit_office.png',
      // '/portfolio/myhhub/highlights/add_treatment.png',
      // '/portfolio/myhhub/highlights/patient_search.png',
      // '/portfolio/myhhub/highlights/ledger.png',
      // '/portfolio/myhhub/highlights/test_project.png'
    ],
    responsibilities: [
      'Developed listing pages and popups',
      'Developed patient ledger and patient search',
      'Manually tested product and wrote automation test scripts',
      'Created back-end classes with filters to query data'
    ]
  }
};
