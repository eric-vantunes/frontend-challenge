'use client';

import { DefaultPageLayout } from "@/components/DefaultPageLayout/default-page-layout";
import { FilterBar } from "@/components/FilterBar"
import { ProductList } from "@/components/ProductsList"
import { styled } from "styled-components"

const PageWrapper = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 12px 24px;
  min-height: 100vh;
  background-color: var(--bg-primary);

  @media (min-width: ${props => props.theme.desktopBreakpoint}) {
    padding: 34px 160px;
  }
`

export default function Home() {
  return (
    <DefaultPageLayout>
      <PageWrapper>
        <FilterBar />
        <ProductList />
      </PageWrapper>
    </DefaultPageLayout>
  )
}
