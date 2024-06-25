"use client";
import { FormEvent, useState } from "react";

export default function Newsletter() {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setIsLoading(true);
    setError(null);

    try {
      const formData = new FormData(event.currentTarget);
      const response = await fetch("/api/submit", {
        method: "POST",
        body: formData,
      });

      if (!response.ok) {
        throw new Error("Failed to submit the data. Please try again.");
      }

      const data = await response.json();
    } catch (error) {
      setError(error.message);
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <div className="newsletter ">
      <div className="container mx-auto max-w-6xl text-center px-6">
        <h2 className="uppercase mb-[28px] text-[24px]">
          do you want to add your business listing with us?
        </h2>
        <p className="paragraph">
          Listrace offer you to list your business with us and we very much able
          to promote your Business.
        </p>
        <div>
          {error && <div style={{ color: "red" }}>{error}</div>}
          <form onSubmit={onSubmit}>
            <input
              type="email"
              name="email"
              className="text-[16px] border-[1px] border-white shadow-category-card pl-[30px] py-3 mb-6 mt-8 w-full"
              placeholder="Enter your email here"
            />
            <button
              type="submit"
              disabled={isLoading}
              className="w-fit bg-primary-500 text-white py-4 px-6"
            >
              {isLoading ? "Loading..." : "Create Account"}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
