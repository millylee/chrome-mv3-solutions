import type { PlasmoMessaging } from "@plasmohq/messaging"

const handler: PlasmoMessaging.MessageHandler = async (_, res) => {
  console.log('[Message:KeepAlive] message received.')
}

export default handler