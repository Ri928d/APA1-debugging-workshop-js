function capitalise(word) {
  //word[0] = word[0].toUpperCase();

  return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
  
}
  



module.exports = { capitalise };

 
