import { createClient } from "@supabase/supabase-js";
import { projectUrl, key } from "../supabaseConfig/supabase";

const supabase = createClient(projectUrl, key);
