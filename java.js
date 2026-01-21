





/* ===============================
   НАСТРОЙКИ
================================ */
const THEME_KEY = "site_theme";
const CART_KEY = "site_cart";

// -----------------------------
// ГЛОБАЛЬНОЕ СОСТОЯНИЕ МОДАЛКИ
// -----------------------------
let modalProduct = null;       // какой товар открыт
let modalSelectedPack = null;  // какой пак выбран


//------- ТОВАРЫ------------
const PRODUCTS = [
  {
    id: 1,
    title: "Филадельфия",
    description: "Нори, рис, сыр, лосось",
    price: 2190,
    img: "./imges/fil.png",
    category: "rolls" // холодные
  },
  {
    id: 2,
    title: "Канада",
    description: "Нори, рис, сыр, лосось, угорь, огурец",
    price: 1990,
    img: "./imges/kana.png",
    category: "rolls"
  },
    {
    id: 3,
    title: "дракон",
    description: "Нори, рис, сыр, угорь, краб, огурец, унаги соус, кунжут",
    price: 1990,
    img: "./imges/drag.png",
    category: "rolls"
  },
    {
    id: 4,
    title: "Калифорния",
    description: "Нори, рис, сыр, краб, огурцы, тобико",
    price: 1990,
    img: "./imges/kalif.png",
    category: "rolls"
  },
        {
    id: 5,
    title: "Бонито",
    description: "Нори, рис, сыр, жареный лосось, огурец, стружка тунца",
    price: 1890,
    img: "./imges/boni.png",
    category: "rolls"
  },
          {
    id: 6,
    title: "Каппа Маки",
    description: "Нори, рис, огурцы",
    price: 1490,
    img: "./imges/kappa.png",
    category: "rolls"
  },
  {
    id: 7,
    title: "Сяке маки",
    description: "Нори, рис, лосось",
    price: 1890,
    img: "./imges/sake.png",
    category: "rolls"
  },
  {
    id: 8,
    title: "Ролл дует",
    description: "",
    price: 2090,
    img: "./imges/duo.png",
    category: "rolls"
  },
{
    id: 9,
    title: "Ролл Апачи",
    description: "",
    price: 1790,
    img: "./imges/apac.png",
    category: "rolls"
  },
  {
    id: 10,
    title: "Унаги маки",
    description: "",
    price: 1590,
    img: "./imges/unag.png",
    category: "rolls"
  },
    {
    id: 11,
    title: "Краб маки",
    description: "",
    price: 1590,
    img: "./imges/krab.png",
    category: "rolls"
  },
  {
    id: 12,
    title: "Калифорния лосось",
    description: "",
    price: 1590,
    img: "./imges/kallos.png",
    category: "rolls"
  },
  {
    id: 15115,
    title: "Инь - Янь",
    description: "",
    price: 1790,
    img: "./imges/inyan.png",
    category: "rolls"
  },
  {
    id: 15456588,
    title: "Эби маки",
    description: "",
    price: 1890,
    img: "./imges/abi.png",
    category: "rolls"
  },
  {
    id: 13,
    title: "Цезарь",
    description: "Нори, рис, сыр, курица, помидор",
    price: 2090,
    img: "./imges/cezar.png",
    category: "fried"
  },
  {
    id: 14,
    title: "Темпура",
    description: "Нори, рис, сыр, огурцы, лосось",
    price: 2090,
    img: "./imges/tempu.png",
    category: "fried"
  },
  {
    id: 15,
    title: "Америка",
    description: "Нори, рис, сыр, огурцы, лосось, угорь, унаги соус, кунжут",
    price: 2090,
    img: "./imges/amerika.png",
    category: "fried"
  },
  {
    id: 16,
    title: "Осака темпура",
    description: "",
    price: 1990,
    img: "./imges/osaka.png",
    category: "fried"
  },
  {
    id: 17,
    title: "Унаги темпура",
    description: "",
    price: 1990,
    img: "./imges/unat.png",
    category: "fried"
  },
  {
    id: 18,
    title: "Фреш",
    description: "",
    price: 1890,
    img: "./imges/fresh.png",
    category: "fried"
  },

  {
    id: 21,
    title: "Лосось темпура",
    description: "",
    price: 1990,
    img: "./imges/templ.png",
    category: "fried"
  },
  {
    id: 22,
    title: "Краб темпура",
    description: "",
    price: 1790,
    img: "./imges/krat.png",
    category: "fried"
  },

  {
    id: 24,
    title: "Цезарь запеченный",
    description: "",
    price: 2090,
    img: "./imges/cezar.png",
    category: "baked"
  },
  {
    id: 25,
    title: "Филадельфия гриль",
    description: "",
    price: 2390,
    img: "./imges/fila-gril.png",
    category: "baked"
  },
  {
    id: 26,
    title: "Калифорния запеченная",
    description: "",
    price: 1990,
    img: "./imges/kali-z.png",
    category: "baked"
  },
  {
    id: 27,
    title: "Поцелуй гейши",
    description: "",
    price: 2090,
    img: "./imges/gay.png",
    category: "baked"
  },
  {
    id: 28,
    title: "Краб запеченный",
    description: "",
    price: 1890,
    img: "./imges/krabz.png",
    category: "baked"
  },
  {
    id: 29,
    title: "Вулкан маки",
    description: "",
    price: 2090,
    img: "./imges/vulkan.png",
    category: "baked"
  },
  {
    id: 30,
    title: "Урамаки",
    description: "",
    price: 1890,
    img: "./imges/ura.png",
    category: "baked"
  },
  {
    id: 31,
    title: "Каппа Маки запеченный",
    description: "",
    price: 1990,
    img: "./imges/kapaz.png",
    category: "baked"
  },
  {
    id: 32,
    title: "Динамит ролл",
    description: "",
    price: 1790,
    img: "./imges/dinam.png",
    category: "baked"
  },
  {
    id: 33,
    title: "Пепперони",
    description: "",
    price: 2090,
    img: "./imges/peper.png",
    category: "pizza"
  },
  {
    id: 34,
    title: "Маргарита",
    description: "",
    price: 2090,
    img: "./imges/margarita.png",
    category: "pizza"
  },
  {
    id: 35,
    title: "4 сезона",
    description: "",
    price: 2190,
    img: "./imges/forseasones.png",
    category: "pizza"
  },
  {
    id: 36,
    title: "Болоньезе",
    description: "",
    price: 2190,
    img: "./imges/boloneze.png",
    category: "pizza"
  },
  {
    id: 37,
    title: "Грибная",
    description: "",
    price: 2090,
    img: "./imges/gribnaz.png",
    category: "pizza"
  },
  {
    id: 38,
    title: "Филадельфия пицца",
    description: "",
    price: 2390,
    img: "./imges/pizzafila.png",
    category: "pizza"
  },
  {
    id: 39,
    title: "Сырная",
    description: "",
    price: 1890,
    img: "./imges/cheeznaya.png",
    category: "pizza"
  },
  {
    id: 40,
    title: "Куриная",
    description: "",
    price: 1990,
    img: "./imges/chikennaya.png",
    category: "pizza"
  },
  {
    id: 41,
    title: "Курица с грибами",
    description: "",
    price: 2190,
    img: "./imges/grebyichiken.png",
    category: "pizza"
  },
  {
    id: 42,
    title: "Охотничья",
    description: "",
    price: 1990,
    img: "./imges/oxotnychaya.png",
    category: "pizza"
  },
  {
    id: 43,
    title: "Мексиканская",
    description: "",
    price: 2090,
    img: "./imges/mehiko.png",
    category: "pizza"
  },
  {
    id: 44,
    title: "Халапеньо",
    description: "",
    price: 1890,
    img: "./imges/meksikanskaya.png",
    category: "pizza"
  },

  {
  id: 45,
  title: "Чикен",
  description: "",
  img: "./imges/chicken.png",
  category: "snacks",

  packs: [
    { qty: 10, price: 2300 },
    { qty: 15, price: 3250 },
    { qty: 20, price: 4300 },
    { qty: 25, price: 5350 },
    { qty: 30, price: 6450 },
    { qty: 35, price: 7600 },
    { qty: 40, price: 8700 },
    { qty: 45, price: 9700 },
    { qty: 50, price: 10850 },
  ]
},
  {
    id: 19,
    title: "Саше с лососем",
    description: "",
    price: 2090,
    img: "./imges/sashe.png",
    category: "snacks"
  },
  {
    id: 20,
    title: "Саше с курицей",
    description: "",
    price: 1990,
    img: "./imges/kursashe.png",
    category: "snacks"
  },
  {
    id: 23,
    title: "Тако с курицей",
    description: "",
    price: 1990,
    img: "./imges/tako.png",
    category: "snacks"
  },
  {
    id: 46,
    title: "Тако с лососем",
    description: "",
    price: 2100,
    img: "./imges/takol.png",
    category: "snacks"
  },
  {
    id: 47,
    title: "Картофельные шарики",
    description: "",
    price: 850,
    img: "./imges/frikad.png",
    category: "snacks"
  },
  {
    id: 48,
    title: "Картошки фри",
    description: "",
    price: 850,
    img: "./imges/free.png",
    category: "snacks"
  },
  {
    id: 49,
    title: "Наггетсы 10 шт",
    description: "",
    price: 1500,
    img: "./imges/naggets.png",
    category: "snacks"
  },
  {
    id: 50,
    title: "Сырные палочки",
    description: "",
    price: 1500,
    img: "./imges/cheesefree.png",
    category: "snacks"
  },
  {
    id: 51,
    title: "Корн дог 5 шт",
    description: "",
    price: 1250,
    img: "./imges/korndog.png",
    category: "snacks"
  },
  {
    id: 52,
    title: "Пицца донер",
    description: "",
    price: 2050,
    img: "./imges/donerpizza.png",
    category: "snacks"
  },
  {
    id: 52,
    title: "Жаренная рыба 1 кг",
    description: "",
    price: 4200,
    img: "./imges/fish.png",
    category: "snacks"
  },
  {
    id: 53,
    title: "CocaCola",
    description: "1л",
    price: 700,
    img: "./imges/cola.png",
    category: "drinks"
  },
  {
    id: 54,
    title: "Fanta",
    description: "1л",
    price: 700,
    img: "./imges/fanta.png",
    category: "drinks"
  },
  {
    id: 55,
    title: "Fuse tea",
    description: "1л",
    price: 750,
    img: "./imges/fuse tea.png",
    category: "drinks"
  },
  {
    id: 56,
    title: "Каркаде",
    description: "1л",
    price: 900,
    img: "./imges/karka.png",
    category: "drinks"
  },
{
  id: 57,
  title: "Для двоих",
  description: `
Цезарь запеченный — 10 шт<br>
Чикен — 10 шт<br>
Пицца куриная<br>
Кола — 1 л
`,
  price: 6790,
  img: "./imges/duoset.png",
  category: "sets"
},
{
  id: 58,
  title: "Эконом",
  description: `
Темпура — 10 шт<br>
Цезарь — 10 шт<br>
Чикен — 8 шт<br>
Пицца пепперони<br>
Фри — 1 порция
`,
  price: 6800,
  img: "./imges/eco.png",
  category: "sets"
},
{
  id: 59,
  title: "Обеликс",
  description: `
Чикен — 20 шт<br>
Пицца пепперони<br>
Фри — 1 порция<br>
Кола — 1 л
`,
  price: 7500,
  img: "./imges/obeliks.png",
  category: "sets"
},
{
  id: 60,
  title: "Жаренный",
  description: `
Осака темпура — 10 шт<br>
Цезарь — 10 шт<br>
Америка — 10 шт<br>
Темпура — 10 шт
`,
  price: 7190,
  img: "./imges/setj.png",
  category: "sets"
},
{
  id: 61,
  title: "Илийский",
  description: `
Чикен — 15 шт<br>
Пицца пепперони<br>
Пицца маргарита<br>
Фри — 1 порция<br>
Кола — 1 л
`,
  price: 7500,
  img: "./imges/ilisk.png",
  category: "sets"
},
{
  id: 62,
  title: "Папито",
  description: `
Чикен — 30 шт<br>
Пицца пепперони<br>
Фри — 1 порция<br>
Кола — 1 л
`,
  price: 8050,
  img: "./imges/papito.png",
  category: "sets"
},
{
  id: 63,
  title: "Ыстық ұя",
  description: `
Цезарь запеченный — 20 шт<br>
Чикен — 15 шт<br>
Пицца пепперони<br>
Фри — 1 порция<br>
Кола — 1 л
`,
  price: 8190,
  img: "./imges/hothouse.png",
  category: "sets"
},
{
  id: 64,
  title: "Сиқыр",
  description: `
Филадельфия гриль — 10 шт<br>
Цезарь запеченный — 10 шт<br>
Калифорния запеченная — 10 шт<br>
Чикен — 8 шт<br>
Пицца сырная<br>
Кола — 1 л
`,
  price: 8800,
  img: "./imges/sikr.png",
  category: "sets"
},
{
  id: 65,
  title: "Романтик",
  description: `
Цезарь запеченный — 10 шт<br>
Темпура — 10 шт<br>
Чикен — 20 шт<br>
Пицца пепперони<br>
Кола — 1 л
`,
  price: 8800,
  img: "./imges/romantik.png",
  category: "sets"
},
{
  id: 66,
  title: "Санта Барбара",
  description: `
Цезарь запеченный — 20 шт<br>
Саш е с лососем — 1 порция<br>
Наггетсы — 1 порция<br>
Чикен — 15 шт<br>
Картофельные шарики — 1 порция
`,
  price: 8900,
  img: "./imges/santa.png",
  category: "sets"
},
{
  id: 67,
  title: "Ақсай",
  description: `
Филадельфия — 10 шт<br>
Гейша — 10 шт<br>
Америка — 10 шт<br>
Цезарь — 10 шт<br>
Пицца 4 сезона<br>
Кола — 1 л
`,
  price: 9200,
  img: "./imges/aksay.png",
  category: "sets"
},
{
  id: 68,
  title: "Пирамида",
  description: `
Филадельфия — 10 шт<br>
Цезарь — 10 шт<br>
Чикен — 15 шт<br>
Пицца пепперони<br>
Кола — 1 л
`,
  price: 9000,
  img: "./imges/piramida.png",
  category: "sets"
},
{
  id: 69,
  title: "Сытный",
  description: `
Чикен — 30 шт<br>
Пицца пепперони — 2 шт<br>
Кола — 2 л
`,
  price: 9000,
  img: "./imges/sytniy.png",
  category: "sets"
},
{
  id: 70,
  title: "Лайк",
  description: `
Темпура — 10 шт<br>
Цезарь — 10 шт<br>
Цезарь запеченный — 10 шт<br>
Каппа маки — 10 шт<br>
Саке маки — 10 шт<br>
Пицца маргарита<br>
Кола — 1 л
`,
  price: 9000,
  img: "./imges/like.png",
  category: "sets"
},
{
  id: 71,
  title: "Ханский",
  description: `
Филадельфия — 10 шт<br>
Цезарь запеченный — 10 шт<br>
Темпура — 10 шт<br>
Чикен — 15 шт<br>
Пицца 4 сезона<br>
Фри — 1 порция<br>
Кола — 1 л
`,
  price: 10000,
  img: "./imges/hanskiy.png",
  category: "sets"
},
{
  id: 72,
  title: "Балапан",
  description: `
Калифорния запеченная — 10 шт<br>
Цезарь запеченный — 10 шт<br>
Цезарь — 10 шт<br>
Каппа маки — 10 шт<br>
Чикен — 15 шт<br>
Пицца пепперони<br>
Кола — 1 л
`,
  price: 10100,
  img: "./imges/balapan.png",
  category: "sets"
},
{
  id: 73,
  title: "Оскар",
  description: `
Филадельфия — 10 шт<br>
Цезарь запеченный — 10 шт<br>
Чикен — 30 шт<br>
Пицца 4 сезона<br>
Кола — 1 л
`,
  price: 10000,
  img: "./imges/oskar.png",
  category: "sets"
},
{
  id: 74,
  title: "Джекпот",
  description: `
Филадельфия — 10 шт<br>
Америка — 10 шт<br>
Цезарь — 10 шт<br>
Цезарь запеченный — 10 шт<br>
Пицца пепперони<br>
Кола — 1 л
`,
  price: 7900,
  img: "./imges/jackpot.png",
  category: "sets"
},
{
  id: 75,
  title: "Жеп Қал",
  description: `
Филадельфия — 10 шт<br>
Америка — 10 шт<br>
Цезарь — 10 шт<br>
Цезарь запеченный — 10 шт<br>
Каппа маки — 10 шт<br>
Саке маки — 10 шт<br>
Пицца пепперони<br>
Фри — 1 порция<br>
Кола — 1 л
`,
  price: 9800,
  img: "./imges/zhepkal.png",
  category: "sets"
},
  {
    id: 76,
    title: "Кетчуп",
    description: "",
    price: 200,
    img: "./imges/kech.png",
    category: "dop"
  },
  {
    id: 77,
    title: "Сырный соус",
    description: "",
    price: 200,
    img: "./imges/cheeses.png",
    category: "dop"
  },
  {
    id: 78,
    title: "Тар-тар",
    description: "",
    price: 250,
    img: "./imges/tar.png",
    category: "dop"
  },
  {
    id: 79,
    title: "Красный соус",
    description: "Для рыбы",
    price: 250,
    img: "./imges/reds.png",
    category: "dop"
  },
  {
    id: 80,
    title: "Белый соус",
    description: "Для рыбы",
    price: 250,
    img: "./imges/white.png",
    category: "dop"
  },
];


function renderProducts() {
  const coldGrid = document.getElementById("productGrid");
  const friedGrid = document.getElementById("productGrid2");
  const bakedrollss = document.getElementById("productGrid3");
  const pizzaGrid = document.getElementById("productGrid4");
  const snacksGrid = document.getElementById("productGrid5");
  const drinksGrid = document.getElementById("productGrid6");
  const setsGrid = document.getElementById("productGrid7");
  const dopGrid = document.getElementById("productGrid8");

  if (coldGrid) coldGrid.innerHTML = "";
  if (friedGrid) friedGrid.innerHTML = "";
  if (bakedrollss) bakedrollss.innerHTML = "";
  if (pizzaGrid) pizzaGrid.innerHTML = "";
  if (snacksGrid) snacksGrid.innerHTML = "";
  if (setsGrid) setsGrid.innerHTML = "";
  if (dopGrid) dopGrid.innerHTML = "";

  PRODUCTS.forEach(p => {
    const card = document.createElement("div");
    card.className = "card";

    /* ===============================
       ТОВАР С НАБОРАМИ (packs)
    ================================ */
    if (p.packs) {
card.innerHTML = `
  <div class="card-media">
    <img src="${p.img}" alt="${p.title}">
  </div>
  <h3>${p.title}</h3>

  <div class="pack-select hidden">
    ${p.packs.map((pack, i) => `
      <button class="pack-btn ${i === 0 ? "active" : ""}">
        ${pack.qty} шт
      </button>
    `).join("")}
  </div>

  <button class="btn add-pack">
    Добавить
  </button>
`;


let selectedPack = p.packs[0];

const packSelect = card.querySelector(".pack-select");
const packBtns = card.querySelectorAll(".pack-btn");
const addBtn = card.querySelector(".add-pack");

packBtns.forEach((btn, index) => {
  btn.addEventListener("click", () => {
    packBtns.forEach(b => b.classList.remove("active"));
    btn.classList.add("active");
    selectedPack = p.packs[index];
  });
});

addBtn.addEventListener("click", () => {
  // 1️⃣ если пакеты скрыты — показываем
  if (packSelect.classList.contains("hidden")) {
    packSelect.classList.remove("hidden");
    addBtn.textContent = `В корзину за ${selectedPack.price} ₸`;
    return;
  }

  // 2️⃣ добавляем в корзину
  addPackToCart(p, selectedPack);

  // 3️⃣ ЗАКРЫВАЕМ карточку обратно ✅
  packSelect.classList.add("hidden");
  addBtn.textContent = "Добавить";

  // 4️⃣ (опционально) сброс на первый пак (10 шт)
  selectedPack = p.packs[0];
  packBtns.forEach((b, i) => {
    b.classList.toggle("active", i === 0);
  });
});


      // ✅ ВАЖНО: ДОБАВЛЯЕМ В snacks
      if (snacksGrid) snacksGrid.appendChild(card);
      return; // ⬅ чтобы дальше код не шёл
    }

    /* ===============================
       ОБЫЧНЫЕ ТОВАРЫ
    ================================ */
    card.innerHTML = `
      <div class="card-media">
        <img src="${p.img}" alt="${p.title}">
      </div>
      <h3>${p.title}</h3>
      <p class="muted">${p.description || ""}</p>
      <div class="priceRow">
        <strong>${p.price} ₸</strong>
        <button class="btn">Добавить</button>
      </div>
    `;

    card.querySelector("button").addEventListener("click", () => {
      addToCart(p.id);
    });

    if (p.category === "rolls" && coldGrid) coldGrid.appendChild(card);
    if (p.category === "fried" && friedGrid) friedGrid.appendChild(card);
    if (p.category === "baked" && bakedrollss) bakedrollss.appendChild(card);
    if (p.category === "pizza" && pizzaGrid) pizzaGrid.appendChild(card);
    if (p.category === "snacks" && snacksGrid) snacksGrid.appendChild(card);
    if (p.category === "drinks" && drinksGrid) drinksGrid.appendChild(card);
    if (p.category === "sets" && setsGrid) setsGrid.appendChild(card);
    if (p.category === "dop" && dopGrid) dopGrid.appendChild(card);
  });
}


function clearCart() {
  cart = [];
  saveCart();
  renderCart();
}



/* ===============================
   THEME
================================ */
function applyTheme(theme) {
  if (theme === "dark") {
    document.body.classList.add("dark");
  } else {
    document.body.classList.remove("dark");
  }
}

function toggleTheme() {
  const current = localStorage.getItem(THEME_KEY) || "light";
  const next = current === "dark" ? "light" : "dark";
  localStorage.setItem(THEME_KEY, next);
  applyTheme(next);
}

/* ===============================
   CART STATE
================================ */
let cart = JSON.parse(localStorage.getItem(CART_KEY)) || [];

function saveCart() {
  localStorage.setItem(CART_KEY, JSON.stringify(cart));
  updateCartCount();
}

/* ===============================
   CART COUNT
================================ */
function updateCartCount() {
  const count = cart.reduce((sum, item) => sum + item.qty, 0);

const els = document.querySelectorAll("#cartCount, #cartCountMenu");
  els.forEach(el => el.textContent = count);
}

/* ===============================
   ADD TO CART
================================ */
function addToCart(id) {
  const product = PRODUCTS.find(p => p.id === id);
  if (!product) return;

  const found = cart.find(i => i.id === id);

  if (found) {
    found.qty++;
  } else {
    cart.push({
      id: product.id,
      title: product.title,
      price: product.price,
      qty: 1
    });
  }

  saveCart();
  renderCart();

}

function addPackToCart(product, pack) {
  cart.push({
    id: `${product.id}_${pack.qty}`,
    title: `${product.title} (${pack.qty} шт)`,
    price: pack.price,
    qty: 1
  });

  saveCart();
  renderCart();
}


function changeQty(id, delta) {
  const item = cart.find(i => i.id === id);
  if (!item) return;

  item.qty += delta;

  if (item.qty <= 0) {
    cart = cart.filter(i => i.id !== id);
  }

  saveCart();
  renderCart();
}

/* ===============================
   CART PANEL
================================ */
function openCart() {
  const panel = document.getElementById("cartPanel");
  if (!panel) return;
  panel.classList.add("open");
  renderCart();
}

function closeCart() {
  const panel = document.getElementById("cartPanel");
  if (!panel) return;
  panel.classList.remove("open");
}

function renderCart() {
  const list = document.getElementById("cartList");
  const totalEl = document.getElementById("cartTotal");

  list.innerHTML = "";

  let total = 0;

  cart.forEach(item => {
    total += item.price * item.qty;

    const li = document.createElement("li");
    li.className = "cart-item";

    li.innerHTML = `
      <div class="cart-title">${item.title}</div>

      <div class="cart-controls">
        <button onclick="changeQty('${item.id}', -1)">−</button>
        <span>${item.qty}</span>
        <button onclick="changeQty('${item.id}', 1)">+</button>
      </div>

      <div class="cart-price">${item.price * item.qty} ₸</div>
    `;

    list.appendChild(li);
  });

  totalEl.textContent = total + " ₸";

  updateCartCount();
}

function openCart() {
  const panel = document.getElementById("cartPanel");
  const btn = document.getElementById("floatingCartBtn");
  if (!panel) return;

  panel.classList.add("open");
  btn?.classList.add("hidden"); // ← ВАЖНО
  renderCart();
}

function closeCart() {
  const panel = document.getElementById("cartPanel");
  const btn = document.getElementById("floatingCartBtn");
  if (!panel) return;

  panel.classList.remove("open");
  btn?.classList.remove("hidden"); // ← ВАЖНО
}


/* ===============================
   WHATSAPP
================================ */
const WHATSAPP_PHONE = "77001234567"; // ← свой номер

function sendToWhatsApp() {
  if (cart.length === 0) {
    alert("Корзина пуста!");
    return;
  }

  // товары
  let total = 0;
  let text = "Здравствуйте!%0AЯ хочу сделать заказ:%0A%0A";

  cart.forEach((item, index) => {
    const sum = item.price * item.qty;
    total += sum;

    text += `${index + 1}) ${encodeURIComponent(item.title)} — ${item.qty} × ${item.price}₸ = ${sum}₸%0A`;
  });

  // способ оплаты
  let payMethod = "Не указан";
  const payRadios = document.querySelectorAll('input[name="pay"]');
  payRadios.forEach(radio => {
    if (radio.checked) payMethod = radio.value;
  });

  text += `%0AИтого: ${total}₸`;
  text += `%0AСпособ оплаты: ${encodeURIComponent(payMethod)}`;
  text += `%0A%0AИмя: `;
  text += `%0AТелефон: `;
  text += `%0AАдрес (если доставка): `;

  const phone = WHATSAPP_PHONE.replace(/\D/g, "");
  const link = `https://wa.me/${phone}?text=${text}`;

  window.open(link, "_blank");
}

/* ===============================
   SCROLL SPY (указатель секции)
================================ */
document.addEventListener("DOMContentLoaded", () => {
  const menu = document.querySelector(".navmenu");
  const links = document.querySelectorAll(".navmenu a");
  const sections = [...links].map(link =>
    document.querySelector(link.getAttribute("href"))
  );

  // создаём линию
  const indicator = document.createElement("div");
  indicator.className = "nav-indicator";
  menu.appendChild(indicator);

  function setActive(link) {
    links.forEach(a => a.classList.remove("active"));
    link.classList.add("active");

    const rect = link.getBoundingClientRect();
    const parentRect = menu.getBoundingClientRect();

    indicator.style.width = rect.width + "px";
    indicator.style.left = rect.left - parentRect.left + "px";
  }

  function onScroll() {
    const scrollPos = window.scrollY + 150;

    sections.forEach((section, i) => {
      if (!section) return;

      if (
        scrollPos >= section.offsetTop &&
        scrollPos < section.offsetTop + section.offsetHeight
      ) {
        setActive(links[i]);
      }
    });
  }

  // клик по меню
  links.forEach(link => {
    link.addEventListener("click", () => {
      setTimeout(() => setActive(link), 300);
    });
  });

  window.addEventListener("scroll", onScroll);
  onScroll(); // старт
});


/* ===============================
   INIT
================================ */
document.addEventListener("DOMContentLoaded", () => {
  applyTheme(localStorage.getItem(THEME_KEY) || "light");

  cart = JSON.parse(localStorage.getItem(CART_KEY)) || [];

  renderProducts();
  updateCartCount();

  document.getElementById("clearCart")?.addEventListener("click", clearCart);
  document.querySelector(".theme-toggle")?.addEventListener("click", toggleTheme);
  document.getElementById("floatingCartBtn")?.addEventListener("click", openCart);
  document.getElementById("closeCart")?.addEventListener("click", closeCart);
  document.getElementById("checkout")?.addEventListener("click", sendToWhatsApp);
});
