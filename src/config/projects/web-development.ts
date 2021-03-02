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
  }
};
