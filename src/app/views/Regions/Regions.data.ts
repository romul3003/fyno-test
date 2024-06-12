import image1 from '@/static/images/golden-circle/gullfoss-waterfall-min.jpeg'
import image2 from '@/static/images/golden-circle/reykjadalur-valley2x-min.jpeg'
import image3 from '@/static/images/golden-circle/geysir-Thermal-field-min.jpeg'
import image4 from '@/static/images/golden-circle/frost-and-fire-hotel-min.jpg'
import image5 from '@/static/images/golden-circle/the-green-house-hotel-min.jpg'
import image6 from '@/static/images/golden-circle/inni-min.jpg'

import image7 from '@/static/images/south-and-highlands/Skogafoss-Waterfall-min.jpg'
import image8 from '@/static/images/south-and-highlands/Katla-Ice-Cave-min.jpg'
import image9 from '@/static/images/south-and-highlands/Magma-Hotel-min.jpg'
import image10 from '@/static/images/south-and-highlands/Hotel-Vik-i-Myrdal-min.jpg'

import image11 from '@/static/images/golden-circle/Thingvellir-min.jpg'

export const regionData = [
  {
    id: '1',
    itineraryId: 'top-region',
    title: 'Golden Circle Region',
    keyWords: ['Geysers', 'Waterfalls', 'Crater lakes'],
    description:
      "The Golden Circle in Iceland is a renowned tourist route that encompasses an array of stunning natural landmarks within a relatively short distance from Reykjavík. This scenic loop includes three primary attractions: Þingvellir National Park, where you can explore the rift valley created by the diverging North American and Eurasian tectonic plates and witness the site of Iceland's ancient parliament.",
    highlights: [
      {
        id: '1',
        title: 'Gullfoss Waterfall',
        subtitle: '1h · Waterfall',
        src: image1,
        isCuratorsPick: true,
        day: 1,
        duration: 1000 * 60 * 60, // 1h
      },
      {
        id: '2',
        title: 'Reykjadalur Valley',
        subtitle: '1h · Iconic hike, hot springs',
        src: image2,
        isCuratorsPick: true,
        day: 1,
        duration: 1000 * 60 * 60, // 1h
      },
      {
        id: '3',
        title: 'Geysir Thermal Field',
        subtitle: '1h · Geysers',
        src: image3,
        day: 2,
        duration: 1000 * 60 * 60, // 1h
      },
      {
        id: '4',
        title: 'Thingvellir',
        subtitle: '1h · Iconic hike · Light traffic ',
        src: image11,
        day: 2,
        duration: 1000 * 60 * 60, // 1h
      },
      {
        id: '5',
        title: 'title 5',
        subtitle: 'subtitle 5',
        src: image2,
        duration: 1000 * 60 * 60, // 1h
      },
    ],
    hotels: [
      {
        id: '1',
        title: 'Frost and Fire Hotel',
        subtitle: '$180+ · Boutique hotel',
        src: image4,
        rating: '9.1',
        isCuratorsPick: true,
      },
      {
        id: '2',
        title: 'The Greenhouse Hotel',
        subtitle: '$230+ · Luxury hotel',
        src: image5,
        rating: '9.1',
        isCuratorsPick: true,
      },
      {
        id: '3',
        title: 'Geysir Thermal Field',
        subtitle: '$130+ · Apart hotel',
        src: image6,
        rating: '9.1',
      },
      {
        id: '4',
        title: 'title 4',
        subtitle: 'subtitle 4',
        src: image1,
        rating: '9.1',
      },
      {
        id: '5',
        title: 'title 5',
        subtitle: 'subtitle 5',
        src: image2,
        rating: '9.1',
      },
    ],
  },
  {
    id: '2',
    title: 'South & Highlands',
    keyWords: ['Geysers', 'Waterfalls', 'Crater lakes'],
    description:
      'The South & Highlands of Iceland offer a breathtaking landscape of diverse natural wonders, from expansive glaciers and active volcanoes to serene waterfalls and black sand beaches. This region is also a haven for adventurers, featuring numerous hiking trails, hidden hot springs, and vast lava fields waiting to be explored. Visitors will be captivated by the blend of tranquility and raw, untamed beauty that defines this unique part of Iceland.',
    highlights: [
      {
        id: '1',
        title: 'Skógafoss Waterfall',
        subtitle: '1h · Iconic waterfall',
        src: image7,
        isCuratorsPick: true,
        day: 1,
        duration: 1000 * 60 * 60, // 1h
      },
      {
        id: '2',
        title: 'Katla Ice Cave',
        subtitle: '1h · Ice caves',
        src: image8,
        isCuratorsPick: true,
        day: 1,
        duration: 1000 * 60 * 60, // 1h
      },
      {
        id: '3',
        title: 'Fjaðrárgljúfur',
        subtitle: '1h · Geysers',
        src: image3,
        day: 2,
        duration: 1000 * 60 * 60, // 1h
      },
      {
        id: '4',
        title: 'title 4',
        subtitle: 'subtitle 4',
        src: image1,
        day: 2,
        duration: 1000 * 60 * 60, // 1h
      },
      {
        id: '5',
        title: 'title 5',
        subtitle: 'subtitle 5',
        src: image2,
        duration: 1000 * 60 * 60, // 1h
      },
    ],
    hotels: [
      {
        id: '1',
        title: 'Magma Hotel',
        subtitle: '$250+ · Boutique hotel',
        src: image9,
        rating: '9.1',
        isCuratorsPick: true,
      },
      {
        id: '2',
        title: 'Hotel Vík í Mýrdal',
        subtitle: '$150+ · Luxury hotel',
        src: image10,
        rating: '9.1',
        isCuratorsPick: true,
      },
      {
        id: '3',
        title: 'Hótel Kría',
        subtitle: '$130+ · Apart hotel',
        src: image6,
        rating: '9.1',
      },
      {
        id: '4',
        title: 'title 4',
        subtitle: 'subtitle 4',
        src: image1,
        rating: '9.1',
      },
      {
        id: '5',
        title: 'title 5',
        subtitle: 'subtitle 5',
        src: image2,
        rating: '9.1',
      },
    ],
  },
]
