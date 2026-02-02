import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import { getAuth, onAuthStateChanged, signOut } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js";
import { getFirestore, doc, setDoc } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";

const db = getFirestore();

window.favoriEkle = async (projeId) => {proje1
  const user = auth.currentUser;
  if (!user) {
    alert("Favori için giriş yapmalısın");
    return;
  }

  await setDoc(doc(db, "favorites", user.uid + "_" + projeId), {
    userId: user.uid,
    projeId: proje1
  });

  alert("Favorilere eklendi ⭐");
};


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
  window.favoriEkle = function (projeId) {
  alert("Favori tıklandı: " + projeId);
    window.favoriEkle = (id) => alert(id);
    window.projeleriFiltrele = function () {
  const aramaInput = document.getElementById("projeAra");
  if (!aramaInput) return;

  const arama = aramaInput.value.toLowerCase();
  const projeler = document.querySelectorAll(".proje");

  projeler.forEach((proje) => {
    const metin = proje.innerText.toLowerCase();
    proje.style.display = metin.includes(arama) ? "block" : "none";
  });
};

    

};

