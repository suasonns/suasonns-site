"use client";

import { useState } from "react";

export default function Home() {
  return (
    <div style={{ fontFamily: "Arial", padding: "40px" }}>
      <h1>Suason Nursing Services LLC</h1>

      <p>
        We help Home Health and Hospice agencies prepare for surveys,
        strengthen documentation, and manage ADR & TPE audits.
      </p>

      <ContactForm />
    </div>
  );
}

function ContactForm() {
  const [submitted, setSubmitted] = useState(false);

  if (submitted) {
    return <p>Thank you. We will contact you shortly.</p>;
  }

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        setSubmitted(true);
      }}
    >
      <input placeholder="Agency Name" required />
      <br /><br />
      <input placeholder="Email" required />
      <br /><br />
      <button type="submit">Submit</button>
    </form>
  );
}
