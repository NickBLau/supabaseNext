"use client";
import { useEffect, useState } from "react";
import { createClient } from "@/utils/supabase/server";

export default function Home() {
  const [studenter, setStudenter] = useState([]);
  const supabase = createClient(cookieStore);
  const insertData = async () => {
    try {
      const { studenter, error } = await supabase.from("studenter").upsert([
        {
          navn: "Jimmy",
          alder: "22",
          land: "Danmark",
          uddannelse: "Datamatiker",
          fravær: "0.0%",
          uddannelse_start: "2024-08-10",
          arbejder: "false",
        },
      ]);

      if (error) {
        throw error;
      }

      console.log("Data inserted:", studenter);
    } catch (error) {
      console.error("Error inserting data:", error.message);
    }
  };
  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data, error } = await supabase.from("studenter").select("*");

        if (error) {
          throw error;
        }

        setStudenter(studenter);
      } catch (error) {
        console.error("Error fetching data:", error.message);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <button onClick={insertData}>Insert Data</button>
    </div>
  );
}
