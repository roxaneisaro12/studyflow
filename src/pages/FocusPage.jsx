
import { useState } from 'react'
import SectionCard from '../components/SectionCard'
import FocusTimer from '../components/FocusTimer'
import { useDocumentTitle } from '../hooks/useDocumentTitle'

export default function FocusPage({ duration }) {
  const [mode, setMode] = useState('Study')

  useDocumentTitle('Focus')

  return (
    <>
      <div className="page-heading">
        <div>
          <p className="eyebrow">MAKE SPACE FOR DEEP WORK</p>
          <h1>Focus room</h1>
          <p className="muted">
            Step away from distractions and work on one thing.
          </p>
        </div>
      </div>

      <div className="focus-grid">
        <SectionCard title="Choose your session">
          <div className="timer-modes">
            <button
              className={mode === 'Study' ? 'selected' : ''}
              onClick={() => setMode('Study')}
            >
              Study · {duration} min
            </button>

            <button
              className={mode === 'Break' ? 'selected' : ''}
              onClick={() => setMode('Break')}
            >
              Short break · 5 min
            </button>
          </div>

          <FocusTimer
            key={`${mode}-${duration}`}
            mode={mode}
            duration={duration}
          />
        </SectionCard>

        <SectionCard
          title="A simple ritual"
          subtitle="Before you begin"
        >
          <div className="ritual-list">
            <div>
              <span>01</span>
              <p>
                <strong>Choose one goal</strong>
                <small>What will you finish this session?</small>
              </p>
            </div>

            <div>
              <span>02</span>
              <p>
                <strong>Clear your space</strong>
                <small>Close tabs you don't need.</small>
              </p>
            </div>

            <div>
              <span>03</span>
              <p>
                <strong>Start small</strong>
                <small>Just focus until the timer ends.</small>
              </p>
            </div>
          </div>
        </SectionCard>
      </div>
    </>
  )
}
