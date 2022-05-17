import html2canvas from 'html2canvas'
import { Printer } from 'phosphor-react'
import { useState } from 'react'
import { FaCamera, FaTrash } from 'react-icons/fa'
import { Loading } from '../Loading'

interface ScreenshotButtonProps {
  screenshot: string
  onScreenshotTook: (screenshot: string) => void
}

export function ScreenshotButton({
  screenshot,
  onScreenshotTook
}: ScreenshotButtonProps) {
  const [isTakingScreenshot, setIsTakingScreenshot] = useState(false)

  async function handleTakeScreenshot() {
    setIsTakingScreenshot(true)

    const canvas = await html2canvas(document.querySelector('html')!)
    const base64image = canvas.toDataURL('image/png')

    onScreenshotTook(base64image)
    setIsTakingScreenshot(false)
  }

  if (screenshot) {
    return (
      <button
        type="button"
        className="p-1 w-10 h-10 rounded-[4px] border-transparent flex justify-end items-end text-zinc-400 hover:text-zinc-100 transition-colors"
        style={{
          backgroudImage: `url(${screenshot})`,
        }}
      >
        <FaTrash height="fill" />
      </button>
    )
  }

  return (
    <>
      <button
        type="button"
        onClickCapture={handleTakeScreenshot}
        className="p-2 bg-zinc-800 rounded-[6px] cursor-pointer border-transparent hover:bg-zinc-700 ocus:oultline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-zinc-900 focus:ring-brand-500 transition-colors "
      >
        {isTakingScreenshot ? (
          <Loading />
        ) : (
          <FaCamera className="w-6 h-6 text-[#949494]" />
        )}
      </button>
    </>
  )
}
