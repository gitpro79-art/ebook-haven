import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '@/contexts/AuthContext';
import { Button } from '@/components/ui/button';
import { BookOpen, Heart, LogOut, User } from 'lucide-react';

const Navbar = () => {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await logout();
      navigate('/');
    } catch (error) {
      console.error('Logout error:', error);
    }
  };

  const username = user?.user_metadata?.username || user?.email?.split('@')[0] || 'User';

  return (
    <nav className="bg-card border-b border-border sticky top-0 z-50 shadow-sm">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link to="/home" className="flex items-center space-x-2 group">
            <BookOpen className="h-8 w-8 text-primary transition-transform group-hover:scale-110" />
            <span className="text-2xl font-bold text-primary">eBookNest</span>
          </Link>

          <div className="flex items-center space-x-6">
            <Link to="/home">
              <Button variant="ghost" className="text-foreground hover:text-primary">
                Home
              </Button>
            </Link>
            <Link to="/wishlist">
              <Button variant="ghost" className="text-foreground hover:text-primary">
                <Heart className="mr-2 h-4 w-4" />
                Wishlist
              </Button>
            </Link>
            
            <div className="flex items-center space-x-2 pl-4 border-l border-border">
              <User className="h-4 w-4 text-muted-foreground" />
              <span className="text-sm text-foreground font-medium">{username}</span>
            </div>

            <Button 
              variant="outline" 
              onClick={handleLogout}
              className="border-primary text-primary hover:bg-primary hover:text-primary-foreground"
            >
              <LogOut className="mr-2 h-4 w-4" />
              Logout
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
