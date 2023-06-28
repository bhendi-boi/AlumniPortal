import { supabase } from 'app/supabase';

export async function getAnActivityData(id: number) {
  const { data, error } = await supabase
    .from('activities')
    .select()
    .eq('id', id);
  return { data, error };
}
