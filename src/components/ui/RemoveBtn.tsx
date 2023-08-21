'use client'

import { ReactNode, useEffect } from "react"

export default function RemoveBtn({id,children} :{id: string, children: ReactNode}) {
    const removeTopic = async () => {
        const confirmed = confirm("Are you sure?")

        if(confirmed){
            await fetch(`http://localhost:3000/api/topics?id=${id}`,{
                method: "DELETE"
            })
        }
    }

  return (
      <button onClick={removeTopic }>
        {children}
    </button>
  )
}
