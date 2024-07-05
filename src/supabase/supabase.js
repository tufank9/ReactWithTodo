import { createClient } from "@supabase/supabase-js";

const supabaseUrl = 'https://zvtcqyhkqzsqomulnqsb.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inp2dGNxeWhrcXpzcW9tdWxucXNiIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTQ4OTkzNTIsImV4cCI6MjAzMDQ3NTM1Mn0.ktoAY-zvIl3WyX2L-nxE6-jVnddWxBaq9sFKz_RBIa8';
export const supabase = createClient(supabaseUrl, supabaseKey);
