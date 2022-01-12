const createNav = () => {
    let nav = document.querySelector('.navbar');
    nav.innerHTML =  `
        <div class="nav">
            <img src="image/logo.png"  class="brand-logo" alt="logo">
            <div class="nav-items">
                <div class="search">
                    <input type="text" class="search-box" placeholder="search brand, product">
                    <button class="search-btn" >Search</button>
                </div>
                <a href="#"><i class='bx bxs-user'></i></a>
                <a href="#"><i class='bx bxs-cart-alt'></i></a>
            </div>
        </div>
        <ul class="links-container">
            <li class="link-item"><a href="#" class="link">Home</a></li>
            <li class="link-item"><a href="#" class="link">Kids</a></li>
            <li class="link-item"><a href="#" class="link">Accessories</a></li>
            <li class="link-item"><a href="#" class="link">Handbags</a></li>
        </ul>
    `;
}

createNav();