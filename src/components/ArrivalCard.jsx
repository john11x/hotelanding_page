import InfoCard from "./InfoCard"

function ArrivalCard() {
  return (
    <InfoCard
      icon="/assets/images/icon-key.svg"
      iconBg="bg-terracotta-600"
      accent="text-terracotta-600"
      label="ARRIVAL"
      number="01"
      title="Check-in from 15:00"
      subtitle="Sat, 25 April"
    >
      Ring the brass bell by the blue door. If we're at the market, the key is in the terracotta
      pot by the olive tree.
    </InfoCard>
  )
}

export default ArrivalCard
