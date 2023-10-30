# Cotask Coffee

Cotask Coffee is a fictional e-commerce website that sells coffee drinks, accessories, coffee beans, also owns coffee shops around the world. This project shows what a website for such a company might look like.

## Explore the website
https://cotask-coffee-shop.web.app/

or
1. `git clone https://github.com/Per4atku/coffee-react.git`
2. `cd coffee-react`
3.  `npm i`  or  `yarn`
4. `npm run dev` or `yarn dev`

## Technologies Used
- React
- Vitejs
- Redux Toolkit (+redux-persist)
- React Router
- Tailwind CSS
- React Lazy
- [react-slick](https://react-slick.neostack.com/ "react-slick")
- [Material UI](https://mui.com/ "Material UI")

## Features
### Menu page & Cart
The site has a page with products (Menu/Our Products). On this page user can add a product to cart, increase/decrease the number of products in cart. And also select [Hot], [Cold] or default product (if supported).

The cart is made with *Redux Toolit + redux-persist*

![Product Item preview](https://skrinshoter.ru/s/301023/bxGFrbIT.jpg?download=1&name=%D0%A1%D0%BA%D1%80%D0%B8%D0%BD%D1%88%D0%BE%D1%82-30-10-2023%2012:56:47.jpg "Product Item preview")


![Cart preview](https://skrinshoter.ru/s/301023/87SfcdEK.jpg?download=1&name=%D0%A1%D0%BA%D1%80%D0%B8%D0%BD%D1%88%D0%BE%D1%82-30-10-2023%2012:57:09.jpg "Cart preview")

Product items json: `/src/data/products.json`

### Coffee Build Your Base - Slider
Used *react-slick* to create slider. 

![Slider preview](https://im.ezgif.com/tmp/ezgif-1-729e76690c.gif "Slider preview")


Slider items: `/src/pages/elements/Base.items.js`
### MUI Components
#### Reservation Components
Used custom styled *mui* components in Reservation element:
- TextField
- DatePicker
- TimeField
- Select

  
![Reservation preview](https://im.ezgif.com/tmp/ezgif-1-355c6547c7.gif "Reservation preview")
#### Product item Skeleton
Used custom *mui* Skeleton component and *React Lazy* for not loaded Product Cards

![Skeleton preview](https://im.ezgif.com/tmp/ezgif-1-8bb6dab256.gif "Skeleton preview")
