import Header from "@/app/components/layouts/Header";
import * as Top from "@/app/features/top/index";
import type { Metadata } from "next";

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: `KnHow | ログイン`,
  };
}

export default function Page() {
  return (
    <>
      <Header title="ログイン" />
    </>
  );
}
