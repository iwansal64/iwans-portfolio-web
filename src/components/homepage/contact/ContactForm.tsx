import { useState } from "react";

export default function ContactForm() {
      const [name, setName] = useState("");
      const [description, setDescription] = useState("");

      function sendMessage() {
            const sanitizedDescription = encodeURIComponent(`Hello! My name is ${name}! I have a project that goes like this:\n\n${description}`);
            try {
                  const targetUrl = new URL(`mailto:iwancode64@gmail.com?subject=Connect%20Project&body=${sanitizedDescription}`);
                  window.open(targetUrl, "_blank");
            }
            catch {
                  alert("link generation error. Could you please try again with different description of the project? :>")
            }
      }
      
      return <>
            <div className="w-full flex flex-col gap-2">
                  <p>Your Name <span className="opacity-50">(Please?)</span></p>
                  <input className="w-full border-b border-white/20 py-2 px-4" type="text" onChange={(event) => setName(event.target.value)}></input>
            </div>
            <div className="w-full flex flex-col gap-2">
                  <p>What software you want to build?</p>
                  <input className="w-full border-b border-white/20 py-2 px-4" type="text" onChange={(event) => setDescription(event.target.value)}></input>
            </div>
            <div className="mt-4 flex justify-center items-center">
                  <button className="border border-white/20 py-2 px-8 rounded-full" onClick={sendMessage}>
                        Let's Collab!
                  </button>
            </div>
      </>;
}