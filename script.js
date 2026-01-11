function toggleDetails(id) {
  const el = document.getElementById(id);

  if (!el) {
    console.error("Böyle bir id yok:", id);
    return;
  }

  if (el.style.display === "block") {
    el.style.display = "none";
  } else {
    el.style.display = "block";
  }
}
