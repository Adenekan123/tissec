"use client";
import { Header } from "@/component/home";
import { Banner } from "@/component/shared";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Header>
        <Banner
          name="Services"
          description="Quis autem vel eum iure reprehenderit qui in ea voluptate velit
                esse ruam nihil molestiae."
        />
      </Header>
      {children}
    </>
  );
}
