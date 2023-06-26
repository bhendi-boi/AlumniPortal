import { createClient } from '@supabase/supabase-js';
import { Database } from 'types';

const supabaseUrl = 'https://ocufbllgoonzjowlkkhp.supabase.co';
const supabaseKey = process.env.SUPABASE_KEY as string;

export const supabase = createClient<Database>(supabaseUrl, supabaseKey);
