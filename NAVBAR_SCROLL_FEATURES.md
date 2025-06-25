# Navbar Scroll to Section Features

## Fitur yang Telah Diimplementasi

### 1. **Smooth Scroll Navigation**
- Navbar dapat melakukan scroll smooth ke section berdasarkan ID
- Menggunakan `scrollIntoView()` dengan behavior smooth
- Menambahkan CSS `scroll-behavior: smooth` untuk fallback

### 2. **Active Section Detection**
- Menggunakan Intersection Observer API untuk mendeteksi section yang sedang aktif
- Navbar item akan berubah warna (highlight) sesuai section yang sedang dilihat
- Threshold 30% untuk menentukan kapan section dianggap aktif

### 3. **Responsive Design**
- **Desktop**: Navbar horizontal dengan button untuk scroll
- **Mobile**: Hamburger menu dengan dropdown navigation
- Mobile menu otomatis tertutup setelah memilih section

### 4. **Smart Navigation Logic**
- **Di halaman Home**: Button untuk scroll ke section
- **Di halaman lain**: Link untuk navigate ke Home dengan hash (#section)
- Auto-scroll ke section ketika mengakses URL dengan hash dari halaman lain

### 5. **Section yang Tersedia**
- `#home` - Hero section
- `#templates` - App Templates section  
- `#features` - Features section
- `#pricing` - Pricing section

## Cara Kerja

### Desktop Navigation
```tsx
{isHomePage ? (
  <button onClick={() => scrollToSection('home')}>Home</button>
) : (
  <Link to="/#home">Home</Link>
)}
```

### Mobile Navigation
- Hamburger menu dengan animasi icon
- Dropdown menu dengan smooth scroll functionality
- Auto-close setelah selection

### Active State Management
```tsx
const [activeSection, setActiveSection] = useState('home');

// Intersection Observer untuk detect active section
useEffect(() => {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        setActiveSection(sectionId);
      }
    });
  }, { threshold: 0.3 });
}, []);
```

### Hash Navigation Support
```tsx
useEffect(() => {
  if (isHomePage && location.hash) {
    const sectionId = location.hash.substring(1);
    setTimeout(() => scrollToSection(sectionId), 100);
  }
}, [location.pathname, location.hash]);
```

## Penggunaan

### Dari Navbar
- Klik menu item di navbar untuk scroll ke section
- Active state akan otomatis update sesuai scroll position

### Dari URL
- Akses `http://localhost:5174/#templates` untuk langsung ke section templates
- Akses `http://localhost:5174/#pricing` untuk langsung ke section pricing

### Mobile
- Tap hamburger menu untuk membuka navigation
- Tap menu item untuk scroll dan auto-close menu

## File yang Dimodifikasi

1. **`src/components/Layout.tsx`**
   - Menambahkan scroll functionality
   - Intersection Observer untuk active detection
   - Mobile menu implementation

2. **`src/pages/Home.tsx`**
   - Menambahkan ID ke setiap section
   - Menambahkan section Features dan Pricing

3. **`src/index.css`**
   - Menambahkan `scroll-behavior: smooth`

## Browser Support
- Modern browsers dengan support untuk:
  - Intersection Observer API
  - CSS `scroll-behavior: smooth`
  - ES6+ features
