export async function getLeftMenuData() {
  return [
    {
      title: 'Node Stats',
      key: 'stats',
      url: '/stats',
      icon: 'lnr lnr-chart-bars',
    },
    {
      title: 'Data',
      key: 'data',
      url: '/data',
      icon: 'lnr lnr-database',
    }
  ]
}

export async function getTopMenuData() {
  return []
}
