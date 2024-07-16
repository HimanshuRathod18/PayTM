import React from "react";
import { Appbar } from "../components/AppBar";
import { Balance } from "../components/Balance";
import { Users } from "../components/Users";

export function Dashboard() {
  return (
    <>
      <Appbar />
      <Balance value={10000} />
      <Users />
    </>
  );
}
