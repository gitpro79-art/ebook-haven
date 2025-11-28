import { supabase } from '@/integrations/supabase/client';

export const wishlistService = {
  getWishlist: async () => {
    const { data, error } = await supabase
      .from('wishlist')
      .select('*')
      .order('created_at', { ascending: false });
    
    if (error) throw error;
    return data;
  },

  addToWishlist: async (bookId: string) => {
    const { data: { user } } = await supabase.auth.getUser();
    if (!user) throw new Error('User not authenticated');

    const { error } = await supabase
      .from('wishlist')
      .insert({ book_id: bookId, user_id: user.id });
    
    if (error) throw error;
  },

  removeFromWishlist: async (bookId: string) => {
    const { data: { user } } = await supabase.auth.getUser();
    if (!user) throw new Error('User not authenticated');

    const { error } = await supabase
      .from('wishlist')
      .delete()
      .eq('book_id', bookId)
      .eq('user_id', user.id);
    
    if (error) throw error;
  },

  checkInWishlist: async (bookId: string) => {
    const { data: { user } } = await supabase.auth.getUser();
    if (!user) return false;

    const { data, error } = await supabase
      .from('wishlist')
      .select('id')
      .eq('book_id', bookId)
      .eq('user_id', user.id)
      .maybeSingle();
    
    if (error) throw error;
    return !!data;
  },
};
