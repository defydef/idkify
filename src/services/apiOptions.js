import supabase from "../supabaseConfig/supabase";

export default async function getOptions() {
  let { data, error } = await supabase.from("options").select("optionItems");
  if (error) {
    console.error(error);
    throw new Error("Options data could not be loaded");
  }
  const { optionItems } = data[0];
  return optionItems;
}
