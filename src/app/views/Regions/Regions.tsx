import { Region } from '@/components/Region'

import { regionData } from './Regions.data'
import { numberToLetter } from '@/utils/numberToLetter'

export const Regions = () => {
  return (
    <div>
      {regionData.map((data, index) => (
        <Region key={data.id} dotValue={numberToLetter(index)} {...data} />
      ))}
    </div>
  )
}
