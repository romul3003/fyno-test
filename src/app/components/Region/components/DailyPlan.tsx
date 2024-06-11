'use client'

import dynamic from 'next/dynamic'

import { Button } from '@/components/Button'

import CheckListIcon from '@/static/icons/check-list.svg'
import useModal from '@/hooks/useModal'

const Modal = dynamic(() => import('@/components/Modal').then((mod) => mod.Modal))

export const DailyPlan = () => {
  const { isOpen, showModal, hideModal } = useModal()

  return (
    <>
      <Button
        onClick={showModal}
        startIcon={<CheckListIcon />}
        className="rounded-lg hover:bg-neutral-100"
      >
        Show daily plan
      </Button>
      <Modal isOpen={isOpen} onClose={hideModal}>
        Hello
      </Modal>
    </>
  )
}
