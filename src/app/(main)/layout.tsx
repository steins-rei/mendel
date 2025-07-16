import NavBar from "@/components/layout/NavigationBar/NavigationBar";
import CoreContent from "@/components/layout/CoreContent/CoreContent";

export default function MainRootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      <NavBar />
      <CoreContent>{ children }</CoreContent>
    </>
  )
}