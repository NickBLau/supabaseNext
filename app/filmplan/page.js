import { createClient } from "@/utils/supabase/server";
import { cookies } from "next/headers";
import Link from "next/link";
export default async function Page() {
  const cookieStore = cookies();
  const supabase = createClient(cookieStore);
  const { data: filmplanner } = await supabase.from("filmplanner").select();
  console.log(filmplanner);

  return (
    <div className="flex flex-wrap pl-10 items-start gap-5  bg-blue-400 pb-40 pt-40 text-center justify-center ">
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
      {filmplanner.map((filmplan) => (
        <div
          key={filmplan.id}
          className="flex flex-col gap-10 border w-80  border-gray-600 border-solid p-2"
        >
          <p>{filmplan.film_navn}</p>
          <p>{filmplan.film_score}% / 100</p>
          <p className="min-h-36">
            {filmplan.film_description.length > 25
              ? filmplan.film_description.split(" ").slice(0, 25).join(" ") +
                "..."
              : filmplan.film_description}
          </p>

          <p>{filmplan.film_duration} duration</p>
          <p>{filmplan.film_votes} votes</p>
          <p>{filmplan.film_release} release-date</p>
          <span>
            <p>{filmplan.film_budget.toLocaleString()}$</p>
            <p>total budget</p>
          </span>
          <span>
            <p>{filmplan.film_revenue.toLocaleString()}$ </p>
            <p>total revenue</p>
          </span>
        </div>
      ))}
    </div>
  );
}
