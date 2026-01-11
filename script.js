function openDetail() {
  document.getElementById("projects").classList.add("hidden");
  document.getElementById("project-detail").classList.remove("hidden");
}

function closeDetail() {
  document.getElementById("project-detail").classList.add("hidden");
  document.getElementById("projects").classList.remove("hidden");
}
