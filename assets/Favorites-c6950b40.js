import{s as i,d as a,h as p,u as n,r as m,E as d,j as t,H as x}from"./index-cc5eb4b4.js";import{S as c}from"./Section-5dec3fb6.js";import{P as h}from"./PageTitle-595c99f2.js";import{D as v}from"./DrinksList-defb6fa3.js";import{f}from"./selectors-a7001df1.js";import{P as g}from"./Placeholder-328a8748.js";import"./hero-desc@1x-fd0d6222.js";const l=i.div`
  width: 100%;

  & .favorites {
    padding-top: 80px;
    padding-bottom: 80px;
    & h1 {
      margin-bottom: 40px;
    }

    @media ${a.tablet} {
      padding-top: 140px;
      padding-bottom: 140px;
      & h1 {
        margin-bottom: 60px;
      }
    }

    @media ${a.desktop} {
      padding-top: 158px;
      padding-bottom: 140px;
      & h1 {
        margin-bottom: 62px;
      }
    }
  }
`,P=()=>{const s=p(f),o=n();m.useEffect(()=>{o(d())},[o]);const r=e=>{o(x(e))};return t.jsx(l,{children:t.jsxs(c,{className:"favorites",children:[t.jsx(h,{name:"Favorites"}),s.length>0?t.jsx(v,{data:s,onRemoveDrinks:r}):t.jsx(g,{})]})})};export{P as default};