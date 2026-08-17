"use client";

import { FormEvent, useState } from "react";

const skills = [
  ["01", "Укрытие", "Выберете безопасное место и соберёте укрытие из тента и природных материалов."],
  ["02", "Огонь", "Разведёте огонь без спичек, научитесь поддерживать его в сырость и ветер."],
  ["03", "Вода", "Разберётесь, где искать воду, как собирать, фильтровать и обеззараживать её."],
  ["04", "Навигация", "Научитесь ориентироваться, читать местность и действовать, если сбились с пути."],
  ["05", "Первая помощь", "Отработаете базовые действия при травмах и переохлаждении вдали от города."],
  ["06", "Верёвочная техника", "Освоите основные узлы, страховку, перемещение по сложному рельефу и сигналы бедствия."],
];

const essentials = [
  "Рюкзак 40–80 л", "Одежда по погоде", "Спальник и туристический коврик", "Нож и огниво",
  "Налобный фонарь", "Альпинистский карабин", "Верёвка и перчатки", "Минимальная аптечка",
  "Металлическая кружка и ложка", "Плащ-палатка и полиэтилен", "Запас воды", "Еда на три дня",
];

const faq = [
  ["Нужна ли физическая подготовка?", "Специальная подготовка не нужна. Нагрузка рассчитана на обычного здорового человека, но о заболеваниях и ограничениях важно заранее сообщить Даниле."],
  ["Можно ли участвовать с ребёнком?", "Да, только вместе со взрослым. Для детей предусмотрена отдельная адаптированная программа."],
  ["Где именно проходит курс?", "В Подмосковье, в районе каменоломен. Точное место встречи и организационные детали получают зарегистрированные участники перед стартом."],
  ["Что входит в стоимость?", "Три дня обучения с Данилой Михайловским и питание. Личное снаряжение участник привозит с собой по чек-листу."],
  ["Как отменить участие?", "Условия бронирования, переноса и возврата Данила сообщит лично до оплаты."],
];

export default function Home() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const [menuOpen, setMenuOpen] = useState(false);

  function submit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const message = [
      "Здравствуйте, Данила! Хочу записаться на курс выживания в лесу.",
      `Имя: ${data.get("name")}`,
      `Телефон: ${data.get("phone")}`,
      `Количество участников: ${data.get("people") || "1"}`,
      data.get("comment") ? `Комментарий: ${data.get("comment")}` : "",
    ].filter(Boolean).join("\n");
    window.open(`https://t.me/Russiantracs?text=${encodeURIComponent(message)}`, "_blank", "noopener,noreferrer");
  }

  return (
    <main>
      <header className="nav-wrap">
        <a href="#top" className="brand" aria-label="На главную"><span className="brand-mark">△</span><span>ДАНИЛА<br/><small>МИХАЙЛОВСКИЙ</small></span></a>
        <button className="menu-toggle" aria-label="Открыть меню" aria-expanded={menuOpen} onClick={() => setMenuOpen(!menuOpen)}>Меню</button>
        <nav className={menuOpen ? "nav open" : "nav"} onClick={() => setMenuOpen(false)}>
          <a href="#program">Программа</a><a href="#instructor">Инструктор</a><a href="#gear">Снаряжение</a><a href="#faq">Вопросы</a>
          <a className="nav-cta" href="#signup">Записаться</a>
        </nav>
      </header>

      <section className="hero" id="top">
        <div className="hero-photo"><img src="./course/hero.jpeg" alt="Участники курса идут по лесному маршруту" /></div>
        <div className="hero-shade" />
        <div className="hero-grid" aria-hidden="true" />
        <div className="hero-content">
          <div className="hero-meta"><p className="eyebrow">Подмосковье · Октябрь 2026</p><span>Координаты после регистрации</span></div>
          <h1><span>Курс</span><span className="outline">выживания</span><span>в лесу</span></h1>
          <div className="hero-bottom">
            <p className="hero-lead">Для новичков, туристов и тех, кто хочет уверенно действовать вдали от цивилизации.</p>
            <div className="hero-actions"><a className="button primary" href="#signup">Оставить заявку <span>↗</span></a><a className="text-link" href="#program">Что будет на курсе ↓</a></div>
          </div>
        </div>
        <div className="route-stamp" aria-hidden="true"><span>03</span><small>дня<br/>в лесу</small></div>
        <div className="hero-facts"><div><b>3</b><span>дня</span></div><div><b>2</b><span>ночи</span></div><div><b>15</b><span>человек</span></div><div><b>20 000 ₽</b><span>обучение + питание</span></div></div>
      </section>

      <div className="ticker" aria-hidden="true"><div>ОГОНЬ <i>✦</i> УКРЫТИЕ <i>✦</i> ВОДА <i>✦</i> НАВИГАЦИЯ <i>✦</i> ПЕРВАЯ ПОМОЩЬ <i>✦</i> ЛЕС <i>✦</i> ОГОНЬ <i>✦</i> УКРЫТИЕ <i>✦</i></div></div>

      <section className="intro section">
        <p className="section-number">[ 01 — КУРС ]</p>
        <div className="intro-copy"><h2>Не игра в выживание.<br/><span>Практика в реальном лесу.</span></h2><p>Вы проведёте две ночи в лесу, построите лагерь, разведёте огонь и отработаете действия, которые помогают сохранить спокойствие и безопасность в сложной ситуации.</p></div>
      </section>

      <section className="program section" id="program">
        <div className="section-head"><p className="section-number">[ 02 — ПРОГРАММА ]</p><h2>Навыки, которые<br/>останутся с вами</h2></div>
        <div className="skill-grid">{skills.map(([n, title, text]) => <article className="skill" key={n}><span>{n}</span><h3>{title}</h3><p>{text}</p></article>)}</div>
      </section>

      <section className="story-strip">
        <figure className="story tall"><img src="./course/fire.jpeg" alt="Практика разведения огня"/><figcaption>Огонь без спичек</figcaption></figure>
        <figure className="story"><img src="./course/shelter.jpeg" alt="Участники в самодельном укрытии"/><figcaption>Свой лагерь</figcaption></figure>
        <figure className="story"><img src="./course/rope.jpeg" alt="Практика верёвочной техники"/><figcaption>Сложный рельеф</figcaption></figure>
      </section>

      <section className="instructor section" id="instructor">
        <div className="instructor-image"><img src="./course/fire.jpeg" alt="Данила Михайловский на практическом занятии"/><span className="image-tag">Инструктор курса</span></div>
        <div className="instructor-copy"><p className="section-number">[ 03 — ИНСТРУКТОР ]</p><h2>Данила<br/><i>Михайловский</i></h2><p className="lead">Инструктор по выживанию, путешественник и гид. Учит не героизму, а ясным решениям, которые работают в реальных условиях.</p><ul><li><b>50+</b> проведённых курсов</li><li>Аттестованный спасатель МЧС</li><li>Волонтёр отряда «СпасРезерв»</li><li>Опыт сложных маршрутов и восхождений</li></ul></div>
      </section>

      <section className="gear section" id="gear">
        <div className="gear-head"><p className="section-number">[ 04 — СНАРЯЖЕНИЕ ]</p><h2>Что взять<br/>с собой</h2><p>После заявки вы получите полный чек-лист с пояснениями. Главное правило — всё проверить и собрать до выезда.</p></div>
        <ol className="gear-list">{essentials.map((item, i) => <li key={item}><span>{String(i+1).padStart(2,"0")}</span>{item}</li>)}</ol>
        <div className="gear-note"><b>Важно</b><p>На критичном снаряжении — ноже, верёвке и карабине — не экономят. Для страховки подходят только альпинистские изделия с маркировкой UIAA/CE.</p></div>
      </section>

      <section className="gallery section"><div className="gallery-main"><img src="./course/group.jpeg" alt="Участники прошедшего курса в лагере"/></div><div className="gallery-side"><img src="./course/trail.jpeg" alt="Подъём по лесной тропе"/><div className="quote"><span>“</span><p>Не ищем пределы.<br/>Учимся действовать.</p></div></div></section>

      <section className="safety section">
        <p className="section-number">[ 05 — БЕЗОПАСНОСТЬ ]</p><div><h2>Сложно —<br/><i>не значит опасно</i></h2><p>Перед стартом Данила проверяет подготовку группы и снаряжение. На маршруте есть аптечка, связь, запасной план и возможность экстренной эвакуации. О состоянии здоровья достаточно сообщить заранее.</p></div>
      </section>

      <section className="reviews section">
        <div className="section-head"><p className="section-number">[ 06 — ВПЕЧАТЛЕНИЯ ]</p><h2>Что обычно<br/>забирают с курса</h2><span className="demo-label">Примеры впечатлений · заменить на реальные отзывы</span></div>
        <div className="review-grid"><blockquote>«Понимание, что паника — не план. Теперь я знаю, с чего начать, если что-то пошло не так.»<cite>Типичное впечатление новичка</cite></blockquote><blockquote>«Самое ценное — всё делаешь руками. После курса огонь, узлы и укрытие уже не выглядят теорией.»<cite>Типичное впечатление участника</cite></blockquote></div>
      </section>

      <section className="faq section" id="faq">
        <div><p className="section-number">[ 07 — FAQ ]</p><h2>Перед тем,<br/>как идти</h2></div><div className="faq-list">{faq.map(([q,a],i)=><div className="faq-item" key={q}><button onClick={()=>setOpenFaq(openFaq===i?null:i)} aria-expanded={openFaq===i}><span>{q}</span><b>{openFaq===i?"−":"+"}</b></button>{openFaq===i&&<p>{a}</p>}</div>)}</div>
      </section>

      <section className="signup section" id="signup">
        <div className="signup-copy"><p className="eyebrow">Ближайший поток · Октябрь 2026</p><h2>Пора выйти<br/><i>из привычного</i></h2><p>Оставьте контакты. Данила позвонит, расскажет детали и ответит на вопросы. Точные дата и место встречи будут объявлены участникам перед курсом.</p><div className="price"><b>20 000 ₽</b><span>обучение и питание<br/>3 дня · 2 ночи</span></div></div>
        <form onSubmit={submit}><label>Ваше имя *<input name="name" required placeholder="Как к вам обращаться" autoComplete="name"/></label><label>Телефон *<input name="phone" required placeholder="+7 999 000-00-00" type="tel" autoComplete="tel"/></label><label>Количество участников<input name="people" type="number" min="1" max="15" defaultValue="1"/></label><label>Комментарий<textarea name="comment" placeholder="Вопросы, участие с ребёнком, особенности здоровья" rows={3}/></label><button className="button primary" type="submit">Отправить в Telegram <span>↗</span></button><small>Нажимая кнопку, вы откроете чат с Данилой. Отправка сообщения подтверждается вами в Telegram.</small></form>
      </section>

      <footer><a href="#top" className="brand"><span className="brand-mark">△</span><span>КУРС ВЫЖИВАНИЯ<br/><small>ДАНИЛА МИХАЙЛОВСКИЙ</small></span></a><div><a href="tel:+79199959309">+7 919 995-93-09</a><a href="https://t.me/Russiantracs" target="_blank" rel="noreferrer">@Russiantracs ↗</a></div><a href="#top" className="to-top">Наверх ↑</a></footer>
    </main>
  );
}
