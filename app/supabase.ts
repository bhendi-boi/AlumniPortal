import { createClient } from '@supabase/supabase-js';
import { Database } from 'types';

const supabaseUrl = 'https://ocufbllgoonzjowlkkhp.supabase.co';
const supabaseKey =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im9jdWZibGxnb29uempvd2xra2hwIiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODYyNDAzOTYsImV4cCI6MjAwMTgxNjM5Nn0.7AvANumEf_Xa7BuuRGoYjjgDAQmkHbIooENloU1AwDc';
export const supabase = createClient<Database>(supabaseUrl, supabaseKey);
