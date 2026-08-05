import ReceiptCard from "./ReceiptCard"
import WelcomeCard from "./WelcomeCard"

function CardFan() {
  return (
    <>
      <div className="group relative mx-auto hidden min-h-[30rem] w-[46rem] min-[62rem]:block">
        <img
          src="/assets/images/illustration-sun.svg"
          alt=""
          className="pointer-events-none absolute left-1/2 top-1/2 z-0 h-32 w-32 -translate-x-1/2 -translate-y-1/2 scale-75 opacity-0 transition-all duration-300 ease-out group-hover:scale-100 group-hover:opacity-100"
        />
        <div className="absolute left-1/2 top-1/2 grid w-[22rem] -translate-x-1/2 -translate-y-1/2">
          <div className="col-start-1 row-start-1 z-10 origin-bottom -translate-x-[10rem] -rotate-[4deg] transition-transform duration-300 ease-out group-hover:-translate-x-[19rem] group-hover:rotate-[8deg]">
            <ReceiptCard />
          </div>
          <div className="col-start-1 row-start-1 z-20 origin-bottom translate-x-[10rem] rotate-[4deg] transition-transform duration-300 ease-out group-hover:translate-x-[19rem] group-hover:-rotate-[8deg]">
            <WelcomeCard />
          </div>
        </div>
      </div>

      <p className="mt-4 hidden items-center justify-center gap-2 text-center font-mono text-[0.6875rem] tracking-widest text-terracotta-600 min-[62rem]:flex">
        <img src="/assets/images/icon-sparkle.svg" alt="" className="h-2 w-2" />
        HOVER TO FAN
        <img src="/assets/images/icon-sparkle.svg" alt="" className="h-2 w-2" />
      </p>
    </>
  )
}

export default CardFan
