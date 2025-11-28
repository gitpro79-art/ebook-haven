export interface Book {
  id: string;
  title: string;
  author: string;
  description: string;
  coverUrl: string;
  pdfUrl?: string;
}

export const staticBooks: Book[] = [
  {
    id: "1",
    title: "The Adventures of Sherlock Holmes",
    author: " Shina Doyle",
    description: "A collection of twelve short stories featuring the famous detective Sherlock Holmes. These tales of mystery and deduction showcase Holmes's brilliant mind as he solves some of London's most perplexing cases.",
    coverUrl: "https://images.unsplash.com/photo-1544947950-fa07a98d237f?w=400&h=600&fit=crop",
    pdfUrl: "https://www.gutenberg.org/files/1661/1661-h/1661-h.htm"
  },
  {
    id: "2",
    title: "Pride and Prejudice",
    author: "Jane Austen",
    description: "A timeless romance following Elizabeth Bennet as she navigates issues of marriage, morality, and misunderstandings in Georgian era England.",
    coverUrl: "https://images.unsplash.com/photo-1512820790803-83ca734da794?w=400&h=600&fit=crop",
    pdfUrl: "https://www.gutenberg.org/files/1342/1342-h/1342-h.htm"
  },
  {
    id: "3",
    title: "To Kill a Mockingbird",
    author: "Harper Lee",
    description: "A gripping tale of racial injustice and childhood innocence set in the American South during the 1930s.",
    coverUrl: "https://images.unsplash.com/photo-1543002588-bfa74002ed7e?w=400&h=600&fit=crop"
  },
  {
    id: "4",
    title: "1984",
    author: "George Orwell",
    description: "A dystopian masterpiece depicting a totalitarian future where Big Brother watches everything and freedom is but a distant memory.",
    coverUrl: "https://images.unsplash.com/photo-1495446815901-a7297e633e8d?w=400&h=600&fit=crop"
  },
  {
    id: "5",
    title: "The Great Gatsby",
    author: "F. Scott Fitzgerald",
    description: "A portrait of the Jazz Age in all its decadence and excess, exploring themes of idealism, social upheaval, and the American Dream.",
    coverUrl: "https://images.unsplash.com/photo-1519682337058-a94d519337bc?w=400&h=600&fit=crop"
  },
  {
    id: "6",
    title: "Moby-Dick",
    author: "Herman Melville",
    description: "The epic tale of Captain Ahab's obsessive quest to hunt down the white whale that took his leg, exploring themes of fate and obsession.",
    coverUrl: "https://images.unsplash.com/photo-1541963463532-d68292c34b19?w=400&h=600&fit=crop",
    pdfUrl: "https://www.gutenberg.org/files/2701/2701-0.pdf"
  },
  {
    id: "7",
    title: "Jane Eyre",
    author: "Charlotte Brontë",
    description: "A coming-of-age story following an orphan girl who becomes a governess and falls in love with her mysterious employer, Mr. Rochester.",
    coverUrl: "https://images.unsplash.com/photo-1524578271613-d550eacf6090?w=400&h=600&fit=crop"
  },
  {
    id: "8",
    title: "The Catcher in the Rye",
    author: "J.D. Salinger",
    description: "A controversial novel about teenage rebellion and alienation, following Holden Caulfield through his experiences in New York City.",
    coverUrl: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=600&fit=crop"
  },
  {
    id: "9",
    title: "Wuthering Heights",
    author: "Emily Brontë",
    description: "A tale of passion and revenge set on the Yorkshire moors, following the tempestuous relationship between Catherine Earnshaw and Heathcliff.",
    coverUrl: "https://images.unsplash.com/photo-1516979187457-637abb4f9353?w=400&h=600&fit=crop"
  },
  {
    id: "10",
    title: "The Picture of Dorian Gray",
    author: "Oscar Wilde",
    description: "A philosophical novel about a young man who sells his soul for eternal youth and beauty, while his portrait ages and reflects his sins.",
    coverUrl: "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=400&h=600&fit=crop"
  }
];