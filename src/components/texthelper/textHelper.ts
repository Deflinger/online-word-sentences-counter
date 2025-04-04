
const pronounsList = ["he", "she", "it", "they", "we", "you", "i", "me", "him", "her", "us", "them", "my", "your", "his", "their", "its", "our"];

export function countWords(text: string): number {
  return text.trim().split(/\s+/).filter(Boolean).length;
}

export function countChar(text: string): number {
  // (/\s/g command to find empty characters)
  return text.replace(/\s/g, '').length;
}

export function countSente(text: string): number {
  // (/.!?/g command to find punctuation characters)
  return (text.match(/([.!?])+/g) || []).length;
}

export function countParag(text: string): number {
  // (/\n{2,}/) command to find a change of paragraph
  return text.trim().split(/\n{2,}/).filter(Boolean).length;
}

export function estimateReadingTime(text: string): string {
  const wordsPerMinute = 200;
  const minutes = countWords(text) / wordsPerMinute;
  return `${Math.ceil(minutes)} min`;
}

export function getLongestWord(text: string): string {
  const words = text.trim().split(/\s+/).filter(Boolean);
  return words.reduce((longest, word) => word.length > longest.length ? word : longest, "");
}

export function countPronouns(text: string): number {
  const words = text.toLowerCase().split(/\s+/);
  return words.filter(word => pronounsList.includes(word)).length;
}