
import { supabase } from '../src/lib/supabaseClient';

async function checkBucket() {
    if (!supabase) {
        console.error("Supabase client not initialized");
        return;
    }

    const { data, error } = await supabase.storage.listBuckets();

    if (error) {
        console.error("Error listing buckets:", error);
    } else {
        console.log("Available Buckets:", data.map(b => b.name));
        const exists = data.find(b => b.name === 'testimonial-images');
        if (!exists) {
            console.error("CRITICAL: 'testimonial-images' bucket does NOT exist!");
        } else {
            console.log("'testimonial-images' bucket exists.");
            console.log("Is Public:", exists.public);
        }
    }
}

checkBucket();
