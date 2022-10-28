# Ar-Product-Card

Este es un paquete de pruevas de despliege en NPM

### Carlos Rueda

## Ejemplo

```
import {ProductCard,
ProductImage,
ProductTitle,
ProductButtons} from 'ar-product-card'

```

```
<ProductCard
        product={product}
        initialValue={{
          count: 4,
          maxCount: 10,
        }}
      >
        {({
          count,
          increaseBy,
          isMaxCountReached,
          product,
          reset,
          maxCount,
        }) => (
          <>
            <ProductImage />
            <ProductTitle />
            <ProductButtons />
          </>
        )}
      </ProductCard>

```
