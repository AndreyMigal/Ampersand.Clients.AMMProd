import { Suspense, lazy } from "react";
import Loader from "./helpers/components/Loader/Loader";
const Layout = lazy(() => import('./helpers/components/Layout/Layout'));
const Header = lazy(() => import('./components/Header/Header'));
const Hero = lazy(() => import('components/Hero/Hero'));
const CharacterUpgrade = lazy(() => import('./components/CharacterUpgrade/CharacterUpgrade'));
const WhoAreWe = lazy(() => import('components/WhoAreWe/WhoAreWe'));
const Features = lazy(() => import('components/Features/Features'));
const OurProducts = lazy(() => import('components/OurProducts/OurProducts'));
const Calculator = lazy(() => import('components/Calculator/Calculator'));
const WorkProcess = lazy(() => import('components/WorkProcess/WorkProcess'));
const Case = lazy(() => import('components/Case/Case'));
const ContactForm = lazy(() => import('components/ContactForm/ContactForm'));
const Clients = lazy(() => import('components/Clients/Clients'));
const Footer = lazy(() => import('components/Footer/Footer'));

function App() {

  return (
    <Suspense fallback={<Loader />}>
      <Layout>
        <Header />
        <Hero />
        <CharacterUpgrade />
        <WhoAreWe />
        <Features />
      </Layout>
      <OurProducts />
      <Layout>
        <Calculator />
        <WorkProcess />
        <Case />
        <ContactForm />
        <Clients />
      </Layout>
      <Footer />
    </Suspense>
  );
}

export default App;