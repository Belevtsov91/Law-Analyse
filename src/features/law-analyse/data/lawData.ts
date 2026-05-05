import type { ArticleData, LawData } from '../types';

export const LAW: LawData = {
  title: 'Закон №280/97-ВР «Про місцеве самоврядування»',
  sections: [
    { id: 'I', num: 'Розділ I', label: 'Загальні положення', articles: [
      { id: '1', num: 'Ст. 1', label: 'Основні терміни', conflict: false },
      { id: '2', num: 'Ст. 2', label: 'Місцеве самоврядування в Україні', conflict: false },
      { id: '3', num: 'Ст. 3', label: 'Право на місцеве самоврядування', conflict: true },
      { id: '4', num: 'Ст. 4', label: 'Основні принципи', conflict: false },
    ] },
    { id: 'II', num: 'Розділ II', label: 'Організаційно-правова основа', articles: [
      { id: '5', num: 'Ст. 5', label: 'Система місцевого самоврядування', conflict: false },
      { id: '6', num: 'Ст. 6', label: 'Територіальна громада', conflict: false },
      { id: '10', num: 'Ст. 10', label: 'Сільські, селищні, міські ради', conflict: true },
      { id: '11', num: 'Ст. 11', label: 'Виконавчі органи рад', conflict: false },
    ] },
    { id: 'III', num: 'Розділ III', label: 'Матеріальна і фінансова основа', articles: [
      { id: '60', num: 'Ст. 60', label: 'Право комунальної власності', conflict: false },
      { id: '61', num: 'Ст. 61', label: 'Місцеві бюджети', conflict: true },
      { id: '62', num: 'Ст. 62', label: 'Участь держави у доходах', conflict: false },
    ] },
  ],
};

export const ARTICLE: ArticleData = {
  title: 'Право на місцеве самоврядування',
  conflictNote:
    'Ч. 2 потребує гармонізації із сучасним антидискримінаційним законодавством.',
  parts: [
    { id: '3.1', conflict: false, text: "Громадяни України реалізують своє право на участь у місцевому самоврядуванні через <b>територіальні громади</b>." },
    { id: '3.2', conflict: true, text: "Будь-яке обмеження прав за ознаками <b>статі, етнічного та соціального походження</b>, майнового стану чи строку проживання забороняється." },
    { id: '3.3', conflict: false, text: "Право надається громадянам, які <b>досягли 18-річного віку</b> та є дієздатними." },
  ],
};
