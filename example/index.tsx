import 'react-app-polyfill/ie11';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { ProductCard, ProductImage, ProductButtons, ProductTitle } from '../.';

const App = () => {
  return (
    <ProductCard
      product={{
        id: '1',
        title: 'Coffe Mug - Card',
        // img: './coffee-mug.png',
      }}
      initialValue={{
        count: 4,
        maxCount: 10,
      }}
    >
      {({ count, increaseBy, isMaxCountReached, product, reset, maxCount }) => (
        <>
          <ProductImage />
          <ProductTitle />
          <ProductButtons />
        </>
      )}
    </ProductCard>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
