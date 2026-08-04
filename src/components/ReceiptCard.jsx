function ReceiptCard() {
  return (
    <div className="h-full w-full rounded-2xl border-t-2 border-dashed border-neutral-400 bg-neutral-0 p-5 shadow-xl">
      <div className="flex items-start justify-between font-mono text-[0.6875rem] tracking-widest text-neutral-600">
        <span>RECEIPT</span>
        <span className="text-right">
          № MS-2026
          <br />
          0421-AH
        </span>
      </div>

      <h2 className="mt-1 font-serif text-2xl">Your stay</h2>

      <div className="mt-3 flex items-start justify-between border-b border-dashed border-neutral-400 pb-3">
        <div>
          <p className="text-[0.6875rem] tracking-widest text-neutral-600">CHECK IN</p>
          <p className="mt-1 font-serif text-3xl">25 Apr</p>
          <p className="text-sm text-neutral-600">Saturday · 15:00</p>
        </div>
        <div className="text-right">
          <p className="text-[0.6875rem] tracking-widest text-neutral-600">CHECK OUT</p>
          <p className="mt-1 font-serif text-3xl">29 Apr</p>
          <p className="text-sm text-neutral-600">Wednesday · 11:00</p>
        </div>
      </div>

      <dl className="mt-2 flex flex-col gap-1 text-sm text-neutral-700">
        <div className="flex items-center justify-between">
          <dt>Room · La Garrigue × 4 nights</dt>
          <dd>€ 620.00</dd>
        </div>
        <div className="flex items-center justify-between">
          <dt>Breakfast × 2 guests</dt>
          <dd>€ 96.00</dd>
        </div>
        <div className="flex items-center justify-between">
          <dt>Tourist tax</dt>
          <dd>€ 14.40</dd>
        </div>
      </dl>

      <div className="mt-2 flex items-center justify-between border-t border-neutral-900 pt-2">
        <span className="text-[0.6875rem] font-semibold tracking-widest">TOTAL PAID</span>
        <span className="font-serif text-2xl">€ 730.40</span>
      </div>

      <div className="mt-3 flex items-end justify-between">
        <p className="font-mono text-[0.6875rem] tracking-widest text-neutral-600">
          PAID · WISE · GBP
        </p>
        <img src="/assets/images/icon-barcode.svg" alt="" className="h-6 w-auto" />
      </div>
    </div>
  )
}

export default ReceiptCard
