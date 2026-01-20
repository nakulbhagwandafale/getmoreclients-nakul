import { serve } from "https://deno.land/std@0.168.0/http/server.ts";
import { createClient } from "https://esm.sh/@supabase/supabase-js@2";

const corsHeaders = {
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};

serve(async (req) => {
    // Handle CORS preflight
    if (req.method === "OPTIONS") {
        return new Response("ok", { headers: corsHeaders });
    }

    try {
        const supabaseUrl = Deno.env.get("SUPABASE_URL")!;
        const supabaseServiceKey = Deno.env.get("SUPABASE_SERVICE_ROLE_KEY")!;
        const supabase = createClient(supabaseUrl, supabaseServiceKey);

        const event = await req.json();

        console.log("Received Cal.com webhook:", event.triggerEvent);

        // Only process BOOKING_CREATED events
        if (event.triggerEvent === "BOOKING_CREATED") {
            const payload = event.payload;

            const meetingData = {
                name: payload.attendees?.[0]?.name || "Unknown",
                email: payload.attendees?.[0]?.email || "",
                meeting_type: payload.eventType?.title || payload.title || "Meeting",
                meeting_time: payload.startTime,
                meeting_link: payload.metadata?.videoCallUrl || payload.location || "",
                cal_booking_id: String(payload.bookingId || payload.uid),
            };

            const { error } = await supabase.from("meetings").insert(meetingData);

            if (error) {
                console.error("Error inserting meeting:", error);
                return new Response(JSON.stringify({ error: error.message }), {
                    status: 500,
                    headers: { ...corsHeaders, "Content-Type": "application/json" },
                });
            }

            console.log("Meeting saved successfully:", meetingData.email);
        }

        return new Response(JSON.stringify({ success: true }), {
            status: 200,
            headers: { ...corsHeaders, "Content-Type": "application/json" },
        });
    } catch (err) {
        console.error("Webhook error:", err);
        return new Response(JSON.stringify({ error: "Internal server error" }), {
            status: 500,
            headers: { ...corsHeaders, "Content-Type": "application/json" },
        });
    }
});
