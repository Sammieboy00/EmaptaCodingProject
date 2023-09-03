"use client"

import React, { useEffect, useState } from "react";
import Card from "./components/card";

export default function Home() {
  const [data, setData] = useState<string[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    fetch("https://www.zesty.io/-/gql/platform_section.json")
      .then(async (res) => {
        const data: string[] = await res.json();
        setData(data);
      })
      .catch((e) => {
        if (e instanceof Error) {
          setError(e.message);
        }
      })
      .finally(() => {
        setLoading(false);
      })
  }, [])


  const loadingComponent = <div>Loading...</div>;

  const errorComponent = <div className="text-red-500">Error: {error}</div>;

  return (
    <div className="p-6">
      {loading ? (
        loadingComponent
      ) : error ? (
        errorComponent
      ) : (
        <div className="container my-12 mx-auto px-4 md:px-12">
          <div className="flex flex-wrap -mx-1 lg:-mx-4">
            {data.map((cardDetail):any => {
              return <Card title={cardDetail.title} textContent={cardDetail.text_content} />
            })}
          </div>
        </div>
      )}
    </div>
  )
}
