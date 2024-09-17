"use client";
import { useEffect, useState } from "react";
import { createClient } from "@/utils/supabase/server";

const TestButton = () => {
  const [studenter, setStudenter] = useState([]);
  const supabase = createClient(cookieStore);
  const insertData = async () => {
    try {
      const { studenter, error } = await supabase.from("studenter").upsert([
        {
          navn: "ButtonJimmy",
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
      <form method="POST">
        <input type="text" name="name" />
        <input type="email" name="email" />
        <input type="password" name="password" />
        <button type="submit">Create Account</button>
      </form>
      <button
        className="py-2 px-4 rounded-md no-underline text-foreground bg-btn-background hover:bg-btn-background-hover flex items-center group text-sm"
        onClick={insertData}
      >
        Insert Data
      </button>
    </div>
  );
};

export default TestButton;
