import { createClient } from '@supabase/supabase-js';
import { Database } from 'types';

const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY as string;
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL as string;

export const supabase = createClient<Database>(supabaseUrl, supabaseKey);
