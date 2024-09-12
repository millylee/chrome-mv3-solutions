import { useEffect } from 'react'
import { sendToBackground } from "@plasmohq/messaging"

const KeepAlivePage = () => {
  useEffect(() => {
    const timerId = setInterval(() => {
      sendToBackground({ name: 'keep-alive' })
    }, 25 * 1000);

    return () => clearInterval(timerId)
  }, [])

  return (
    <></>
  )
}

export default KeepAlivePage