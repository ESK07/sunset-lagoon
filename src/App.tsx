import { useEffect, useState } from 'react';
import { DirectionsSection } from './components/DirectionsSection';
import { ExperiencesBento } from './components/ExperiencesBento';
import { FAQSection } from './components/FAQSection';
import { Footer } from './components/Footer';
import { Header } from './components/Header';
import { HeroSection } from './components/HeroSection';
import { ReviewsSection } from './components/ReviewsSection';
import { VisitorGuideAndBooking } from './components/VisitorGuideAndBooking';
import { ExperienceId, PageId } from './data/venueData';

const VALID_PAGES: PageId[] = ['home', 'experiences', 'plan', 'reviews', 'faq', 'directions'];

function parseHashToPage(): PageId {
  if (typeof window === 'undefined') return 'home';
  const raw = window.location.hash.replace(/^#\/?/, '').trim().toLowerCase();
  return VALID_PAGES.includes(raw as PageId) ? (raw as PageId) : 'home';
}

export default function App() {
  const [currentPage, setCurrentPage] = useState<PageId>(() => parseHashToPage());
  const [selectedExperience, setSelectedExperience] = useState<ExperienceId>('weddings');

  useEffect(() => {
    const onHashChange = () => {
      setCurrentPage(parseHashToPage());
      window.scrollTo({ top: 0, behavior: 'auto' });
    };

    window.addEventListener('hashchange', onHashChange);
    return () => window.removeEventListener('hashchange', onHashChange);
  }, []);

  const navigateTo = (page: PageId, experience?: ExperienceId) => {
    if (experience) {
      setSelectedExperience(experience);
    }
    setCurrentPage(page);
    const nextHash = page === 'home' ? '#/' : `#/${page}`;
    if (window.location.hash !== nextHash) {
      window.location.hash = nextHash;
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="flex min-h-screen flex-col bg-[#F8F9F7] text-[#18201D]">
      <Header currentPage={currentPage} onNavigate={(page) => navigateTo(page)} />

      <main className="flex-1">
        {currentPage === 'home' && <HeroSection onNavigate={(page) => navigateTo(page)} />}

        {currentPage === 'experiences' && (
          <ExperiencesBento onSelectExperience={(id) => navigateTo('plan', id)} />
        )}

        {currentPage === 'plan' && (
          <VisitorGuideAndBooking
            selectedExperience={selectedExperience}
            onChangeExperience={setSelectedExperience}
          />
        )}

        {currentPage === 'reviews' && <ReviewsSection />}

        {currentPage === 'faq' && <FAQSection onNavigate={(page) => navigateTo(page)} />}

        {currentPage === 'directions' && <DirectionsSection />}
      </main>

      <Footer onNavigate={(page) => navigateTo(page)} />
    </div>
  );
}
