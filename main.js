// This will be array which will store all our notes
let notes = [];
let submitBtn = document.getElementById("submitBtn");
submitBtn.addEventListener("click", () => {
  let title = document.getElementById("txtHeader").value;
  let content = document.getElementById("txtContent").value;
  notes.push({
    title: title,
    content: content,
  });
  console.log(notes);
});

function changeStyle(propertyName) {
  // get the textarea
  var txtarea = document.getElementById("txtContent");
  // get the selected text
  let selected = document.getSelection();
  // buttons logic
  switch (propertyName) {
    case "b":
      let boldtext = '<span style="font-weight:bold;">' + selected + "</span>";
      txtarea.innerHTML = txtarea.innerHTML.replace(
        document.getSelection(),
        boldtext
      );
      break;
    case "i":
      let italicText =
        '<span style="font-style: italic;">' + selected + "</span>";
      txtarea.innerHTML = txtarea.innerHTML.replace(
        document.getSelection(),
        italicText
      );
      break;
    case "n":
      let normalText =
        '<span style="font-style: normal; font-weight:normal; text-decoration:none;">' +
        selected +
        "</span>";
      txtarea.innerHTML = txtarea.innerHTML.replace(
        document.getSelection(),
        normalText
      );
      break;
    case "u":
      let underlineText =
        '<span style="text-decoration: underline;">' + selected + "</span>";
      txtarea.innerHTML = txtarea.innerHTML.replace(
        document.getSelection(),
        underlineText
      );
      break;
  }
}
