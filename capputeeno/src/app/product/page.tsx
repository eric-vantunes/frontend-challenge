"use client";
import { DefaultPageLayout } from "@/components/DefaultPageLayout/default-page-layout";
import {Container, ProductInfo} from "./styles"
import { BackButton } from "@/components/back-button";
import { useProduct } from "@/hooks/useProduct";
import { formatPrice } from "@/utils/format-price";
import { ShopBagIcon } from "@/components/Icons/shopping-bag";

interface ProductProps {

}

export default function Product({ searchParams }: { searchParams: {id: string} }) {
  const {data} = useProduct(searchParams.id)

  console.log(data)
  return (
  <DefaultPageLayout>
    <Container>
      <BackButton navigate="/"/>
      <section>
        <img src={data?.image_url} alt="" />
        <div>
          <ProductInfo>
            <span>{data?.category}</span>
            <h2>{data?.name}</h2>
            <span>{formatPrice(data?.price_in_cents ?? 0)}</span>
            <p>Frete de R$40,00 para todo o Brasil. Grátis para compras acima de R$900,00.</p>
            <div>
            <h3>Descrição</h3>
            <p>{data?.description}</p>
          </div>
        </ProductInfo>
        <button>
          <ShopBagIcon />
          Adicionar ao carrinho
        </button>
      </div>
    </section>
  </Container>
</DefaultPageLayout>
  )
}