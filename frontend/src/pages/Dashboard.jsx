import { useState } from "react";
import { Appbar } from "../components/AppBar";
import { Balance } from "../components/Balance";
import { Users } from "../components/Users";
import axios from "axios";
import { useSearchParams } from "react-router-dom";

export function Dashboard() {
  const [searchParams] = useSearchParams();
  const username = searchParams.get("username");

  return (
    <>
      <Appbar />
      <Balance userName={username} value={"10000"} />
      <Users />
    </>
  );
}
