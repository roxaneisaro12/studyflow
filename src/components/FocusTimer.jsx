
import { useEffect, useRef, useState } from 'react'
import Button from './Button'

export default function FocusTimer({ mode, duration }) {
  const initialSeconds = mode === 'Study' ? duration * 60 : 5 * 60

  const [seconds, setSeconds] = useState(initialSeconds)
  const [running, setRunning] = useState(false)
  const intervalRef = useRef(null)

  useEffect(() => {
    if (!running) return

    intervalRef.current = setInterval(() => {
      setSeconds(current => Math.max(0, current - 1))
    }, 1000)

    return () => {
      clearInterval(intervalRef.current)
      intervalRef.current = null
    }
  }, [running])

  useEffect(() => {
    if (seconds === 0) setRunning(false)
  }, [seconds])

  function reset() {
    setRunning(false)
    setSeconds(initialSeconds)
  }

  const minutes = String(Math.floor(seconds / 60)).padStart(2, '0')
  const remainingSeconds = String(seconds % 60).padStart(2, '0')

  return (
    <>
      <div className="timer-display">
        <div className="timer-circle">
          <span>{minutes}:{remainingSeconds}</span>
          <small>
            {running ? 'SESSION IN PROGRESS'
              : seconds === 0 ? 'SESSION COMPLETE'
                : 'READY WHEN YOU ARE'}
          </small>
        </div>
      </div>

      <div className="timer-controls">
        <Button
          onClick={() => setRunning(value => !value)}
          disabled={seconds === 0}
        >
          {running ? 'Pause' : 'Start session'}
        </Button>

        <Button variant="secondary" onClick={reset}>
          Reset
        </Button>
      </div>

      <p className="timer-tip">
        Tip: silence notifications and keep only the materials you need nearby.
      </p>
    </>
  )
}
