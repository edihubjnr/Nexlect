import Navbar from '../components/layout/Navbar';
import type { Theme } from '../App';


interface HomePageProps {
  theme: Theme;
  onToggleTheme: () => void;
}

function HomePage({ theme, onToggleTheme }: HomePageProps) {
  return (
    <>
      <Navbar theme={theme} onToggleTheme={onToggleTheme} />

      <main className="flex min-h-[calc(100vh-68px)] flex-col items-center justify-center bg-background px-6 text-center">
        <h1 className="text-5xl font-bold tracking-tight text-foreground">
          Nexlect
        </h1>

        <p className="mt-4 text-lg font-medium text-foreground">
          Connecting Minds. Building Knowledge.
        </p>

        <p className="mt-2 max-w-md text-sm text-muted-foreground">
          A collaborative academic community where university students connect,
          share learning resources, and grow together.
        </p>
      </main>
    </>
  );
}

export default HomePage;
