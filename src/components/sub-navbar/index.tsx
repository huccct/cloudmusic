import { Menu, MenuProps } from 'antd'

import { useState } from 'react'

import './style/index.scss'

const items: MenuProps['items'] = [
  {
    label: '推荐',
    key: 'recommend',
  },
  {
    label: '排行榜',
    key: 'ranking',
  },
  {
    label: '歌单',
    key: 'songlist',
  },
  {
    label: '主播电台',
    key: 'broadcasting',
  },
  {
    label: '歌手',
    key: 'singer',
  },
  {
    label: '新碟上架',
    key: 'new',
  },
]

export default function index() {
  const [current, setCurrent] = useState('recommend')

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
      className="flex justify-center bg-#c20c0c ant-menu-no-underline ant-menu-custom2 py-10px pr-90px"
    />
  )
}
