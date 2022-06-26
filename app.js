import { Card, Table } from "./components/components.js";

const navContent = [
  { name: "Colors", link: "./colors.html" },
  { name: "Typography", link: "./typo.html" },
  { name: "Card", link: "./card.html" },
  { name: "Table", link: "./table.html" },
];

const navInner = `
    <li class="active">
        <a class="uppercase text-white letter-spacing-2" href="./colors.html"
        ><span>01</span>Colors</a
        >
    </li>
    <li>
        <a
        class="uppercase text-white letter-spacing-2"
        href="./typo.html"
        ><span>02</span>Typography</a
        >
    </li>
    <li>
        <a class="uppercase text-white letter-spacing-2" href="./card.html"
        ><span>03</span>Card</a
        >
    </li>
    <li>
        <a class="uppercase text-white letter-spacing-2" href="./table.html"
        ><span>03</span>Table</a
        >
    </li>
`;

const allNav = document.querySelectorAll("ul");
allNav.forEach((nav) => {
  nav.innerHTML = navInner;
});
