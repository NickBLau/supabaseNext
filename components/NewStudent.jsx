import { headers, cookies } from "next/headers";
import { createClient } from "@/utils/supabase/server";

const NewStudent = () => {
  const createAccount = async (formData) => {
    "use server";
    const cookieStore = cookies();
    const supabase = createClient(cookieStore);
    const { studenter, error } = await supabase.from("studenter").insert([
      {
        navn: formData.get("name"),
        alder: formData.get("alder"),
        land: formData.get("land"),
        uddannelse: formData.get("uddannelse"),
        uddannelse_start: formData.get("uddannelse_start"),
      },
    ]);
  };

  return (
    <form
      className="flex items-center flex-wrap gap-4 m-24 bg-slate-400 border p-2 border-gray-600 "
      action={createAccount}
      method="POST"
    >
      <label htmlFor="name">Student navn</label>
      <input
        className="p-2 border border-black"
        placeholder="John doe..."
        type="text"
        name="name"
      />
      <label htmlFor="alder">Student alder</label>
      <input
        className="p-2 border border-black"
        type="text"
        name="alder"
        placeholder="19..."
      />
      <label htmlFor="land">Student land</label>
      <input
        className="p-2 border border-black"
        type="text"
        name="land"
        placeholder="Danmark..."
      />
      <label htmlFor="uddannelse">Student uddannelse</label>
      <input
        className="p-2 border border-black"
        type="text"
        name="uddannelse"
        placeholder="Kok..."
      />
      <label htmlFor="date">Student start</label>
      <input
        className="p-2 border border-black"
        type="date"
        name="uddannelse_start"
        placeholder="1999-01-01"
      />

      <input
        className=" bg-gray-400 p-2  border border-black"
        type="submit"
        value="Indskriv student"
      />
    </form>
  );
};

export default NewStudent;
