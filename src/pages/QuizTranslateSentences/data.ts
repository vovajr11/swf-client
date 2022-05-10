import { v4 as uuidv4 } from 'uuid';

const data = [
  {
    id: uuidv4(),
    sentenceToBeTranslated: 'Ти не намагаєш вивчити Англійську',
    translatedSentence: 'You don’t try to learn English',
  },
  {
    id: uuidv4(),
    sentenceToBeTranslated: 'Він не має цієї інформації',
    translatedSentence: 'He doesn’t have this information',
  },
  {
    id: uuidv4(),
    sentenceToBeTranslated: 'Він не хоче старатись знайти хорошу роботу',
    translatedSentence: 'He doesn’t want to try to find a good job',
  },
  {
    id: uuidv4(),
    sentenceToBeTranslated: 'Мій друг не думає так',
    translatedSentence: 'My friend doesn’t think so',
  },
  {
    id: uuidv4(),
    sentenceToBeTranslated: 'Ми не хочем жити в іншому місці',
    translatedSentence: 'We don’t want to live in another place',
  },
];

export default data;
