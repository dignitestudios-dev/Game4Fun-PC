"use client"
// import { EmblaOptionsType } from "embla-carousel"
// import EmblaCarousel from "./_components/embla-crousel"
import ShopDetail from "./_components/shop-detail"
import Specification from "./_components/specification"
import SupportedGames from "./_components/supported-games"
import BenchmarkScore from "./_components/benchmark-score"
import SuggestedPcBuilds from "./_components/suggested-pc-builds"
// const OPTIONS: EmblaOptionsType = {}
// const SLIDE_COUNT = 10
// const SLIDES = Array.from(Array(SLIDE_COUNT).keys())
function page() {
  return (
    <div className="" >
        <ShopDetail/>
        <Specification/>
        <SupportedGames/>
        <BenchmarkScore/>
        <SuggestedPcBuilds/>
    </div>
  )
}

export default page