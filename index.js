function shout(word) {
  return word.toUpperCase()
}
function whisper(word){
  return word.toLowerCase()
}
function logShout(word){
  console.log(shout(word))
}
function logWhisper(word){
  console.log(whisper(word))
}
function sayHiToGrandma(sentence){
  if (sentence=="I love you, Grandma."){
    return"I love you, too."}
  else if (sentence==whisper(sentence)){
    return "I can't hear you!"}
  else if (sentence==shout(sentence)){
    return"YES INDEED!"}
}
