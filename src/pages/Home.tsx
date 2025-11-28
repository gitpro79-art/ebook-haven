import { useState } from 'react';
import Navbar from '@/components/Navbar';
import BookCard from '@/components/BookCard';
import { staticBooks } from '@/data/books';
import { Input } from '@/components/ui/input';
import { Search } from 'lucide-react';

const Home = () => {
  const [searchQuery, setSearchQuery] = useState('');

  const filteredBooks = staticBooks.filter(book =>
    book.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    book.author.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <div className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-primary mb-4">Discover Your Next Read</h1>
          <div className="relative max-w-md">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-muted-foreground" />
            <Input
              type="text"
              placeholder="Search by title or author..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10 h-12"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
          {filteredBooks.map((book) => (
            <BookCard key={book.id} book={book} />
          ))}
        </div>

        {filteredBooks.length === 0 && (
          <div className="text-center py-12">
            <p className="text-lg text-muted-foreground">No books found matching your search.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Home;
