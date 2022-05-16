import { FaHeart } from 'react-icons/fa'
import { CloseButton } from '../CloseButton'
import bugImageUrl from '../../assets/bug.svg'
import ideaImageUrl from '../../assets/idea.svg'
import thoughtImageUrl from '../../assets/thought.svg'
import { useState } from 'react'
import { FeedbackTypeStep } from './Steps/FeedbackTypeStep'

export const feedbackTypes = {
  BUG: {
    title: 'Problema',
    image: {
      source: bugImageUrl,
      alt: 'Imagem de um inseto'
    }
  },
  IDEA: {
    title: 'Idéia',
    image: {
      source: ideaImageUrl,
      alt: 'Imagem de uma lâmpada'
    }
  },
  OTHER: {
    title: 'Outro',
    image: {
      source: thoughtImageUrl,
      alt: 'Imagem de um balão de pensamento'
    }
  }
}

export type FeedbackType = keyof typeof feedbackTypes

export function WidgetForm() {
  const [feedbackType, setFeedbackType] = useState<FeedbackType | null>(null)

  return (
    <div className="bg-zinc-900 p-4 relative rounded-2xl mb-4 flex flex-col items-center shadow-lg w-[calc(100vw-2rem)] md:w-auto">
      <FeedbackTypeStep onFeedbackTypeChange={setFeedbackType} />

      <p>
        {' '}
        <a target="_blank" href="https://github.com/thmoreiracosta">
          {' '}
          by Thiago Costa{' '}
        </a>
      </p>

      <footer className="text-xs text-neutral-400 flex space-x-1">
        Feito com <FaHeart className="text-[#B51942] w-4 m-1" />
        pela
        <a
          className="underline underline-offset-2"
          target="_blank"
          href="https://rocketseat.com.br "
        >
          Rocketseat.
        </a>
      </footer>
    </div>
  )
}