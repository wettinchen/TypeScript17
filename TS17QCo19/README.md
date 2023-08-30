## TypeScript 17
## Chapter 17: Shopping Cart-Part 2
It is my coding practice with the TUTORIAL of Dave Gray. 

## Source
### Dave Gray 的 TypeScript 資源
https://github.com/gitdagray/typescript-course

### Dave Gray 的 TypeScript 課程
https://youtube.com/playlist?list=PL0Zuz27SZ-6NS8GXt5nPrcYpust89zq_b&si=8IJALfXOcur2OO_K

### Dave Gray 的 YouTube 頻道
https://www.youtube.com/@DaveGrayTeachesCode

## Quick Concept offline
###  1. Intro
        教學影片開頭和介紹

###  2. Welcome

###  3. Project Overview

###  4. Initial Components
        (1)新增 Header.tsx
        (2)新增 Footer.tsx
        (3)新增 ProductList.tsx
        (4)新增 Cart.tsx
        (5)輸入 rafce + Tab

###  5. App component
        (1)匯入 Header
        (2)匯入 Footer
        (3)匯入 ProductList
        (4)匯入 Cart
        (5)匯入 useState
        (6)宣告 viewCart 使用 useState
        (7)宣告 pageContent
        (8)宣告 content
        (9)回傳 content

###  6. Header & Nav components
        Header.tsx
        (1)設定 PropsType 類型
        (2)加入 viewCart 和 setViewCart
        (3)宣告 content
        (4)加入 header元素
        (5)回傳 content

        Nav.tsx
        (6)新增 Nav.tsx
        (7)輸入 rafce + Tab
        (8)設定 PropsType 類型
        (9)加入 viewCart 和 setViewCart
        (10)宣告 button
        (11)宣告 content
        (12)回傳 content

        Header.tsx
        (13)匯入 Nav
        (14)加入 Nav元素

###  7. useCart Custom Hook
        (1)新增資料夾 hooks

        useCart.tsx
        (2)新增 useCart.tsx
        (3)輸入 rafce + Tab
        (4)匯入 useContext
        (5)匯入 CartContext
        (6)匯入 UseCartContextType
        (7)宣告 useCart
        (8)匯出 useCart

        Header.tsx
        (9)匯入 useCart
        (10)使用 useCart，宣告 totalItems 和 totalPrice
        (11)加入 totalItems 和 totalPrice

###  8. Footer component
        (1)匯入 useCart
        (2)設定 PropsType 類型
        (3)使用 useCart，宣告 totalItems 和 totalPrice
        (4)宣告 year
        (5)宣告 pageContent
        (6)宣告 content
        (7)回傳 content

###  9. Progress Preview
        在 terminal 輸入 npm run dev

### 10. Products Data
        不使用 products.json 匯入資料

### 11. useProducts Custom Hook
        (1)新增 useProducts.tsx
        (2)輸入 rafce + Tab
        (3)匯入 useContext
        (4)匯入 ProductsContext
        (5)匯入 UseProductsContextType
        (6)宣告 useProducts
        (7)匯出 useProducts

### 12. ProductList component
        ProductList.tsx
        (1)匯入 useCart
        (2)匯入 useProducts
        (3)匯入 useProductsContextType
        (4)使用 useCart
        (5)使用 useProducts
        (6)宣告 pageContent
        (7)匯入 ReactElement

        product.tsx
        (8)新增 Product.tsx
        (9)輸入 rafce + Tab

        ProductList.tsx
        (10)匯入 Product
        (11)加入 Product 元素
        (12)宣告 content
        (13)回傳 content

### 13. Product component Part 1
        (1)匯入 ProductType
        (2)匯入 ReducerActionType, ReducerAction
        (3)設定 PropsType 類型
        (4)宣告 Product
        (5)匯入 ReactElement

### 14. Dynamic Images with Vite & React
        (1)宣告 img
        (2)在控制台顯示 img

### 15. Product component Part 2
        (1)宣告 onAddToCart
        (2)宣告 itemInCart
        (3)宣告 content
        (4)回傳 content

### 16. Products Provider & Cart Provider
        (1)匯入 CartProvider
        (2)匯入 ProductsProvider
        (3)加入 CartProvider 元素
        (4)加入 ProductsProvider 元素

### 17. Progress Preview

### 18. Cart component
        Cart.tsx
        (1)匯入 useCart
        (2)匯入 useState

        CartLineItem.tsx
        (3)新增 CartLineItem.tsx
        (4)輸入 rafce + Tab

        Cart.tsx
        (5)匯入 CartLineItem
        (6)使用 useState，宣告 confirm
        (7)使用 useCart
        (8)宣告 onSubmitOrder
        (9)宣告 pageContent
        (10)宣告 content
        (11)回傳 content

### 19. CartLineItem component
        (1)匯入 CartItemType
        (2)匯入 ReducerAction
        (3)匯入 ReducerActionType
        (4)設定 PropsType 類型
        (5)宣告 CartLineItem
        (6)宣告 img
        (7)宣告 lineTotal
        (8)宣告 highestQty
        (9)宣告 optionValues
        (10)宣告 options
        (11)匯入 ReactElement
        (12)宣告 onChangeQty
        (13)匯入 ChangeEvent
        (14)宣告 onRemoveFromCart
        (15)宣告 content
        (16)回傳 content

### 20. Completed Project

### 21. Optimizing Cart Line Items
        (1)匯入 memo
        (2)使用 memo 宣告 MemoizedCartLineItem
        (3)匯出 MemoizedCartLineItem
        (4)設定 areItemsEqual 函式
        (5)使用 areItemsEqual 作為參數

### 22. Optimizing Products
        (1)匯入 memo
        (2)使用 memo 宣告 MemoizedProduct
        (3)匯出 MemoizedProduct
        (4)設定 areProductEqual 函式
        (5)使用 areProductEqual 作為參數

# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
   parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: ['./tsconfig.json', './tsconfig.node.json'],
    tsconfigRootDir: __dirname,
   },
```

- Replace `plugin:@typescript-eslint/recommended` to `plugin:@typescript-eslint/recommended-type-checked` or `plugin:@typescript-eslint/strict-type-checked`
- Optionally add `plugin:@typescript-eslint/stylistic-type-checked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and add `plugin:react/recommended` & `plugin:react/jsx-runtime` to the `extends` list
