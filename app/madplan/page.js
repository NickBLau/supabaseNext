import { createClient } from "@/utils/supabase/server";
import { cookies } from "next/headers";
import Link from "next/link";
export default async function Page() {
  const cookieStore = cookies();
  const supabase = createClient(cookieStore);
  const { data: madplanner } = await supabase.from("madplanner").select();

  return (
    <div className="flex pl-10 items-start gap-5  bg-green-400 pb-40 pt-40 text-center justify-center ">
      <Link
        href="/"
        className="absolute left-8 top-8 py-2 px-4 rounded-md no-underline text-foreground bg-btn-background hover:bg-btn-background-hover flex items-center group text-sm"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="mr-2 h-4 w-4 transition-transform group-hover:-translate-x-1"
        >
          <polyline points="15 18 9 12 15 6" />
        </svg>{" "}
        Back
      </Link>
      <div className="flex flex-col gap-10 border border-red-600 border-solid p-2">
        <p>Uge Dag:</p>
        <p>Frugt:</p>
        <p>Sandwich:</p>
        <p>Dagens ret:</p>
      </div>
      {madplanner.map((madplan) => (
        <div
          key={madplan.id}
          className="flex flex-col gap-10 border border-gray-600 border-solid p-2"
        >
          <p>{madplan.dag}</p>
          <p>{madplan.frugt}</p>
          <p>{madplan.sandwich}</p>
          <p>{madplan.varme_retter}</p>
        </div>
      ))}
    </div>
  );
}
