import { useParams, useNavigate } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import { staticBooks } from '@/data/books';
import { Button } from '@/components/ui/button';
import { ArrowLeft } from 'lucide-react';

const PDFReader = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const book = staticBooks.find(b => b.id === id);

  if (!book || !book.pdfUrl) {
    return (
      <div className="min-h-screen bg-background">
        <Navbar />
        <div className="container mx-auto px-4 py-12 text-center">
          <h2 className="text-2xl font-bold text-foreground mb-4">PDF Not Available</h2>
          <p className="text-muted-foreground mb-6">This book doesn't have a PDF available.</p>
          <Button onClick={() => navigate(`/book/${id}`)}>Back to Book Details</Button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Navbar />
      <div className="container mx-auto px-4 py-4">
        <Button 
          variant="ghost" 
          onClick={() => navigate(`/book/${id}`)}
          className="mb-4"
        >
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to Details
        </Button>
        <h2 className="text-2xl font-bold text-primary mb-4">{book.title}</h2>
      </div>
      <div className="flex-1 container mx-auto px-4 pb-4">
        <iframe
          src={book.pdfUrl}
          className="w-full h-full min-h-[600px] rounded-lg shadow-xl border border-border"
          title={book.title}
        />
      </div>
    </div>
  );
};

export default PDFReader;
