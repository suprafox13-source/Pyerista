import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import { getAuth, onAuthStateChanged, signOut } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js";

const firebaseConfig = {
  apiKey: "AIzaSyCwl2xoth2_jFKGvCHb-NDqS6IXhakGRQM",
  authDomain: "pyerista.firebaseapp.com",
  projectId: "pyerista",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

const uyeBtn = document.getElementById("uyeBtn");
const profilAlan = document.getElementById("profilAlan");
const profilResim = document.getElementById("profilResim");
const cikisBtn = document.getElementById("cikisBtn");

onAuthStateChanged(auth, (user) => {
  if (user) {
    uyeBtn.style.display = "none";
    profilAlan.style.display = "block";
  } else {
    uyeBtn.style.display = "inline-block";
    profilAlan.style.display = "none";
  }
});

profilResim.onclick = () => {
  cikisBtn.style.display =
    cikisBtn.style.display === "none" ? "block" : "none";
};

cikisBtn.onclick = async () => {
  await signOut(auth);
  location.reload();
};

