import { create } from 'zustand'
import useUser from './modules/user'

const useStore = create(() => {
  return {
    useUser,
  }
})

export default useStore
