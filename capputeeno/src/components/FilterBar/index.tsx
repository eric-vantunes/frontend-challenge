'use client';
import { FilterByPriority } from "../FilterBarPriority/filter-by-priority";
import { FilterByType } from "./filter-by-type";
import { FilterContainer } from "./styles";

interface FilterBarProps {

}

export function FilterBar(props: FilterBarProps) {
  return(
    <FilterContainer>
      <FilterByType/>
      <FilterByPriority/>
    </FilterContainer>
  )
}