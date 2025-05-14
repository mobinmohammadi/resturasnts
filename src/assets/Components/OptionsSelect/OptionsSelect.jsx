import React, { useState } from 'react'



export default function OptionsSelect({title}) {

    const [province , setProvince] = useState("")
    
  return (
    <option onClick={() => setProvince(title)} value={title}>{title}</option>
  )
}
