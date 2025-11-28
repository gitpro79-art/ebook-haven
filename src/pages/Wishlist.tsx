import { useState, useEffect } from 'react';
import Navbar from '@/components/Navbar';
import BookCard from '@/components/BookCard';
import { wishlistService } from '@/lib/wishlist';
import { staticBooks } from '@/data/books';
import { useToast } from '@/hooks/use-toast';
import { Loader2 } from 'lucide-react';

const Wishlist = () => {
  const [wishlistBooks, setWishlistBooks] = useState<any[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const { toast } = useToast();

  useEffect(() => {
    fetchWishlist();
  }, []);

  const fetchWishlist = async () => {
    try {
      const wishlist = await wishlistService.getWishlist();
      // Map wishlist items to actual book data
      const books = wishlist
        .map((item: any) => staticBooks.find(book => book.id === item.book_id))
        .filter(Boolean);
      setWishlistBooks(books);
    } catch (error: any) {
      toast({
        title: "Error loading wishlist",
        description: error.message || "Failed to load your wishlist",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold text-primary mb-8">My Wishlist</h1>

        {isLoading ? (
          <div className="flex justify-center items-center py-12">
            <Loader2 className="h-8 w-8 animate-spin text-primary" />
          </div>
        ) : wishlistBooks.length === 0 ? (
          <div className="text-center py-12">
            <p className="text-lg text-muted-foreground mb-4">Your wishlist is empty</p>
            <p className="text-muted-foreground">Add books from the home page to start building your collection!</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
            {wishlistBooks.map((book) => (
              <BookCard key={book.id} book={book} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Wishlist;
