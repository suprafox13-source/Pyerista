window.register = async function(){
  const usernameVal = document.getElementById("username").value.trim();
  const emailVal = document.getElementById("email").value.trim();
  const passwordVal = document.getElementById("password").value;
  const bioVal = document.getElementById("bio").value.trim();
  const photoVal = document.getElementById("photo").value.trim();

  if(!usernameVal || !emailVal || !passwordVal){
    info.textContent = "Tüm zorunlu alanları doldur";
    return;
  }

  // aynı kullanıcı adı kontrolü
  const userDoc = await getDoc(doc(db, "users", usernameVal));
  if(userDoc.exists()){
    info.textContent = "Bu kullanıcı adı alınmış";
    return;
  }

  try{
    const cred = await createUserWithEmailAndPassword(
      auth,
      emailVal,
      passwordVal
    );

    await setDoc(doc(db, "users", usernameVal), {
      uid: cred.user.uid,
      email: emailVal,
      bio: bioVal,
      photo: photoVal || "https://via.placeholder.com/150",
      createdAt: new Date()
    });

    info.textContent = "Kayıt başarılı 🎉";
    updateCount();

  }catch(e){
    info.textContent = e.message;
  }
}
