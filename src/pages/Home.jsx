import supabase from "../config/supabaseClient";

export default function Home() {
  console.log(supabase);

  return (
    <div className="page home">
      <h2>Home</h2>
    </div>
  );
}
