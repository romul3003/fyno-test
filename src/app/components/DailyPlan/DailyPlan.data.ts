import image1 from '@/static/images/golden-circle/gullfoss-waterfall-min.jpeg'
import image2 from '@/static/images/golden-circle/reykjadalur-valley2x-min.jpeg'
import image3 from '@/static/images/golden-circle/geysir-Thermal-field-min.jpeg'
import image4 from '@/static/images/golden-circle/Thingvellir-min.jpg'

import image5 from '@/static/images/south-and-highlands/Skogafoss-Waterfall-min.jpg'
import image6 from '@/static/images/south-and-highlands/Katla-Ice-Cave-min.jpg'
import image7 from '@/static/images/south-and-highlands/Hotel-Vik-i-Myrdal-min.jpg'

export const dailyPlanData = [
  {
    id: '1',
    data: [
      {
        id: '100',
        time: '40m',
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
        id: '101',
        time: '40m',
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
    ],
  },
  {
    id: '2',
    data: [
      {
        id: '100',
        time: '40m',
        places: [
          {
            title: 'Skógafoss Waterfall',
            subtitle: '1h · Iconic hike, Light traffic',
            src: image5,
            isCuratorsPick: true,
          },
          {
            title: 'Katla Ice Cave',
            subtitle: '1h · Ice caves',
            src: image6,
            isCuratorsPick: true,
          },
        ],
      },
      {
        id: '101',
        time: '40m',
        places: [
          {
            title: 'Fjaðrárgljúfur ',
            subtitle: '1h · Iconic hike, Light traffic',
            src: image3,
            isCuratorsPick: true,
          },
          {
            title: 'Reykjadalur Valley',
            subtitle: '1h · Iconic hike, Light traffic',
            src: image7,
          },
        ],
      },
    ],
  },
]
