// user.ts
import { reqGenerateQRKey } from '@/api/user'
import { create } from 'zustand'

type State = {
  isModalOpen: boolean
}

type Actions = {
  handlerIsModalOpen: (status: boolean) => void
  generateQRCodeKey: () => void
}

const useUser = create<State & Actions>((set) => ({
  isModalOpen: false,
  // 设置模态框状态
  handlerIsModalOpen: (status: boolean) =>
    set((state) => ({ isModalOpen: (state.isModalOpen = status) })),
  // 二维码key生成
  generateQRCodeKey: async () => {
    const res = await reqGenerateQRKey()
    console.log(res)
  },
}))

export default useUser
