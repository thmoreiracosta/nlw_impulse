import { ArrowArcLeft, ArrowLeft } from 'phosphor-react'
import { FaCamera } from 'react-icons/fa'
import { FeedbackType, feedbackTypes } from '..'
import { CloseButton } from '../../CloseButton'

interface FeedbackContentStepProps {
  feedbackType: FeedbackType
  onFeedbackRestartRequested: () => void
}

export function FeedbackContentStep({
  feedbackType,
  onFeedbackRestartRequested
}: FeedbackContentStepProps) {
  const feedbackTypeInfo = feedbackTypes[feedbackType]

  return (
    <>
      <header>
        <button
          onClick={onFeedbackRestartRequested}
          type="button"
          className="top-5 left-5 absolute text-zinc-400 hover:text-zinc-100"
        >
          <ArrowLeft weight="bold" className="w-4 h-4" />
        </button>

        <span className="text-xl leading-6 flex items-center gap-2">
          <img
            src={feedbackTypeInfo.image.source}
            alt={feedbackTypeInfo.image.alt}
            className="w-6 h-6"
          />
          {feedbackTypeInfo.title}
        </span>

        <CloseButton />
      </header>

      <form className="my-6">
        <textarea
          className="min-w-[304px] w-full min-h-[112px] text-sm placeholder-zinc-400 text-zinc-100 border-zinc-600 bg-transparent rounded-md focus:border-brand-500 focus:ring-brand-500 focus:ring-1 focus:outline-none resize-none scrollbar scrollbar-thumb-zinc-700 scrollbar-thin scrollbar-track-transparent "
          placeholder="Algo não está funcionando bem? Queremos corrigir. Conte com detalhes o que está acontecendo..."
        />

        <footer className="my-3 w-full flex gap-2 mp-2 items-center justify-center">
          <FaCamera className="w-8 cursor-pointer" />
          <button
            type="submit"
            className="p-2 bg-brand-500 rounded-md border-transparent flex-1 flex justify-center items-center text-sm hover:bg-brand-300 focus:oultline-none "
          >
            Enviar feedback
          </button>
        </footer>
      </form>
    </>
  )
}
