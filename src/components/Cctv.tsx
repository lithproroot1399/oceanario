"use client"

// biome-ignore assist/source/organizeImports: <explanation>
import Image from "next/image"
import { PiSecurityCameraBold } from "react-icons/pi"
import { FaList } from "react-icons/fa"
import { BsDiagram3Fill } from "react-icons/bs"
import { RiVideoLine } from "react-icons/ri"
import { MdOutlineNotificationsActive } from "react-icons/md"
import { RiContactsBookLine } from "react-icons/ri"

const cctvLinks = [
  {
    title: "SEGURANÇA",
    href: "http://10.2.1.122:8100/index.html#!/login",
    icon: PiSecurityCameraBold,
  },
  {
    title: "IP LIST",
    href: "https://evmanager.efimob.com/login",
    icon: FaList,
  },
  {
    title: "DIAGRAM CAM'S",
    href: "https://mytho.oceanario.pt:5005/",
    icon: BsDiagram3Fill,
  },
  {
    title: "GRAVAÇÕES",
    href: "http://localhost:5173/",
    icon: RiVideoLine,
  },
  {
    title: "ALERTAS",
    href: "http://localhost:5173/",
    icon: MdOutlineNotificationsActive,
  },
  {
    title: "CONTACTOS",
    href: "http://localhost:5173/",
    icon: RiContactsBookLine,
  },
]

export default function Cctv() {
  return (
    <div className="min-h-screen bg-slate-950 p-4">
      <div className="mx-auto flex max-w-7xl flex-col gap-6 md:flex-row">
        <aside className="w-full rounded-3xl bg-slate-900/90 p-6 shadow-2xl md:w-1/3">
          <div className="mb-6">
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-cyan-400">
              CCTV / Segurança
            </p>
            <h1 className="mt-2 text-2xl font-semibold text-white">
              Painel de monitorização
            </h1>
            <p className="mt-2 text-sm text-slate-300">
              Acesso rápido aos sistemas principais de vigilância e vídeo.
            </p>
          </div>

          <div className="space-y-3">
            {cctvLinks.map(({ title, href, icon: Icon }) => (
              <a
                key={title}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 rounded-2xl border border-slate-700 bg-slate-800/80 px-4 py-4 text-cyan-400 transition hover:bg-slate-800 hover:text-white"
              >
                <Icon className="size-8 text-cyan-400" />
                <span className="text-lg font-semibold">{title}</span>
              </a>
            ))}
          </div>
        </aside>

        <main className="flex w-full items-center justify-center rounded-3xl bg-white p-6 shadow-lg md:w-2/3">
          <div className="w-full max-w-4xl text-center">
            <div className="mb-6 flex items-center justify-center">
              <Image
                className="flex"
                src="/Logo.png"
                alt="Oceanario logo"
                width={400}
                height={80}
                priority
              />
            </div>

            <div className="rounded-3xl border border-slate-200 bg-slate-50 p-4 shadow-inner">
              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-cyan-600">
                Sistema CCTV
              </p>
              <h2 className="mt-2 text-2xl font-semibold text-slate-900">
                Monitorização em tempo real
              </h2>
              <p className="mt-2 text-sm text-slate-600">
                Centro de controlo para acompanhar câmaras, eventos e gravações.
              </p>

              <div className="relative mt-4 overflow-hidden rounded-3xl">
                <video
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="mx-auto h-auto w-full max-w-full rounded-3xl object-cover"
                >
                  <source src="/IMAGENS WEBSITE 14.mp4" type="video/mp4" />
                  Seu navegador não suporta vídeos.
                </video>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  )
}
