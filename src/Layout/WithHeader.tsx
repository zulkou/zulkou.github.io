import { ReactNode } from "react"
import Header from "../Components/Header"

interface WithHeaderProps {
  children: ReactNode;
  activeSection: string;
}

const WithHeader = ( {children, activeSection}: WithHeaderProps ) => {
  return (
    <div className="text-[#121b1c] dark:text-[#e3eced]">
      <Header activeSection={activeSection} />
      <div className="flex flex-col max-w-4xl mx-auto">
        {children}
      </div>
    </div>
  )
}

export default WithHeader
