import { supabase } from 'app/supabase';

export async function getNewsArticleData() {
  const { data, error } = await supabase.from('newsroom').select();
  return { data, error };
}
