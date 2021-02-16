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
      '/portfolio/statboosthq/highlights/contact.png',
    ]
  }
};
