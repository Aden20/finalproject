let dataSkill = skill.pekerjaan;

let inputSearch = document.getElementById("job-search");
let btnSearch = document.getElementById("btn-search");
let nodeSearch = document.getElementsByClassName("search-below")[0];

let deskripsi = document.getElementById("deskripsi");


// Search Input Behavior

inputSearch.addEventListener("keypress", function (e) {

    if (e.key === "Enter") {
        if (inputSearch.value !== null && inputSearch.value !== '') {
            for (var i = 0; i < dataSkill.length; i++) {
                IsiInput = inputSearch.value;
                if (IsiInput === dataSkill[i].nama) {
                    nodeSearch.innerHTML = '<div class="col-sm-6 mb-5 mb-sm-5 mb-lg-0 col-lg-4"><div class="card shadow-lg"><img src="' + dataSkill[i].gambar + '" class="card-img-top" alt="..."><div class="card-body"><h5 class="card-title">' + dataSkill[i].nama + '</h5><p class="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit.Hic, animi at blanditiis nam molestiae</p><a href="#" class="btn btn-primary"><i class="fas fa-search"></i> Lihat Detail</a></div></div></div>'
                }
            }
        } else {
            nodeSearch.innerHTML = '<div class="alert alert-danger alert-dismissible fade show w-100" role="alert"><strong><i class="fas fa-eye-slash"></i> Data Tidak Ditemukan</strong> anda harus memasukan data yang benar<button type="button" class="close" data-dismiss="alert" aria-label="Close"><span aria-hidden="true">&times;</span></button></div>'
            nodeSearch.value = "";
        }
    }

})

btnSearch.addEventListener("click", function (e) {

    if (inputSearch.value !== null && inputSearch.value !== '') {
        for (var i = 0; i < dataSkill.length; i++) {
            IsiInput = inputSearch.value;
            if (IsiInput === dataSkill[i].nama) {
                nodeSearch.innerHTML = '<div class="col-sm-6 mb-5 mb-sm-5 mb-lg-0 col-lg-4"><div class="card shadow-lg"><img src="' + dataSkill[i].gambar + '" class="card-img-top" alt="' + dataSkill[i].nama + '"><div class="card-body"><h5 class="card-title">' + dataSkill[i].nama + '</h5><p class="card-text">' + dataSkill[i].deskripsi + '</p><a href="#!" class="btn btn-primary"><i class="fas fa-search"></i> Lihat Detail</a></div></div></div>'
            }
        }
    } else {
        nodeSearch.innerHTML = '<div class="alert alert-danger alert-dismissible fade show w-100" role="alert"><strong><i class="fas fa-eye-slash"></i> Data Tidak Ditemukan</strong> anda harus memasukan data yang benar<button type="button" class="close" data-dismiss="alert" aria-label="Close"><span aria-hidden="true">&times;</span></button></div>'
        nodeSearch.value = "";
    }

})


