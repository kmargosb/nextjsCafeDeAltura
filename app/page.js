import React from 'react'
import SectionHero from './components/SectionHero'
import SectionCards from './components/SectionCards'
import SectionFaq from './components/SectionFaq'
import SectionFeature from './components/SectionFeature'
import SectionFooter from './components/SectionFooter'
import SectionForm from './components/SectionForm'
import SectionCoffeeCards from './components/SectionCoffeeCards'

const Home = () => {
  return (
    <div>
      <SectionHero />
      <SectionCards />
      <SectionCoffeeCards
        textTittle='Novedades'
        cooffeToShow={4}
        style={`flex gap-6 w-[1200px]`}
        seeAll={true}
      />
      <SectionFaq />
      <SectionFeature />
      <SectionForm />
      <SectionFooter />
    </div>
  )
}

export default Home