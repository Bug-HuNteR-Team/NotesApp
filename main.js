// This will be array which will store all our notes
let notes = [];
let submitBtn = document.getElementById("submitBtn");
submitBtn.addEventListener("click", () => {
  let title = document.getElementById("txtHeader").value;
  let content = document.getElementById("txtContent").value;
  // Onclick of button store the note in array
  //   console.log(title, " ", content);
  notes.push({
    title: title,
    content: content,
  });
  console.log(notes);
});

function changeStyle(propertyName) {
  switch (propertyName) {
    case "b":
      if (window.document.selection.style.fontWeight === "bold")
        window.document.selection.style.fontWeight = "normal";
      else window.document.selection.style.fontWeight = "bold";
      break;
    case "i":
      if (window.document.selection.style.fontStyle === "italic")
        window.document.selection.style.fontStyle = "normal";
      else window.document.selection.style.fontStyle = "italic";
      break;
    case "n":
      window.document.selection.style.fontWeight = "normal";
      window.document.selection.style.fontStyle = "normal";
      window.document.selection.style.textDecoration = "none";
      break;
    case "u":
      if (window.document.selection.style.textDecoration === "underline")
        window.document.selection.style.textDecoration = "none";
      else window.document.selection.style.textDecoration = "underline";
      break;
  }
}
