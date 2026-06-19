export function toHTMLText(value: string = "") {
  if (value) { // this hack utilizes the dom to do the translation for us.
    const s = document.createElement("textarea")
    s.innerHTML = value;
    return s.value;
  }
  return "";
}
