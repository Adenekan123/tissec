"use client";
import { BannerContent, Header } from "@/component/home";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Header>
        <BannerContent />
      </Header>
      {children}
    </>
  );
}
