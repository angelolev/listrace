"use client";
import { validateEmail } from "@/utils";
import { FormEvent, useState } from "react";

export default function Newsletter() {
  const [message, setMessage] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [messageCssClass, setMessageCssClass] =
    useState<string>("text-primary-500");

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    if (!validateEmail(email)) {
      setMessage("Account invalid");
      return;
    }

    try {
      const res = await fetch("/api/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email }),
      });

      if (res.ok) {
        setMessage("Email sent successfully!");
        setMessageCssClass("text-green");
      } else {
        const errorData = await res.json();
        setMessage(`Failed to send email: ${errorData.error}`);
      }
    } catch (error: any) {
      setMessage(`An error occurred: ${error.message}`);
    }
    setEmail("");
  };

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
          <form
            className="flex flex-col items-center md:flex-row md:flex-wrap md:justify-center"
            onSubmit={handleSubmit}
            noValidate
          >
            <input
              type="email"
              name="email"
              className="text-[16px] border-[1px] border-white shadow-category-card pl-[30px] py-4 mb-6 mt-8 w-full md:w-3/5"
              placeholder="Enter your email here"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <button
              type="submit"
              className="w-fit bg-primary-500 text-white py-4 px-6 md:h-[60px] md:mt-[7px]"
            >
              Create Account
            </button>
            {message && (
              <p className={`${messageCssClass} mt-2 w-full`}>{message}</p>
            )}
          </form>
        </div>
      </div>
    </div>
  );
}
