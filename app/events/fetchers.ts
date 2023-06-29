import { supabase } from 'app/supabase';

export async function getActivitiesData() {
  const { data, error } = await supabase
    .from('activities')
    .select()
    .order('time', { ascending: false });
  return { data, error };
}
export async function getAnActivityData(id: number) {
  const { data, error } = await supabase
    .from('activities')
    .select()
    .eq('id', id);
  return { data, error };
}
