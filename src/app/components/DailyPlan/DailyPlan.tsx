'use client'

import dynamic from 'next/dynamic'
import { FC } from 'react'

import { Button } from '@/components/Button'
import useModal from '@/hooks/useModal'

import CheckListIcon from '@/static/icons/check-list.svg'
import SparkleIcon from '@/static/icons/sparkle.svg'
import { Highlight } from '@/types'

import { RegionTitle } from '../Region/components/RegionTitle'
import { PlaceList } from './components/PlaceList'

const Modal = dynamic(() => import('@/components/Modal').then((mod) => mod.Modal))

type DailyPlanProps = {
  cards: Highlight[]
}

export const DailyPlan: FC<DailyPlanProps> = ({ cards }) => {
  const { isOpen, showModal, hideModal } = useModal()

  const cardsByDay = cards.reduce<{ [key: number]: Highlight[] }>((acc, card) => {
    const day = Number(card.day)

    if (!acc[Number(day)]) {
      acc[day] = []
    }
    acc[day].push(card)
    return acc
  }, {})

  const cardsByDayArray = Object.values(cardsByDay)

  return (
    <>
      <Button
        onClick={showModal}
        startIcon={<CheckListIcon />}
        className="rounded-lg hover:bg-neutral-500"
      >
        Show daily plan
      </Button>
      <Modal isOpen={isOpen} onClose={hideModal} className="pt-0">
        <div className="decorative-line relative before:bottom-0 before:top-3">
          <RegionTitle
            icon={<CheckListIcon width={22} height={22} />}
            className="group sticky top-0 z-20 !mb-0"
          >
            <div className="flex w-full items-center justify-between bg-white py-6">
              <h3 className="font-semibold">{cardsByDayArray.length} days plan</h3>
              <Button
                startIcon={<SparkleIcon />}
                onClick={hideModal}
                className="rounded-lg hover:bg-neutral-500"
              >
                Show highlights
              </Button>
            </div>
          </RegionTitle>

          {cardsByDayArray.map((card, index) => (
            <PlaceList key={index} places={card} dayNumber={index + 1} />
          ))}
        </div>
      </Modal>
    </>
  )
}
