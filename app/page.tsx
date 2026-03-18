import Navbar from "@/components/navbar"
import Sidebar from "@/components/sidebar"
import DashboardHeader from "@/components/dashboard-header"
import PaymentGoalCard from "@/components/cards/payment-goal-card"
import WeeklyRevenueCard from "@/components/cards/weekly-revenue-card"
import EngagementRateCard from "@/components/cards/engagement-rate-card"
import PaymentHistoryCard from "@/components/cards/payment-history-card"
import RightPaymentGoalCard from "@/components/cards/right-payment-goal-card"
import CreditMandatoryCard from "@/components/cards/credit-mandatory-card"

export default function Page() {
  return (
    <div className="min-h-screen bg-[#e8eaed] px-5 py-4 font-sans flex flex-col gap-4">
      {/* Navbar */}
      <Navbar />

      {/* Header */}
      <div className="ml-[4.8rem] my-4">
        <DashboardHeader />
      </div>

      {/* Content */}
      <div className="flex gap-4 flex-1 min-h-0">
        <Sidebar />

        <main className="flex-1 flex gap-4 min-h-0">
          {/* Área izquierda + central */}
          <div className="flex flex-col gap-4 flex-1 min-h-0">

            {/* Fila superior */}
            <div className="flex gap-4 items-stretch flex-[3] min-h-0">
              {/* Col izquierda */}
              <div className="flex flex-col gap-4 w-[310px] shrink-0">
                <PaymentGoalCard />
                <WeeklyRevenueCard />
              </div>
              {/* Col central */}
              <div className="flex-1 min-h-0">
                <EngagementRateCard />
              </div>
            </div>

            {/* Fila inferior: Payment History */}
            <div className="shrink-0">
              <PaymentHistoryCard />
            </div>
          </div>

          {/* Columna derecha */}
          <div className="w-[310px] shrink-0 flex flex-col gap-4">
            <RightPaymentGoalCard />
            <CreditMandatoryCard />
          </div>
        </main>
      </div>
    </div>
  )
}
