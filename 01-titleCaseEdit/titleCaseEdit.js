function titleCaseEdit(title) {
  // Insert code here;
  //splits the title by spaces
  const arr = title.split(" ");

  for (let i = 0; i < arr.length; i++) {
    // capitalizes first letter of each word
    arr[i] = arr[i].charAt(0).toUpperCase() + arr[i].slice(1);
  }

  //separatess the new titles by spaces
  const newTitle = arr.join(" ");
  return newTitle;
}

// Do not edit this line;
module.exports = titleCaseEdit;
