import useStore from '@/store'
import { Modal } from 'antd'

import { useEffect } from 'react'

export default function index() {
  const { useUser } = useStore()
  const userStore = useUser()
  useEffect(() => {
    userStore.generateQRCodeKey()
  }, [])
  const handleOk = () => {
    userStore.handlerIsModalOpen(false)
  }

  const handleCancel = () => {
    userStore.handlerIsModalOpen(false)
  }
  return (
    <Modal
      title="Basic Modal"
      open={userStore.isModalOpen}
      onOk={handleOk}
      onCancel={handleCancel}
    >
      <p>Some contents...</p>
      <p>Some contents...</p>
      <p>Some contents...</p>
    </Modal>
  )
}
