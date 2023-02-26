function changeBackgroundColor(e) {
  // ここに背景色を変える処理を書く。
  const checked = e.target.checked;
  const text = document.getElementById("text");
  if (checked) {
    text.style.backgroundColor = "red";
    return;
  }
  text.style.backgroundColor = "transparent";
}
