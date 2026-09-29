// ===========================
// PRODUCT DATA
// ===========================
const products = [
  // Sabonetes
  {
    name: 'Macadâmia',
    type: 'sabonete',
    fullName: 'Sabonete Artesanal de Macadâmia',
    weight: '90g',
    price: '10,80',
    image: 'public/Sabonete artesanal de Macadâmia 90gr.jpeg',
    description: 'Hidratação e suavidade',
  },
  {
    name: 'Pêssego',
    type: 'sabonete',
    fullName: 'Sabonete Artesanal de Pêssego',
    weight: '90g',
    price: '10,80',
    image: 'public/Sabonete artesanal de pêssego 90gr.jpeg',
    description: 'Frescor e delicadeza',
  },
  {
    name: 'Capim Limão',
    type: 'sabonete',
    fullName: 'Sabonete Artesanal Capim Limão',
    weight: '90g',
    price: '10,80',
    image: 'public/Sabonete capim limão 90gr.jpeg',
    description: 'Revigorante e cítrico',
  },
  {
    name: 'Maracujá',
    type: 'sabonete',
    fullName: 'Sabonete Artesanal de Maracujá',
    weight: '80g',
    price: '9,60',
    image: 'public/Sabonete artesanal Maracujá 80gr.jpeg',
    description: 'Suavidade tropical',
  },
  {
    name: 'Erva Doce',
    type: 'sabonete',
    fullName: 'Sabonete Artesanal de Erva Doce',
    weight: '80g',
    price: '9,60',
    image: 'public/Sabonete artesanal de Erva Doce 80gr.jpeg',
    description: 'Aroma calmante',
  },
  {
    name: 'Framboesa',
    type: 'sabonete',
    fullName: 'Sabonete Artesanal de Framboesa',
    weight: '80g',
    price: '9,60',
    image: 'public/Sabonete artesanal de Framboesa 80gr.jpeg',
    description: 'Doçura e frescor',
  },
  {
    name: 'Camomila',
    type: 'sabonete',
    fullName: 'Sabonete Artesanal de Camomila',
    weight: '80g',
    price: '9,60',
    image: 'public/Sabonete artesanal de camomila 80gr.jpeg',
    description: 'Relaxante e suave',
  },
  {
    name: 'Cereja e Avelã',
    type: 'sabonete',
    fullName: 'Sabonete Artesanal de Cereja e Avelã',
    weight: '75g',
    price: '9,00',
    image: 'public/Sabonete artesanal de Cereja e Avelã 75gr.jpeg',
    description: 'Combinação irresistível',
  },
  {
    name: 'Herbal',
    type: 'sabonete',
    fullName: 'Sabonete Artesanal Herbal',
    weight: '70g',
    price: '8,40',
    image: 'public/Sabonete artesanal Herbal 70gr.jpeg',
    description: 'Essência natural',
  },
  {
    name: 'Oceano',
    type: 'sabonete',
    fullName: 'Sabonete Artesanal Oceano',
    weight: '70g',
    price: '8,40',
    image: 'public/Sabonete artesanal Oceano 70gr.jpeg',
    description: 'Frescor marinho',
  },
  {
    name: 'Rosa',
    type: 'sabonete',
    fullName: 'Sabonete Artesanal de Rosa',
    weight: '70g',
    price: '8,40',
    image: 'public/Sabonete artesanal Rosa 70gr.jpeg',
    description: 'Delicadeza floral',
  },
  {
    name: 'Bergamota',
    type: 'sabonete',
    fullName: 'Sabonete Artesanal de Bergamota',
    weight: '70g',
    price: '8,40',
    image: 'public/Sabonete artesanal de Bergamota 70gr.jpeg',
    description: 'Aroma cítrico refinado',
  },
  {
    name: 'Mel',
    type: 'sabonete',
    fullName: 'Sabonete Artesanal de Mel',
    weight: '70g',
    price: '8,40',
    image: 'public/Sabonete artesanal de Mel 70gr.jpeg',
    description: 'Nutrição e hidratação',
  },
  {
    name: 'Morango',
    type: 'sabonete',
    fullName: 'Sabonete Artesanal de Morango',
    weight: '70g',
    price: '8,40',
    image: 'public/Sabonete artesanal de Morango 70gr.jpeg',
    description: 'Doçura irresistível',
  },
  {
    name: 'Lavanda',
    type: 'sabonete',
    fullName: 'Sabonete Artesanal de Lavanda',
    weight: '70g',
    price: '8,40',
    image: 'public/Sabonete artesanal de lavanda 70gr.jpeg',
    description: 'Relaxamento e bem-estar',
  },

  // Difusores
  {
    name: 'Lavanda',
    type: 'difusor',
    fullName: 'Difusor de Ambientes Lavanda',
    weight: '100ml',
    price: '25,00',
    image: 'public/Difusor de ambientes Lavanda 100 ml.jpeg',
    description: 'Aroma relaxante para ambientes',
  },
]

// ===========================
// RENDER PRODUCTS
// ===========================
function createProductCard(product, index) {
  const card = document.createElement('div')
  card.className = `product-card reveal reveal-delay-${(index % 4) + 1}`
  card.id = `product-${product.type}-${product.name.toLowerCase().replace(/\s+/g, '-')}`

  card.innerHTML = `
    <div class="product-card-image-wrapper">
      <img
        src="${product.image}"
        alt="${product.fullName}"
        loading="lazy"
      >
      <span class="product-card-badge">${product.weight}</span>
    </div>
    <div class="product-card-info">
      <h3 class="product-card-name">${product.name}</h3>
      ${product.type === 'sabonete' ? '' : `<p class="product-card-variant">${product.description}</p>`}
      <div class="product-card-price-row">
        <span class="product-card-price">${product.price !== '—' ? 'R$ ' + product.price : 'Consulte'}</span>
        <span class="product-card-weight">${product.weight}</span>
      </div>
    </div>
  `

  return card
}

function renderProducts() {
  const sabonetes = products.filter((p) => p.type === 'sabonete')
  const difusores = products.filter((p) => p.type === 'difusor')

  const gridSabonetes = document.getElementById('products-grid-sabonetes')
  const gridDifusores = document.getElementById('products-grid-difusores')

  sabonetes.forEach((product, i) => {
    gridSabonetes.appendChild(createProductCard(product, i))
  })

  difusores.forEach((product, i) => {
    gridDifusores.appendChild(createProductCard(product, i))
  })
}

// ===========================
// SCROLL REVEAL ANIMATION
// ===========================
function initScrollReveal() {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible')
          observer.unobserve(entry.target)
        }
      })
    },
    {
      threshold: 0.1,
      rootMargin: '0px 0px -40px 0px',
    },
  )

  document.querySelectorAll('.reveal').forEach((el) => {
    observer.observe(el)
  })
}

// ===========================
// SMOOTH SCROLL FOR CTA
// ===========================
function initSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault()
      const target = document.querySelector(this.getAttribute('href'))
      if (target) {
        target.scrollIntoView({
          behavior: 'smooth',
          block: 'start',
        })
      }
    })
  })
}

// ===========================
// HERO PARALLAX EFFECT
// ===========================
function initParallax() {
  const hero = document.getElementById('hero')
  const leaves = document.querySelectorAll('.floating-leaf')

  window.addEventListener(
    'scroll',
    () => {
      const scrollY = window.scrollY
      const heroHeight = hero.offsetHeight

      if (scrollY < heroHeight) {
        const ratio = scrollY / heroHeight
        leaves.forEach((leaf, i) => {
          const speed = (i + 1) * 0.3
          leaf.style.transform = `translateY(${-scrollY * speed}px) rotate(${scrollY * 0.05}deg)`
        })
      }
    },
    { passive: true },
  )
}

// ===========================
// INIT
// ===========================
document.addEventListener('DOMContentLoaded', () => {
  renderProducts()
  initScrollReveal()
  initSmoothScroll()
  initParallax()
})
