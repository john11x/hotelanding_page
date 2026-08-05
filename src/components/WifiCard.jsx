import InfoCard from "./InfoCard"
import CopyButton from "./CopyButton"

function WifiCard() {
  return (
    <InfoCard
      icon="/assets/images/icon-wifi.svg"
      iconBg="bg-blue-500"
      accent="text-blue-500"
      label="WIFI"
      number="02"
      title="Le Soleil · Guest"
      subtitle="Password below"
    >
      <dl className="flex flex-col gap-2 rounded-xl bg-neutral-100 p-3 font-mono text-xs">
        <div className="flex items-center justify-between">
          <dt className="text-neutral-600">NETWORK</dt>
          <dd>Le Soleil · Guest</dd>
        </div>
        <div className="flex items-center justify-between">
          <dt className="text-neutral-600">PASSWORD</dt>
          <dd className="flex items-center gap-2">
            soleil-2026
            <CopyButton value="soleil-2026" />
          </dd>
        </div>
      </dl>
    </InfoCard>
  )
}

export default WifiCard
