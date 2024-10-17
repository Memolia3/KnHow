import Header from "../components/layouts/Header";
import * as Top from "@/app/features/top/index";
import type { Metadata } from "next";

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: `KnHow | トップ`,
  };
}

export default function Page() {
  return (
    <>
      <Header title="トップページ" />
    </>
  );
}
