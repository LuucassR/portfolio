import { useScrollProgress } from '../hooks/useScrollProgress'

export default function ScrollProgress() {
  const { progress } = useScrollProgress()

  return (
    <>
      {/* Progress Bar */}
      <div className="fixed top-0 left-0 w-full h-1 z-50">
        <div
          className="h-full bg-linear-to-r from-blue-600 via-cyan-500 to-blue-400 transition-all duration-150 ease-out"
          style={{ width: `${progress}%` }}
        />
      </div>

      {/* Progress Circle */}
      <div className="fixed right-8 top-1/2 -translate-y-1/2 z-40 hidden lg:block">
        <svg width="50" height="50" className="transform -rotate-90">
          <circle
            cx="25"
            cy="25"
            r="20"
            stroke="rgba(59, 130, 246, 0.2)"
            strokeWidth="3"
            fill="none"
          />
          <circle
            cx="25"
            cy="25"
            r="20"
            stroke="url(#progressGradient)"
            strokeWidth="3"
            fill="none"
            strokeLinecap="round"
            strokeDasharray={`${2 * Math.PI * 20}`}
            strokeDashoffset={`${2 * Math.PI * 20 * (1 - progress / 100)}`}
            className="transition-all duration-300"
          />
          <defs>
            <linearGradient id="progressGradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#3b82f6" />
              <stop offset="100%" stopColor="#06b6d4" />
            </linearGradient>
          </defs>
        </svg>
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="text-[10px] font-bold text-blue-600 dark:text-blue-400">
            {Math.round(progress)}%
          </span>
        </div>
      </div>
    </>
  )
}
