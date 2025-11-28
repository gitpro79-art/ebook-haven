import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '@/contexts/AuthContext';
import { Button } from '@/components/ui/button';
import { BookOpen, Sparkles } from 'lucide-react';
import { useEffect } from 'react';

const Landing = () => {
  const { isAuthenticated } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (isAuthenticated) {
      navigate('/home');
    }
  }, [isAuthenticated, navigate]);

  return (
    <div className="min-h-screen bg-warm-gradient flex items-center justify-center px-4">
      <div className="text-center max-w-3xl mx-auto">
        <div className="flex justify-center mb-8 animate-in fade-in slide-in-from-bottom-4 duration-1000">
          <div className="relative">
            <BookOpen className="h-24 w-24 text-primary" />
            <Sparkles className="h-8 w-8 text-secondary absolute -top-2 -right-2 animate-pulse" />
          </div>
        </div>
        
        <h1 className="text-6xl font-bold text-primary mb-6 animate-in fade-in slide-in-from-bottom-4 duration-1000 delay-100">
          eBookNest
        </h1>
        
        <p className="text-xl text-muted-foreground mb-12 leading-relaxed animate-in fade-in slide-in-from-bottom-4 duration-1000 delay-200">
          Your cozy corner for discovering and reading timeless classics. 
          Dive into a world of literature, one page at a time.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center animate-in fade-in slide-in-from-bottom-4 duration-1000 delay-300">
          <Link to="/login">
            <Button 
              size="lg" 
              className="w-full sm:w-auto bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-6 text-lg"
            >
              Login
            </Button>
          </Link>
          <Link to="/register">
            <Button 
              size="lg" 
              variant="outline"
              className="w-full sm:w-auto border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground px-8 py-6 text-lg"
            >
              Register
            </Button>
          </Link>
        </div>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 animate-in fade-in slide-in-from-bottom-4 duration-1000 delay-500">
          <div className="text-center">
            <div className="bg-card rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 shadow-lg">
              <BookOpen className="h-8 w-8 text-secondary" />
            </div>
            <h3 className="font-semibold text-foreground mb-2">Curated Collection</h3>
            <p className="text-sm text-muted-foreground">Access timeless classics from renowned authors</p>
          </div>
          <div className="text-center">
            <div className="bg-card rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 shadow-lg">
              <Sparkles className="h-8 w-8 text-secondary" />
            </div>
            <h3 className="font-semibold text-foreground mb-2">Easy Reading</h3>
            <p className="text-sm text-muted-foreground">Seamless PDF viewing experience</p>
          </div>
          <div className="text-center">
            <div className="bg-card rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 shadow-lg">
              <BookOpen className="h-8 w-8 text-secondary" />
            </div>
            <h3 className="font-semibold text-foreground mb-2">Personal Wishlist</h3>
            <p className="text-sm text-muted-foreground">Save your favorite books for later</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Landing;
