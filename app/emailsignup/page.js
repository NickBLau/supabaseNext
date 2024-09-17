import Button from "../../components/Button";
import Link from "next/link";
import { createClient } from "@/utils/supabase/server";
import { cookies } from "next/headers";

const cookieStore = cookies();
const supabase = createClient(cookieStore);
const { data, error } = await supabase
  .from("newsletter")
  .insert([{ email: "Jimmytest@asdas", user: "Jimmy" }]);

const { data: newsletter } = await supabase.from("newsletter").select();

const emailsignup = () => {
  return (
    <>
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
      <div className="mt-20">
        <form className="w-full border border-slate-950 ">
          <input className="w-full bg-green-300 " type="text" />
        </form>
      </div>{" "}
      <Button></Button>
    </>
  );
};

export default emailsignup;
