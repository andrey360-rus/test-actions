import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
  :root {
    --blue: #2f84af;
    --light-blue: #a8cbe5;
    --grey: #71717a;
    --grey-light: #e4e4e7;
    --white: #ffffff;
    --black: #27272a;
  }
  body{
      height: auto !important;
      min-height: 100%;
  }

  html[data-theme=light] {
    body {
      background-color: var(--white);
    }

    .ant-menu {
      background-color: var(--white);
    }

    .ant-menu-item {
      background-color: var(--white);
      color: var(--black);
    }

    .ant-steps-item-title {
      color: var(--black); /* Set text color to black in light theme */
    }
      
  }

  html[data-theme=dark] {
    body {
      background-color: var(--black);
    }
      .hamburger-react{
          color: var(--light-blue)
      }
    .ant-menu {
      background-color: var(--black);
    }
      h2, h1{
          color: var(--white)
      }

    .ant-menu-item {
      background-color: var(--black);
      color: var(--white);
    } 
       span {
          color: var(--light-blue);
      }

    .ant-btn-default {
      color: var(--black);
      background-color: var(--light-blue);
    }
    
    button {
      color: var(--black);
      background-color: var(--light-blue);
      &:disabled{ color: var(--grey);
      background-color: #a8cbe5c9}
    }

    .ant-btn-default:not(:disabled):not(.ant-btn-disabled):hover {
      color: var(--grey);
    }

    .ant-steps .ant-steps-item-wait > .ant-steps-item-container > .ant-steps-item-content > .ant-steps-item-title {
      color: var(--light-blue);
    }

    .ant-steps-item-wait > .ant-steps-item-container > .ant-steps-item-content > .ant-steps-item-description {
      color: var(--grey);
    }

    .ant-steps .ant-steps-item-process > .ant-steps-item-container > .ant-steps-item-content > .ant-steps-item-title {
      color: var(--white);
    }

    .ant-steps .ant-steps-item-process > .ant-steps-item-container > .ant-steps-item-content > .ant-steps-item-description {
      color: var(--grey-light);
    }

    .ant-steps .ant-steps-item-finish > .ant-steps-item-container > .ant-steps-item-content > .ant-steps-item-title {
      color: var(--blue);
    }

    .ant-steps .ant-steps-item-finish > .ant-steps-item-container > .ant-steps-item-content > .ant-steps-item-description {
      color: var(--blue);
    }
    h3{
      & a {
          color:var(--black);
          background-color: var(--light-blue);
          &:hover {
            color: var(--grey);
          }
        }
    }

    .ant-list .ant-list-item .ant-list-item-meta .ant-list-item-meta-title > a {
      color: var(--light-blue);
    }

    .ant-list .ant-list-item .ant-list-item-meta .ant-list-item-meta-description {
      color: var(--grey);
    }

    .ant-list .ant-list-item .ant-list-item-action > li {
      color: var(--grey);
    }

    .ant-table-wrapper .ant-table {
      color: var(--light-blue);
      background-color: var(--black);
    }

    .ant-table-wrapper .ant-table-thead > tr > th, :where(.css-dev-only-do-not-override-1g853jt) .ant-table-wrapper .ant-table-thead > tr > td {
      background-color: var(--black);
      color: var(--light-blue);
    }
  }
  
  
  @media(max-width: 991px){
      h1, h2{
          font-size: 1rem;
          margin-top:2rem;
      }
  }
  @media (max-width: 500px) {
      h3{
          font-size: 1.2rem;
          
      }
  }
`;

export default GlobalStyles;
