import { useState } from "react"
import QRCode from "react-qr-code"

const QrCodeGen = () => {
    const [value, setValue] = useState('')
    function handleInput(e) {
        setValue(e.target.value)
    }
  return (
      <div style={{display: "flex", flexDirection: 'column', width: '200px'}}>
          <input type="text" placeholder="Type your message" value={value} onChange={(e)=>handleInput(e)}/>
          <QRCode
            value={value}
          />
    </div>
  )
}

export default QrCodeGen
