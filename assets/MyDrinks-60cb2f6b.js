import{s as a,d as n,h as e,u as p,r as m,C as d,j as s,D as x}from"./index-cc5eb4b4.js";import{S as c}from"./Section-5dec3fb6.js";import{P as D}from"./PageTitle-595c99f2.js";import{D as k}from"./DrinksList-defb6fa3.js";import{e as h}from"./selectors-a7001df1.js";import{P as g}from"./Placeholder-328a8748.js";import"./hero-desc@1x-fd0d6222.js";const l=a.div`
  width: 100%;

  & .myDrinks {
    padding-top: 80px;
    padding-bottom: 80px;
    & h1 {
      margin-bottom: 40px;
    }

    @media ${n.tablet} {
      padding-top: 140px;
      padding-bottom: 140px;
      & h1 {
        margin-bottom: 60px;
      }
    }

    @media ${n.desktop} {
      padding-top: 158px;
      padding-bottom: 140px;
      & h1 {
        margin-bottom: 62px;
      }
    }
  }
`,O=()=>{const o=e(h),t=p();m.useEffect(()=>{t(d())},[t]);const r=i=>{t(x(i))};return s.jsx(l,{children:s.jsxs(c,{className:"myDrinks",children:[s.jsx(D,{name:"MyDrinks"}),o.length>0?s.jsx(k,{data:o,onRemoveDrinks:r}):s.jsx(g,{})]})})};export{O as default};