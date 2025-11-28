import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import { staticBooks } from '@/data/books';
import { Button } from '@/components/ui/button';
import { useToast } from '@/hooks/use-toast';
import { wishlistAPI } from '@/lib/api';
import { BookOpen, Heart, ArrowLeft } from 'lucide-react';

const BookDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { toast } = useToast();
  const [isInWishlist, setIsInWishlist] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const book = staticBooks.find(b => b.id === id);

  useEffect(() => {
    checkWishlistStatus();
  }, [id]);

  const checkWishlistStatus = async () => {
    try {
      const wishlist = await wishlistAPI.getWishlist();
      setIsInWishlist(wishlist.some((item: any) => item.bookId === id));
    } catch (error) {
      // Wishlist check failed silently
    }
  };

  const handleReadNow = () => {
    if (book?.pdfUrl) {
      navigate(`/reader/${id}`);
    } else {
      toast({
        title: "PDF Not Available",
        description: "This book doesn't have a PDF available for reading.",
        variant: "destructive",
      });
    }
  };

  const handleWishlist = async () => {
    if (!book) return;
    setIsLoading(true);

    try {
      if (isInWishlist) {
        await wishlistAPI.removeFromWishlist(book.id);
        setIsInWishlist(false);
        toast({
          title: "Removed from wishlist",
          description: `${book.title} has been removed from your wishlist.`,
        });
      } else {
        await wishlistAPI.addToWishlist(book.id);
        setIsInWishlist(true);
        toast({
          title: "Added to wishlist",
          description: `${book.title} has been added to your wishlist.`,
        });
      }
    } catch (error: any) {
      toast({
        title: "Error",
        description: error.response?.data?.message || "Failed to update wishlist",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  if (!book) {
    return (
      <div className="min-h-screen bg-background">
        <Navbar />
        <div className="container mx-auto px-4 py-12 text-center">
          <h2 className="text-2xl font-bold text-foreground mb-4">Book not found</h2>
          <Button onClick={() => navigate('/home')}>Back to Home</Button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <div className="container mx-auto px-4 py-8">
        <Button 
          variant="ghost" 
          onClick={() => navigate('/home')}
          className="mb-6"
        >
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to Books
        </Button>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="md:col-span-1">
            <div className="sticky top-24">
              <img 
                src={book.coverUrl} 
                alt={book.title}
                className="w-full rounded-lg shadow-xl"
              />
            </div>
          </div>

          <div className="md:col-span-2">
            <h1 className="text-4xl font-bold text-primary mb-2">{book.title}</h1>
            <p className="text-xl text-muted-foreground mb-6">by {book.author}</p>
            
            <div className="flex gap-4 mb-8">
              <Button 
                onClick={handleReadNow}
                size="lg"
                className="bg-primary hover:bg-primary/90"
              >
                <BookOpen className="mr-2 h-5 w-5" />
                Read Now
              </Button>
              <Button 
                onClick={handleWishlist}
                variant="outline"
                size="lg"
                disabled={isLoading}
                className={isInWishlist ? "border-red-500 text-red-500 hover:bg-red-50" : ""}
              >
                <Heart 
                  className={`mr-2 h-5 w-5 ${isInWishlist ? "fill-current" : ""}`} 
                />
                {isInWishlist ? "In Wishlist" : "Add to Wishlist"}
              </Button>
            </div>

            <div className="bg-card rounded-lg p-6 shadow-md">
              <h2 className="text-2xl font-semibold text-foreground mb-4">About this book</h2>
              <p className="text-muted-foreground leading-relaxed text-lg">
                {book.description}
              </p>
            </div>

            {!book.pdfUrl && (
              <div className="mt-6 bg-muted/50 border border-border rounded-lg p-4">
                <p className="text-muted-foreground">
                  <strong>Note:</strong> PDF is not available for this book at the moment.
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookDetails;
