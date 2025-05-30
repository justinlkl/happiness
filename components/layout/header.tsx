import { Landmark } from 'lucide-react';

export function AppHeader() {
  return (
    <header className="bg-primary text-primary-foreground shadow-md">
      <div className="container mx-auto px-4 py-4 flex items-center">
        <Landmark className="h-8 w-8 mr-3" />
        <h1 className="text-2xl font-bold tracking-tight">Happiness Hub</h1>
      </div>
    </header>
  );
}
