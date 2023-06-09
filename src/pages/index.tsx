import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "~/styles/Home.module.css";
import { Button, TextField } from "@mui/material";
import { useState } from "react";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const [prompt, setPrompt] = useState<string>("");
  const [response, setResponse] = useState<string>();

  const submit = () => {
    console.log("submitting....");
    fetch("/api/hello", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ prompt }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setResponse(data.response);
      });
  };

  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <div>
          <TextField
            id="outlined-basic"
            label="Outlined"
            variant="outlined"
            value={prompt}
            onChange={(e) => setPrompt(e.target.value)}
          />
          <Button variant="contained" onClick={submit}>
            Hello World
          </Button>
        </div>
        <div>{response}</div>
      </main>
    </>
  );
}
