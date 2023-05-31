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

  const handleAddToCart = () => {
    let cartItems = localStorage.getItem('cart-items')
    if(cartItems) {
      let cartItemsArray = JSON.parse(cartItems)

      let existProductIndex = cartItemsArray.findIndex((item: { id: string; }) => item.id === searchParams.id)

      if(existProductIndex != -1) {
        cartItemsArray[existProductIndex].quantity += 1
      } else {
        cartItemsArray.push({...data, quantity: 1, id: searchParams.id,})
      }

      localStorage.setItem('cart-items', JSON.stringify(cartItemsArray,))
    } else {
      const newCart = [{...data, id: searchParams.id, quantity: 1}]
      localStorage.setItem('cart-items', JSON.stringify(newCart))
    }
  }
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
        <button onClick={handleAddToCart}>
          <ShopBagIcon />
          Adicionar ao carrinho
        </button>
      </div>
    </section>
  </Container>
</DefaultPageLayout>
  )
}