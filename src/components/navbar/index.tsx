import { Button, Input, Menu, type MenuProps } from 'antd'

import React, { useState } from 'react'

import { SearchOutlined } from '@ant-design/icons'

import SubNavbar from '../sub-navbar'

import useStore from '@/store'

import Login from '@/views/login'

import './style/index.scss'

const index: React.FC = () => {
  const [current, setCurrent] = useState('discover')
  const { useUser } = useStore()
  const userStore = useUser()

  const showModal = () => {
    userStore.handlerIsModalOpen(true)
  }

  const onClick: MenuProps['onClick'] = (e) => {
    console.log('click ', e)
    setCurrent(e.key)
  }
  const items: MenuProps['items'] = [
    {
      label: <img src="/src/assets/logo.png" className="pt-8px" />,
      key: 'logo',
    },
    {
      label: '发现音乐',
      key: 'discover',
    },
    {
      label: '我的音乐',
      key: 'mine',
    },
    {
      label: '关注',
      key: 'follow',
    },
    {
      label: '商城',
      key: 'shop',
    },
    {
      label: '音乐人',
      key: 'musician',
    },
    {
      label: '下载客户端',
      key: 'download',
    },
    {
      label: (
        <li className="h-70px leading-70px flex items-center w-158px rounded-32px">
          <Input
            prefix={<SearchOutlined />}
            placeholder="音乐/视频/电台/用户"
            className="bg-white w-158px rounded-32px"
          />
        </li>
      ),
      key: 'search',
    },
    {
      label: (
        <li className="h-70px leading-70px flex items-center rounded-20px w-90px h-32px">
          <Button className="rounded-20px">创作者中心</Button>
        </li>
      ),
      key: 'creator',
    },
    {
      label: (
        <li onClick={showModal}>
          <span>登录</span>
        </li>
      ),
      key: 'login',
    },
  ]

  return (
    <>
      <Menu
        onClick={onClick}
        selectedKeys={[current]}
        mode="horizontal"
        items={items}
        className="flex justify-center bg-#242424 text-#ccc h-70px items-center text-14px ant-menu-no-underline ant-menu-custom"
      />
      <SubNavbar />
      <Login />
    </>
  )
}

export default index
