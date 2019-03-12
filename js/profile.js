// Skill Saya Section
let btnTambahSkill = document.getElementById("btnTambahSkill")
let nodeSkill = document.getElementById("wrapperSkill")
let nodeError = document.getElementById("errorSkill")
let inputNamaSkill = document.getElementById("inputNamaSkill")
let inputPersenSkill = document.getElementById("inputPersenSkill")
let btnSimpanSkill = document.getElementById("btnSimpanSkill")
let btnKeluarModal = document.getElementById("keluarButton")
let btnCloseModal = document.getElementById("btnClose")

nodeError.style.display = "none";


btnSimpanSkill.addEventListener("click", function(){
    
    if(inputNamaSkill.value !== "" && inputPersenSkill.value !== ""){
        nodeError.style.display = "none";
        btnTambahSkill.click();

        setTimeout(function(){
            nodeSkill.innerHTML += '<div class="items my-3" data-wow-duration="3s"><h5>'+ inputNamaSkill.value +'</h5><div class="progress" style="height: 25px;"><div class="progress-bar" role="progressbar" style="width: '+ inputPersenSkill.value +'%;" aria-valuenow="'+ inputPersenSkill.value +'" aria-valuemin="0" aria-valuemax="100">'+ inputPersenSkill.value +'%</div></div></div>'
        }, 2000);

        

    }else{
        nodeError.style.display = "block";
    }

})

btnKeluarModal.addEventListener("click", function(){
    nodeError.style.display = "none";
    
    inputNamaSkill.value = "";
    inputPersenSkill.value = "";
})

btnCloseModal.addEventListener("click", function(){
    nodeError.style.display = "none";
    
    inputNamaSkill.value = "";
    inputPersenSkill.value = "";
})

// Profile Section

let namaProfile = document.getElementById("namaProfile")
let emailProfile = document.getElementById("emailProfile")
let telpProfile = document.getElementById("telpProfile")
let statusProfile = document.getElementById("statusProfile")
let simpanProfile = document.getElementById("simpanProfile")
let errorProfile = document.getElementById("errorProfile")
let FotoProfile = document.getElementById("FotoProfile")

let inputNamaLengkap = document.getElementById("namalengkap")
let inputEmailSaya = document.getElementById("emailsaya")
let inputNoTelp = document.getElementById("notelp")
let inputStatus = document.getElementById("statusProfileSaya")
let inputFotoProfile = document.getElementById("inputFotoProfile")

errorProfile.style.display = "none";

simpanProfile.addEventListener("click", function(){
    if(inputNamaLengkap.value !== "" && inputEmailSaya.value !== "" && inputNoTelp.value !== "" && inputStatus.value !== "-- Pilih --"){
        if(errorProfile.style.display !== "block"){
            FotoProfile.src = "/img/" + inputFotoProfile.files.name;

            namaProfile.innerHTML = inputNamaLengkap.value;
            emailProfile.innerHTML = inputEmailSaya.value;
            telpProfile.innerHTML = inputNoTelp.value;
            if(inputStatus.value === "Pelajar"){
                statusProfile.innerHTML = '<span class="badge badge-primary">Status</span>' + ' Pelajar';
            }else if(inputStatus.value === "Pekerja"){
                statusProfile.innerHTML = '<span class="badge badge-primary">Status</span>' + ' Pekerja';
            }else if(inputStatus.value === "Pengangguran"){
                statusProfile.innerHTML = '<span class="badge badge-primary">Status</span>' + ' Pengangguran';
            }
        }else{
            errorProfile.style.display = "none";
        }
    }else{
        errorProfile.style.display = "block";
    }
})





