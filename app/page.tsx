"use client";

import { FormEvent, useState } from "react";

const skills = [
  { n: "01", title: "Укрытие", text: "Когда готового места для ночлега нет.", image: "./course/shelter.jpeg", position: "center 42%" },
  { n: "02", title: "Огонь", text: "Развести. Сохранить. Не зависеть от погоды.", image: "./course/fire.jpeg", position: "center 40%" },
  { n: "03", title: "Вода", text: "Найти источник и сделать воду безопасной.", image: "./course/campfire.jpeg", position: "center 65%" },
  { n: "04", title: "Ориентирование", text: "Понять, где вы и куда двигаться дальше.", image: "./course/trail.jpeg", position: "center 55%" },
  { n: "05", title: "Первая помощь", text: "Не растеряться, когда помощь не приедет сразу.", image: "./course/group.jpeg", position: "center 36%" },
  { n: "06", title: "Верёвка", text: "Пройти там, где обычной тропы уже нет.", image: "./course/rope.jpeg", position: "center 45%" },
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
  const [activeSkill, setActiveSkill] = useState(0);

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
        <div className="hero-content">
          <div className="hero-meta"><p className="eyebrow">Подмосковье · Октябрь 2026</p><span>Координаты после регистрации</span></div>
          <h1><span>Курс</span><span className="outline">выживания</span><span>в лесу</span></h1>
          <div className="hero-bottom">
            <p className="hero-lead">Для новичков, туристов и тех, кто хочет уверенно действовать вдали от цивилизации.</p>
            <div className="hero-actions"><a className="button primary" href="#signup">Оставить заявку <span>↗</span></a><a className="text-link" href="#program">Что будет на курсе ↓</a></div>
          </div>
        </div>
        <div className="hero-facts"><div><b>3</b><span>дня</span></div><div><b>2</b><span>ночи</span></div><div><b>15</b><span>человек</span></div><div><b>20 000 ₽</b><span>обучение + питание</span></div></div>
      </section>

      <section className="intro section">
        <p className="section-number">[ 01 — КУРС ]</p>
        <div className="intro-copy"><h2>Три дня без готовых решений.<br/><span>Зато с настоящим опытом.</span></h2><p>Вы окажетесь в лесу, где привычные удобства не помогают. Данила научит замечать главное, спокойно оценивать обстановку и действовать руками — шаг за шагом.</p></div>
      </section>

      <section className="program section" id="program">
        <div className="program-intro"><p className="section-number">[ ДОСЬЕ 02 — ПРОГРАММА ]</p><div><h2>Известны навыки.<br/>Неизвестен сценарий.</h2><p className="program-lead">Мы покажем, чему вы научитесь. Но не станем рассказывать, когда и при каких обстоятельствах эти знания понадобятся.</p></div></div>
        <div className="dossier">
          <div className="dossier-index">
            <div className="dossier-label"><span>Материалы курса</span><b>Частично открыто</b></div>
            {skills.map((skill, index) => <button
              className={activeSkill === index ? "active" : ""}
              key={skill.n}
              onClick={() => setActiveSkill(index)}
              onMouseEnter={() => setActiveSkill(index)}
              aria-pressed={activeSkill === index}
            ><span>{skill.n}</span><strong>{skill.title}</strong><i>{activeSkill === index ? "Открыто" : "Выбрать"}</i></button>)}
          </div>
          <figure className="dossier-frame">
            <img src={skills[activeSkill].image} alt={`Практика: ${skills[activeSkill].title.toLowerCase()}`} style={{objectPosition: skills[activeSkill].position}} />
            <div className="dossier-grid" aria-hidden="true" />
            <figcaption><span>Фрагмент {skills[activeSkill].n} / 06</span><h3>{skills[activeSkill].title}</h3><p>{skills[activeSkill].text}</p></figcaption>
            <div className="redacted" aria-label="Часть сценария скрыта"><span>СЦЕНАРИЙ</span><b>СКРЫТО ДО НАЧАЛА КУРСА</b></div>
          </figure>
        </div>
        <div className="program-path" aria-label="Подход к обучению"><span>Освоить</span><i>→</i><span>Применить</span><i>→</i><span>Действовать самостоятельно</span></div>
      </section>

      <section className="field-note">
        <img src="./course/hero.jpeg" alt="Группа выходит на лесной маршрут" />
        <div><span>Полевое правило № 1</span><blockquote>Не угадывать, что будет дальше.<br/>Быть готовым действовать.</blockquote></div>
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

      <section className="outcomes section">
        <div className="outcomes-title"><p className="section-number">[ 06 — РЕЗУЛЬТАТ ]</p><h2>С курса<br/>вы унесёте</h2></div>
        <div className="outcome-list"><article><span>01</span><h3>Спокойствие</h3><p>Понимание, с чего начинать, когда привычного плана больше нет.</p></article><article><span>02</span><h3>Навыки</h3><p>То, что вы не просто услышали, а сделали собственными руками.</p></article><article><span>03</span><h3>Опору на себя</h3><p>Уверенность без бравады — основанную на реальном опыте.</p></article></div>
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
