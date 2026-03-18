"use client"

export default function AmountOfCreditCard() {
  return (
    <div className="bg-white rounded-[1.5rem] p-5 shadow-[0_1px_6px_rgba(0,0,0,0.06)] flex flex-col gap-2">
      {/* Header */}
      <div className="flex items-center gap-2">
        <div className="w-8 h-8 rounded-xl bg-[#f4f5f7] flex items-center justify-center flex-shrink-0">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#6b7280" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
            <path d="M3 8a3 3 0 0 1 3 -3h12a3 3 0 0 1 3 3v8a3 3 0 0 1 -3 3h-12a3 3 0 0 1 -3 -3l0 -8" />
            <path d="M3 10l18 0" />
            <path d="M7 15l.01 0" />
            <path d="M11 15l2 0" />
          </svg>
        </div>
        <div>
          <p className="text-sm font-semibold text-[#1a1a2e]">Amount of credit</p>
          <p className="text-xs text-[#9ca3af]">Total refund amount with fee</p>
        </div>
      </div>

      {/* Amount */}
      <div className="flex items-end gap-2 mt-1">
        <p className="text-3xl font-semibold text-[#1a1a2e]">$8,945.89</p>
        <span className="mb-1 bg-[#dcfce7] text-[#16a34a] text-xs font-semibold px-2.5 py-1 rounded-full">
          +12.8%
        </span>
      </div>
    </div>
  )
}
