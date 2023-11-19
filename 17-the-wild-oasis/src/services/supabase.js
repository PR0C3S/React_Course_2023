import { createClient } from "@supabase/supabase-js";

export const supabaseUrl = "https://hrbjmjkvfypfueiudndr.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImhyYmptamt2ZnlwZnVlaXVkbmRyIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTg2MjMyMzksImV4cCI6MjAxNDE5OTIzOX0.gu2ouxdArhMjn34qz21E4IV76OSrhoLCC8mto5SXl7E";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
