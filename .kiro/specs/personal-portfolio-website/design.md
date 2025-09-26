# Design Document

## Overview

تصميم موقع ويب تعريفي شخصي احترافي للمستخدم عمر باستخدام HTML5, CSS3, وJavaScript vanilla. الموقع سيكون single-page application مع تصميم متجاوب وداعم للغة العربية بشكل كامل. سيتم استضافته على GitHub Pages مع التركيز على الأداء والجمالية الإسلامية.

## Architecture

### Frontend Architecture
- **Static Website**: موقع ثابت يعتمد على HTML/CSS/JS فقط
- **Single Page Application**: صفحة واحدة مع أقسام متعددة
- **Progressive Enhancement**: تحسين تدريجي للتجربة
- **Mobile-First Design**: تصميم يبدأ من الهاتف المحمول

### File Structure
```
/
├── index.html          # الصفحة الرئيسية
├── css/
│   ├── main.css       # الأنماط الرئيسية
│   ├── fonts.css      # خطوط عربية إسلامية
│   └── responsive.css # الاستجابة للشاشات
├── js/
│   ├── main.js        # الوظائف الرئيسية
│   └── animations.js  # الحركات والتأثيرات
├── assets/
│   ├── images/
│   │   └── umar.jpg   # صورة المستخدم
│   └── fonts/         # ملفات الخطوط
└── README.md          # وثائق المشروع
```

## Components and Interfaces

### 1. Header Section
- **Logo/Name**: اسم "عمر" بخط عربي إسلامي مميز
- **Navigation**: قائمة تنقل أفقية (عني، مهاراتي، أعمالي، تواصل)
- **Language Toggle**: إمكانية التبديل بين العربية والإنجليزية (مستقبلياً)

### 2. Hero Section
- **Profile Image**: صورة Umar.jpg مع إطار دائري أنيق
- **Introduction**: نص تعريفي قصير ومؤثر
- **Call-to-Action**: أزرار للتواصل أو تحميل السيرة الذاتية
- **Background**: خلفية متدرجة بألوان إسلامية راقية

### 3. About Section
- **Personal Info**: معلومات شخصية مختصرة
- **Skills**: مهارات تقنية ومهنية
- **Interests**: اهتمامات شخصية
- **Timeline**: خط زمني للإنجازات

### 4. Portfolio Section
- **Project Cards**: بطاقات للمشاريع مع صور ووصف
- **Filter System**: نظام تصفية حسب نوع المشروع
- **Modal Windows**: نوافذ منبثقة لتفاصيل المشاريع

### 5. Contact Section
- **Contact Form**: نموذج تواصل بسيط
- **Social Links**: روابط وسائل التواصل الاجتماعي
- **Location**: معلومات الموقع (اختيارية)

### 6. Footer
- **Copyright**: حقوق النشر
- **Quick Links**: روابط سريعة
- **Back to Top**: زر العودة للأعلى

## Data Models

### User Profile
```javascript
const userProfile = {
  name: "عمر",
  title: "مطور ويب",
  bio: "نص تعريفي قصير",
  image: "assets/images/umar.jpg",
  skills: ["HTML", "CSS", "JavaScript", "..."],
  projects: [
    {
      id: 1,
      title: "اسم المشروع",
      description: "وصف المشروع",
      image: "path/to/image",
      technologies: ["تقنية1", "تقنية2"],
      link: "رابط المشروع"
    }
  ],
  contact: {
    email: "email@example.com",
    phone: "+1234567890",
    social: {
      github: "username",
      linkedin: "username",
      twitter: "username"
    }
  }
}
```

## Design System

### Color Palette
- **Primary**: #2C5530 (أخضر إسلامي داكن)
- **Secondary**: #8B4513 (بني ذهبي)
- **Accent**: #DAA520 (ذهبي)
- **Background**: #F5F5DC (بيج فاتح)
- **Text**: #2F4F4F (رمادي داكن)
- **White**: #FFFFFF
- **Light Gray**: #F8F8F8

### Typography
- **Primary Font**: "Amiri" - خط عربي إسلامي كلاسيكي
- **Secondary Font**: "Cairo" - خط عربي عصري للنصوص
- **English Font**: "Playfair Display" - للنصوص الإنجليزية
- **Monospace**: "Fira Code" - للكود والتقنيات

### Spacing System
- **Base Unit**: 8px
- **Small**: 8px, 16px
- **Medium**: 24px, 32px
- **Large**: 48px, 64px
- **XLarge**: 96px, 128px

### Border Radius
- **Small**: 4px
- **Medium**: 8px
- **Large**: 16px
- **Circle**: 50%

## Error Handling

### Image Loading
- **Fallback Images**: صور احتياطية في حالة فشل التحميل
- **Lazy Loading**: تحميل الصور عند الحاجة
- **Alt Text**: نصوص بديلة لجميع الصور

### Form Validation
- **Client-side Validation**: التحقق من البيانات قبل الإرسال
- **Error Messages**: رسائل خطأ واضحة بالعربية
- **Success Feedback**: تأكيد نجاح الإرسال

### Browser Compatibility
- **Progressive Enhancement**: دعم المتصفحات القديمة
- **Polyfills**: حلول للميزات غير المدعومة
- **Graceful Degradation**: تدهور تدريجي للوظائف

## Testing Strategy

### Manual Testing
- **Cross-browser Testing**: اختبار على متصفحات مختلفة
- **Device Testing**: اختبار على أجهزة مختلفة
- **RTL Testing**: اختبار دعم النصوص العربية
- **Performance Testing**: اختبار سرعة التحميل

### Automated Testing
- **HTML Validation**: التحقق من صحة HTML
- **CSS Validation**: التحقق من صحة CSS
- **Accessibility Testing**: اختبار إمكانية الوصول
- **Lighthouse Audit**: تدقيق الأداء والجودة

### GitHub Pages Deployment
- **Build Process**: عملية البناء والنشر
- **Custom Domain**: إعداد النطاق المخصص
- **HTTPS**: تفعيل الأمان
- **404 Page**: صفحة خطأ مخصصة

## Performance Optimization

### Image Optimization
- **WebP Format**: تنسيق صور محسن
- **Responsive Images**: صور متجاوبة
- **Compression**: ضغط الصور

### CSS Optimization
- **Minification**: تصغير ملفات CSS
- **Critical CSS**: CSS مهم للتحميل الأولي
- **Font Loading**: تحسين تحميل الخطوط

### JavaScript Optimization
- **Minification**: تصغير ملفات JS
- **Lazy Loading**: تحميل مؤجل للمكونات
- **Event Delegation**: تفويض الأحداث

## Accessibility Features

### WCAG Compliance
- **Semantic HTML**: HTML دلالي صحيح
- **ARIA Labels**: تسميات ARIA للقارئات
- **Keyboard Navigation**: تنقل بلوحة المفاتيح
- **Color Contrast**: تباين ألوان مناسب

### RTL Support
- **Direction Attribute**: خاصية الاتجاه
- **Text Alignment**: محاذاة النصوص
- **Layout Mirroring**: عكس التخطيط للعربية