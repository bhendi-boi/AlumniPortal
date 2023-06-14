import { supabase } from 'app/supabase';

export async function getNewsArticleData() {
  const { data, error } = await supabase.from('newsroom').select();
  return { data, error };
}

export async function getANewsArticleData(id: number) {
  const { data, error } = await supabase.from('newsroom').select().eq('id', id);
  return { data, error };
}
