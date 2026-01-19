
import { createClient } from '@supabase/supabase-js';


// Fallback to empty strings if variables are missing to prevent initial crash, 
// but log an error so the developer knows.
const supabaseUrl = import.meta.env.VITE_SUPABASE_URL || "";
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY || "";

if (!supabaseUrl || !supabaseAnonKey) {
    console.error('Missing Supabase environment variables. Check your .env file.');
}

// Only create the client if we have a URL, otherwise export a dummy or null (but createClient might throw on empty string)
// createClient throws "supabaseUrl is required" if it's empty.
export const supabase = supabaseUrl && supabaseAnonKey
    ? createClient(supabaseUrl, supabaseAnonKey)
    : null;

