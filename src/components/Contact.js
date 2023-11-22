const Contact=()=>{
    return(
        <section class="contact section" id="contact">
            <h2 class="section-title">Kontak Saya</h2>

            <div class="contact__container bd-grid">
                <div class="contact__info">
                    <h3 class="contactSubtitle">Email</h3>
                    <span class="contactText">naufalalamsyahramanda@gmail.com</span>

                    <h3 class="contactSubtitle">No. Handphone</h3>
                    <span class="contactText">089653225730</span>

                    <h3 class="contactSubtitle">Alamat</h3>
                    <span class="contactText">Jl. Geger Arum Bawah No 155 RT/RW 07/01, Kelurahan Geger Kalong, 
                    Kecamatan Sukasari, Kota Bandung</span>
                    
            

                </div>

                <form action="" class="contact__form">
                    <div class="contact__inputs">
                        <input type="text" id="nama" placeholder="Nama" class="contact__input"></input>
                        <input type="mail" id="email" placeholder="Email" class="contact__input"></input>
                        <input type="text" id="nohandphone" placeholder="No. Handphone" class="contact__input"></input>
                        <input type="text" id="alamat" placeholder="Alamat" class="contact__input"></input>
                    </div>

                    <textarea name="pesan" id="pesan" cols="0" rows="10" class="contact__input" placeholder="Tulis pesan anda disini..."></textarea>

                    <input type="submit" value="Kirim" class="contact__button" onClick="alert('Pesan Telah Terkirim!')"></input>
                </form>
            </div>
        </section>
    );
}

export default Contact;