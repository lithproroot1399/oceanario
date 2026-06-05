// biome-ignore assist/source/organizeImports: <explanation>
import { GiPadlockOpen } from "react-icons/gi"
import { FcDocument } from "react-icons/fc"

export default function Vpn() {
  return (
    <div className="flex-col align-items-center justify-center gap-y-8 m-8">
      <p className="text-blue-500 text-2xl font-semibold">
        SIGA O PASSO A PASSO PARA UTILIZAR A VPN
      </p>
      <div className="flex-col items-center gap-4">
        <h1>VPN</h1>
        <GiPadlockOpen className="size-10 text-yellow-500" />
        <span>Cliente</span>
        <FcDocument className="size-10 text-blue-500" />
        <h1>DOCUMENTAÇÃO</h1>
      </div>
    </div>
  )
}
