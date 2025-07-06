"use client"

import { ThemeProvider } from '@/contexts/theme-context';
import { marketData } from '@/data/markets';
import { ThemeToggle } from '@/components/theme-toggle';
import { Header } from '@/components/header';
import { Navigation } from '@/components/navigation';
import { WelcomeBox } from '@/components/welcome-box';
import { StatsBar } from '@/components/stats-bar';
import { CategorySection } from '@/components/category-section';
import { RecentActivity } from '@/components/recent-activity';
import { Footer } from '@/components/footer';
import { MainContent } from '@/components/main-content';

function HomePageContent() {
  return (
    <>
      <ThemeToggle />
      <Header />
      <Navigation />
      <MainContent>
        <WelcomeBox />
        <StatsBar />
        {Object.entries(marketData).map(([categoryTitle, markets]) => (
          <CategorySection key={categoryTitle} title={categoryTitle} markets={markets} />
        ))}
        <div>
          <RecentActivity />
        </div>
      </MainContent>
      <Footer />
    </>
  );
}

export default function HomePage() {
  return <HomePageContent />;
}
