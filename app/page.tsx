import Navbar from "@/components/navbar"
import Sidebar from "@/components/sidebar"
import DashboardHeader from "@/components/dashboard-header"
import PaymentGoalCard from "@/components/cards/payment-goal-card"
import WeeklyRevenueCard from "@/components/cards/weekly-revenue-card"
import EngagementRateCard from "@/components/cards/engagement-rate-card"
import PaymentHistoryCard from "@/components/cards/payment-history-card"

export default function Page() {
  return (
    <div className="min-h-screen bg-[#e8eaed] p-4 font-sans flex flex-col gap-4">
      <Navbar />
      <div className="ml-[4.5rem] my-3">
        <DashboardHeader />
      </div>
      <div className="flex gap-4 flex-1">
        <Sidebar />

        <main className="flex-1 flex gap-4">
          {/* Área izquierda + central */}
          <div className="flex flex-col gap-4 flex-1">
            {/* Fila superior: PaymentGoal+Weekly (col izq) + EngagementRate (col centro) */}
            <div className="flex gap-4 items-stretch">
              {/* Col izquierda — más estrecha */}
              <div className="flex flex-col gap-4 w-[240px] shrink-0">
                <PaymentGoalCard />
                <WeeklyRevenueCard />
              </div>
              {/* Col central — ocupa el resto */}
              <div className="flex-1">
                <EngagementRateCard />
              </div>
            </div>

            {/* Fila inferior: Payment History */}
            <PaymentHistoryCard />
          </div>

          {/* Columna derecha — próximas cards */}
          <div className="w-[260px] shrink-0 flex flex-col gap-4" />
        </main>
      </div>
    </div>
  )
}
