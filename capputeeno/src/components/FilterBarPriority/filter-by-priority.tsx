import { useState } from "react";
import { ArrowIcon } from "../Icons/arrow-icon";
import { FilterContainer, PriorityFilter } from "./styles";
import { useFilter } from "@/hooks/useFilter";
import { PriorityTypes } from "@/types/priority-types";

interface FilterByPriorityProps {

}

export function FilterByPriority(props: FilterByPriorityProps) {
  const [isOpen, setIsOpen] = useState(false)
  const { setPriority } = useFilter()

  const handleOpen = () => setIsOpen(prev => !prev)

  const handleUpdatePriority = (value: PriorityTypes) => {
    setPriority(value)
    setIsOpen(false)
  }

  return(
    <FilterContainer>
      <button onClick={handleOpen}>
        Organizar por
        <ArrowIcon />
      </button>
      {isOpen && 
      <PriorityFilter>
        <li onClick={() => handleUpdatePriority(PriorityTypes.NEWS)}>Novidades</li>
        <li onClick={() => handleUpdatePriority(PriorityTypes.MINOR_PRICE)}>Preço: Maior - menor</li>
        <li onClick={() => handleUpdatePriority(PriorityTypes.BIGGEST_PRICE)}>Preço: Menor - maior</li>
        <li onClick={() => handleUpdatePriority(PriorityTypes.POPULARITY)}>Mais vendidos</li>
      </PriorityFilter>
      }
    </FilterContainer>
  )
}