import type { MenuProps } from 'antd'

import { Menu } from 'antd'

import React, { useState } from 'react'

import './style/index.scss'

const items: MenuProps['items'] = [
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
]

const index: React.FC = () => {
  const [current, setCurrent] = useState('mail')

  const onClick: MenuProps['onClick'] = (e) => {
    console.log('click ', e)
    setCurrent(e.key)
  }

  return (
    <Menu
      onClick={onClick}
      selectedKeys={[current]}
      mode="horizontal"
      items={items}
      className="flex justify-center bg-#242424 text-#ccc h-70px items-center text-14px ant-menu-no-underline ant-menu-custom"
    />
  )
}

export default index
