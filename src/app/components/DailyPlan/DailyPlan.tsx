'use client'

import dynamic from 'next/dynamic'
import { FC } from 'react'

import { Button } from '@/components/Button'

import useModal from '@/hooks/useModal'

import CheckListIcon from '@/static/icons/check-list.svg'
import SparkleIcon from '@/static/icons/sparkle.svg'

import { RegionTitle } from '../Region/components/RegionTitle'
import { PlaceList } from './components/PlaceList'
import { dailyPlanData } from './DailyPlan.data'

const Modal = dynamic(() => import('@/components/Modal').then((mod) => mod.Modal))

type DailyPlanProps = {
  id: string
}

export const DailyPlan: FC<DailyPlanProps> = ({ id }) => {
  const { isOpen, showModal, hideModal } = useModal()

  const daily = dailyPlanData.find((item) => item.id === id)

  return (
    <>
      <Button
        onClick={showModal}
        startIcon={<CheckListIcon />}
        className="hover:bg-neutral-500 rounded-lg"
      >
        Show daily plan
      </Button>
      <Modal isOpen={isOpen} onClose={hideModal} className="pt-0">
        <div className="decorative-line relative before:bottom-0 before:top-3">
          <RegionTitle
            icon={<CheckListIcon width={22} height={22} />}
            className="sticky top-0 z-20 !mb-0"
          >
            <div className="flex w-full items-center justify-between bg-white py-6">
              <h3 className="font-semibold">{dailyPlanData.length} days plan</h3>
              <Button startIcon={<SparkleIcon />} className="hover:bg-neutral-500 rounded-lg">
                Show highlights
              </Button>
            </div>
          </RegionTitle>

          {daily?.data.map(({ id, places, time }, index) => (
            <PlaceList key={id} places={places} dayNumber={index + 1} time={time} />
          ))}
        </div>
      </Modal>
    </>
  )
}
