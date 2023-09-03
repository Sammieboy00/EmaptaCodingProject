"use client"

import React, { useEffect, useState } from "react";

export default function About() {
  const [data, setData] = useState<{}>({});
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    fetch("https://www.zesty.io/-/instant/7-e93178-vqvclg.json")
      .then(async (res) => {
        const data: string = await res.json();
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
    <div className="p-24">
      {loading ? (
        loadingComponent
      ) : error ? (
        errorComponent
      ) : (
        <div>
          <p>{data.data == null ? "Missing data content": data.data}</p>
        </div>
      )}
    </div>
  )
}
