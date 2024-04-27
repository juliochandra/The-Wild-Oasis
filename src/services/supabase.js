import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://xsohnxlqmiefmhtlnbry.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inhzb2hueGxxbWllZm1odGxuYnJ5Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTQyMDEyNjIsImV4cCI6MjAyOTc3NzI2Mn0.Cw6Jnly1ytCJZ9gE9ZFFmg7FN3Rmv2Cn41RIPtbRKL4";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
