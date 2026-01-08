import MainBlock from './components/main block/main block'
import OurServices from './components/Our Services/Our Services'
import OurProjects from './components/Our Projects/Our Projects'
import RequestToDelivery from './components/requestToDelivery/requestToDelivery'
import Catalog from './components/Catalog/Catalog'
import SubmitRequest from './components/SubmitRequest/SubmitRequest'
import Footer from './components/footer/footer'

import './App.scss'

export default function App() {
  return (
    <div className="container">
      <MainBlock />
      <OurServices />
      <OurProjects />
      <RequestToDelivery />
      <Catalog />
      <SubmitRequest />
      <Footer />
    </div>
  )
}
