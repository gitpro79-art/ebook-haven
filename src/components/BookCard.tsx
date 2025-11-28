import { Link } from 'react-router-dom';
import { Book } from '@/data/books';
import { Card, CardContent } from '@/components/ui/card';

interface BookCardProps {
  book: Book;
}

const BookCard = ({ book }: BookCardProps) => {
  return (
    <Link to={`/book/${book.id}`}>
      <Card className="group overflow-hidden h-full transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
        <CardContent className="p-0">
          <div className="aspect-[2/3] overflow-hidden">
            <img 
              src={book.coverUrl} 
              alt={book.title}
              className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
            />
          </div>
          <div className="p-4">
            <h3 className="font-semibold text-lg line-clamp-2 text-foreground group-hover:text-primary transition-colors">
              {book.title}
            </h3>
            <p className="text-sm text-muted-foreground mt-1">{book.author}</p>
          </div>
        </CardContent>
      </Card>
    </Link>
  );
};

export default BookCard;
