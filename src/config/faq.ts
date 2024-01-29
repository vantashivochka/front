export interface FAQItem {
  id: number;
  question: string;
  answer: string;
}

export const FAQ: FAQItem[] = [
  {
    id: 1,
    question: "Які вантажі можна перевезти?",
    answer: `Перевезти можна все: будматеріали чи меблі, побутову техніку
    (холодильник, пральну машину) чи мотоцикл. Якщо твій вантаж
    потребує особливого типу завантаження або кріплення, вкажи це у
    коментарі до замовлення. Незабаром у сервісі будуть вантажники та
    додаткові послуги для твого комфорту.`,
  },
  {
    id: 2,
    question: "Як замовити послуги вантажного таксі?",
    answer: `Ви можете замовити дзвінок в одній з форм на сайті або
    зателефонувати напряму на номери +38 (063) 394-50-95 +38 (099)
    416-22-72`,
  },
  {
    id: 3,
    question: "Я забув речі у машині. Як я можу їх повернути?",
    answer: `Звернутись напряму на номери +38 (063) 394-50-95 +38 (099)
    416-22-72`,
  },
  {
    id: 4,
    question: "Чи приймаєте ви оплату карткою або готівкою?",
    answer: `Так, приймаємо U+0456 те U+0456 те.`,
  },
];
