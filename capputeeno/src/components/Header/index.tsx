'use client';
import { useFilter } from "@/hooks/useFilter";
import { CartControl } from "../Cart";
import { PrimaryInputWSearchIcon} from "../primary-input";
import { TagHeader, Logo } from "./styles";
import { Saira_Stencil_One } from "next/font/google";

const sairaStencil = Saira_Stencil_One({
  weight: ['400'],
  subsets: ['latin']
})

interface HeaderProps {

}

export function Header(props : HeaderProps) {
  const {setSearch, search} = useFilter();
  return (
    <TagHeader>
      <Logo className={sairaStencil.className}>Capputeeno</Logo>
      <div>
        <PrimaryInputWSearchIcon
          value={search}
          handleChange={setSearch} 
          placeholder="Procurando por algo específico?"/>
        <CartControl/>
      </div>
    </TagHeader>
  )
}