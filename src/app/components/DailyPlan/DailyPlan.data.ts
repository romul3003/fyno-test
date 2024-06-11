import image1 from '@/static/images/golden-circle/gullfoss-waterfall-min.jpeg'
import image2 from '@/static/images/golden-circle/reykjadalur-valley2x-min.jpeg'
import image3 from '@/static/images/golden-circle/geysir-Thermal-field-min.jpeg'
import image4 from '@/static/images/golden-circle/Thingvellir-min.jpg'

export const dailyPlanData = [
  {
    id: '1',
    places: [
      {
        title: 'Gullfoss Waterfall',
        subtitle: '1h · Iconic hike, Light traffic',
        src: image1,
        isCuratorsPick: true,
      },
      {
        title: 'Reykjadalur Valley',
        subtitle: '1h · Iconic hike, Light traffic',
        src: image2,
        isCuratorsPick: true,
      },
    ],
  },
  {
    id: '2',
    places: [
      {
        title: 'Geysir Thermal Field',
        subtitle: '1h · Iconic hike, Light traffic',
        src: image3,
        isCuratorsPick: true,
      },
      {
        title: 'Reykjadalur Valley',
        subtitle: '1h · Iconic hike, Light traffic',
        src: image4,
      },
    ],
  },
]
