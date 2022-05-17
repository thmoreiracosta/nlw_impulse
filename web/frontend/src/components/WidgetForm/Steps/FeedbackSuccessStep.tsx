import { FaCheckSquare } from 'react-icons/fa'
import { CloseButton } from '../../CloseButton'

interface FeedbackSuccessStepProps {
  onFeedbackRestartRequested: () => void
}

export function FeedbackSuccessStep({
  onFeedbackRestartRequested
}: FeedbackSuccessStepProps) {
  return (
    <>
      <header>
        <CloseButton />
      </header>

      <div className="flex flex-col items-center py-10 w-[304px]">
        <FaCheckSquare className="text-[#599759] w-14 h-20 flex-1  items-center justify-center bg-white flex-1 p-0 rounded-[6px] " />

        <span className="text-xl mt-5">Agradecemos seu feedback! 😉</span>
        <button
          type="button"
          onClick={onFeedbackRestartRequested}
          className="py-2 px-6 mt-6 bg-zinc-800 rounded-md border-transparent text-sm leadding-6 hover:bg-zinc-700 transition-colors focus:oultline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-zinc-900 focus:ring-brand-500 disabled:opacity-50 disabled:hover:bg-brand-500"
        >
          Deseja enviar outro?
        </button>
      </div>
    </>
  )
}
