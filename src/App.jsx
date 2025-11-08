import HeaderHero from './components/HeaderHero';
import FeatureMatrix from './components/FeatureMatrix';
import PricingTiers from './components/PricingTiers';
import FAQ from './components/FAQ';

function App() {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      <HeaderHero />
      <FeatureMatrix />
      <PricingTiers />
      <FAQ />
      <footer className="border-t border-gray-200">
        <div className="mx-auto max-w-7xl px-6 py-8 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-gray-600">
          <p>© {new Date().getFullYear()} Your Product. All rights reserved.</p>
          <nav className="flex items-center gap-6">
            <a href="#" className="hover:text-gray-900">Privacy</a>
            <a href="#" className="hover:text-gray-900">Terms</a>
            <a href="#" className="hover:text-gray-900">Contact</a>
          </nav>
        </div>
      </footer>
    </div>
  );
}

export default App;
