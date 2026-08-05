import InfoCard from "./InfoCard"

function BreakfastCard() {
  return (
    <InfoCard
      icon="/assets/images/icon-breakfast.svg"
      iconBg="bg-rose-500"
      accent="text-rose-500"
      label="BREAKFAST"
      number="03"
      title="Served 8 – 10:30"
      subtitle="On the terrace"
    >
      Fresh figs, Marseille honey, pain au levain, and espresso. Gluten-free option? Leave a note
      the night before.
    </InfoCard>
  )
}

export default BreakfastCard
