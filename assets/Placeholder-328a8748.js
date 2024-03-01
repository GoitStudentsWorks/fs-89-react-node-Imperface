import{s as o,d as a,j as t}from"./index-cc5eb4b4.js";import{p as s}from"./hero-desc@1x-fd0d6222.js";const r=o.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  & img {
    margin-bottom: 32px;
    width: 198px;
    height: 247px;

    @media ${a.tablet} {
      width: 261px;
      height: 326px;
    }
  }
  & p {
    width: 205px;
    font-family: 'Manrope', sans-serif;
    font-weight: 500;
    font-size: 14px;
    line-height: 1.28571;
    text-align: center;
    color: ${e=>e.theme.whiteColor};

    @media ${a.desktop} {
      width: 236px;
      font-size: 16px;
      line-height: 1.375;
    }
  }
`,i="/fs-89-react-node-Imperface/assets/hero-mob@2x-1445b2a8.png",c="/fs-89-react-node-Imperface/assets/hero-tab@2x-ab1de86f.png",n="/fs-89-react-node-Imperface/assets/hero-desc@2x-bc84bac2.png",p=({text:e="You haven`t added any favorite cocktails yet"})=>t.jsxs(r,{children:[t.jsx("img",{src:s,srcSet:`${i} 420w, ${c} 768w, ${n} 1440w`,alt:"Placeholder"}),t.jsx("p",{children:e})]});export{p as P};
