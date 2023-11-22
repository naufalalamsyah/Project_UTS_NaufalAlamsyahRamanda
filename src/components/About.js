const About=()=>{
    return(
        <section class="about section" id="about">
            <h2 class="section-title">About Me</h2>

            <div class="about__container bd-grid">
                <div class="about__img">
                <img src="./assets/image/naufal.jpg" alt="" className="about__img" />
                </div>

                <div>
                    <p class="about__text">Hallo! Perkenalkan nama aku Naufal Alamsyah Ramanda bisa dipanggil Naufal atau Nopal. 
                    Saat ini aku sedang menjalani sebagai mahasiswa UPI di Bandung, 
                    jurusanku sendiri yaitu Pendidikan Ilmu Komputer angkatan 2022..</p>
                    <p class="about__text2">Saat ini aku masih menempuh semester 3 yang begitu berat untuk di jalani, 
                    tetapi aku selalu menikmati semua momen yang ada.</p>
                </div>
            </div>
        </section>
    );
}

export default About;