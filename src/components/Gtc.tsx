"use client"

import Image from "next/image"

import { FaPhotoVideo } from "react-icons/fa"
import { MdRoomPreferences } from "react-icons/md"
import { ImFilm } from "react-icons/im"
import { RxGlobe } from "react-icons/rx"
import { FaCalendarAlt } from "react-icons/fa"
import { TbLicense } from "react-icons/tb"
import { Shield } from "lucide-react"
import { FaLightbulb } from "react-icons/fa6"
import { MdOutlineElectricCar } from "react-icons/md"
import { GiTurnstile } from "react-icons/gi"
import { PiThermometerCold } from "react-icons/pi"

export default function Gtc() {
  return (
    <div className="min-h-screen bg-black p-4">
      <div className="mx-auto flex flex-col gap-6 md:flex-row max-w-7xl">
        <aside className="w-full rounded-3xl bg-white p-6 shadow-lg md:w-1/3">
          <a
            href="http://10.2.1.122:8100/index.html#!/login"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 rounded-2xl border border-slate-200 bg-slate-50 px-4 py-4 text-blue-600 hover:bg-white hover:text-slate-900 transition"
          >
            <Shield className="size-10 text-blue-500" />
            <span className="text-xl font-semibold">SEGURANÇA</span>
          </a>
          <a
            href="https://evmanager.efimob.com/login"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 rounded-2xl border border-slate-200 bg-slate-50 px-4 py-4 text-blue-600 hover:bg-white hover:text-slate-900 transition"
          >
            <FaLightbulb className="size-10 text-blue-500" />
            <span className="text-xl font-semibold">LUZ</span>
          </a>

          <a
            href="https://mytho.oceanario.pt:5005/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 rounded-2xl border border-slate-200 bg-slate-50 px-4 py-4 text-blue-600 hover:bg-white hover:text-slate-900 transition"
          >
            <PiThermometerCold className="size-10 text-blue-500" />
            <span className="text-xl font-semibold">AR CONDICIONADO</span>
          </a>

          <a
            href="https://alvov3.primaveraspace.com/identity/Account/Login?ReturnUrl=%2Fidentity%2Fconnect%2Fauthorize%2Fcallback%3Fclient_id%3DOmniaWebApp%26redirect_uri%3Dhttps%253A%252F%252Falvov3.primaveraspace.com%252FOE_ODLFOATLC%252FPRD%252Fauth%26response_type%3Dcode%26scope%3Dopenid%2520email%2520api%2520offline_access%26state%3Dbc59d9aa91124013b4822853f57c4526%26code_challenge%3DGb7xMfk6mAaAEbmyccxpnbeL--YcodnCP6VMlOgPy5A%26code_challenge_method%3DS256%26response_mode%3Dquery"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 rounded-2xl border border-slate-200 bg-slate-50 px-4 py-4 text-blue-600 hover:bg-white hover:text-slate-900 transition"
          >
            <GiTurnstile className="size-10 text-blue-500" />
            <span className="text-xl font-semibold">CATRACA</span>
          </a>

          <a
            href="http://localhost:5173/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 rounded-2xl border border-slate-200 bg-slate-50 px-4 py-4 text-blue-600 hover:bg-white hover:text-slate-900 transition"
          >
            <FaCalendarAlt className="size-10 text-blue-500" />
            <span className="text-xl font-semibold">CALENDÁRIO</span>
          </a>

          <a
            href="https://admin.exchange.microsoft.com/#/resources/:/ResourceDetails/5a851767-a2cb-4786-bf7f-e44ebfe879c8"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 rounded-2xl border border-slate-200 bg-slate-50 px-4 py-4 text-blue-600 hover:bg-white hover:text-slate-900 transition"
          >
            <MdRoomPreferences className="size-10 text-blue-500" />
            <span className="text-xl font-semibold">SALAS DE REUNIÃO</span>
          </a>
          <a
            href="https://admin.cloud.microsoft/?#/licenses"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 rounded-2xl border border-slate-200 bg-slate-50 px-4 py-4 text-blue-600 hover:bg-white hover:text-slate-900 transition"
          >
            <TbLicense className="size-10 text-blue-500" />
            <span className="text-xl font-semibold">LICENÇAS</span>
          </a>

          <a
            href="https://admin.exchange.microsoft.com/#/resources/:/ResourceDetails/5a851767-a2cb-4786-bf7f-e44ebfe879c8"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 rounded-2xl border border-slate-200 bg-slate-50 px-4 py-4 text-blue-600 hover:bg-white hover:text-slate-900 transition"
          >
            <FaPhotoVideo className="size-10 text-blue-500" />
            <span className="text-xl font-semibold">GALERIA</span>
          </a>
          <a
            href="http://localhost:5173/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 rounded-2xl border border-slate-200 bg-slate-50 px-4 py-4 text-blue-600 hover:bg-white hover:text-slate-900 transition"
          >
            <ImFilm className="size-10 text-blue-500" />
            <span className="text-xl font-semibold">VIDEO</span>
          </a>
        </aside>

        <main className="flex w-full items-center justify-center rounded-3xl bg-white p-6 shadow-lg md:w-2/3">
          <div className="w-full max-w-4xl text-center">
            <div className="flex items-center justify-center">
              <Image
                color="black"
                className="flex"
                src="/Logo.png"
                alt="Oceanario logo"
                width={400}
                height={80}
                priority
              />
            </div>
            <div className="relative overflow-hidden rounded-3xl">
              <video
                autoPlay
                loop
                muted
                playsInline
                className="mx-auto h-auto w-full max-w-full rounded-3xl object-cover"
              >
                <source src="/IMAGENS WEBSITE 13.mp4" type="video/mp4" />
                Seu navegador não suporta vídeos.
              </video>
            </div>
          </div>
        </main>
      </div>
    </div>
  )
}
