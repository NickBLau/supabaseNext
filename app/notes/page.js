import { createClient } from "@/utils/supabase/server";
import { cookies } from "next/headers";
import Link from "next/link";
import NewStudent from "../../components/NewStudent";
export default async function Page() {
  const cookieStore = cookies();
  const supabase = createClient(cookieStore);
  // const { data, error } = await supabase.from("studenter").insert([
  //   {
  //     navn: "Jimmy",
  //     alder: "22",
  //     land: "Danmark",
  //     uddannelse: "Datamatiker",
  //     fravær: "0.0%",
  //     uddannelse_start: "2024-08-10",
  //     arbejder: "false",
  //   },
  // ]);

  const { data: studenter } = await supabase.from("studenter").select();

  return (
    <>
      <div className="flex mb-10 justify-around pt-10">
        <Link
          href="/"
          className=" py-2  h-20 w-20 px-4 rounded-md no-underline text-foreground bg-btn-background hover:bg-btn-background-hover flex items-center group text-sm"
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
          </svg>
          Back
        </Link>
        <NewStudent></NewStudent>
      </div>
      <div className="mb-10 border-2 p-2 m-auto  w-11/12 border-black border-solid bg-slate-300">
        {studenter.map((student) => (
          <div className="flex justify-between border border-gray-400 text-left p-3">
            <p>Student ID {student.id}</p>
            <p>Navn {student.navn}</p>
            <p>Alder {student.alder}</p>
            <p>Land {student.land}</p>
            <p>Uddannelse {student.uddannelse}</p>
            <p>Start på uddannelse {student.uddannelse_start}</p>
          </div>
        ))}
      </div>
    </>
  );
}
