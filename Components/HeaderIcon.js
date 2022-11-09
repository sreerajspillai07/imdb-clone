import React from 'react'

export default function HeaderIcon({Icon,title}) {
  return (
      <div className="mx-4 flex flex-col cursor-pointer hover:text-yellow-400 active:text-yellow-400">
          <Icon className="h-8"/>
          <p className="my-2">{ title}</p>
    </div>
  )
}
