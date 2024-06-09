import { Avatar } from '@/components/Avatar'
import { Button } from '@/components/Button'

import BookmarkIcon from '@/static/icons/bookmark.svg'
import ShareIcon from '@/static/icons/share.svg'

import avatar from '@/static/images/Avatar.jpeg'

export const Highlights = () => {
  return (
    <section className="py-8">
      <div className="mb-4 flex items-center justify-between">
        <h2 className="text-3xl font-semibold">Iceland’s Highlights</h2>

        <div className="flex items-center gap-[0.625rem]">
          <Button startIcon={<BookmarkIcon />} className="rounded-md pl-1">
            Add to wishlist
          </Button>
          <Button startIcon={<ShareIcon />} className="rounded-md pl-1">
            Share
          </Button>
        </div>
      </div>

      <div className="mb-4 flex items-center gap-4">
        <Avatar src={avatar} />
        <div>
          <p className="font-semibold">Curated by Sandra</p>
          <p className="text-label-secondary text-sm">Fyno expert</p>
        </div>
      </div>

      <p>
        Welcome to Iceland, a land of breathtaking landscapes and unspoiled natural beauty. From its
        majestic waterfalls and geothermal wonders to the vibrant culture and rich history, Iceland
        promises an unforgettable adventure for every traveler.
      </p>
    </section>
  )
}
