# Contact App 📇

یک برنامه مدیریت مخاطبین ساده با استفاده از React.  
این پروژه برای تمرین مفاهیم Context API، فرم‌ها، اعتبارسنجی و ساخت نمونه‌کار انجام شده است.

## ✨ ویژگی‌ها

- افزودن، ویرایش و حذف مخاطبین
- حذف گروهی مخاطبین
- جستجو بر اساس نام، نام خانوادگی و ایمیل
- تایید عملیات‌ها با مدال
- استفاده از Context API و useReducer
- فرم‌های قابل استفاده مجدد (Reusable)
- اعتبارسنجی با Yup
- مدیریت فرم‌ها با React Hook Form
- API ساختگی با json-server

## 🛠 تکنولوژی‌ها

- React
- Context API
- useReducer
- React Hook Form
- Yup
- json-server

## 🧑‍💻 اجرا

```bash
npm install
npm run dev
```

## 🗃 ساختار پوشه‌ها

```
src/
│
├─ components/
│  ├─ ContactForm.jsx
│  ├─ ContactList.jsx
│  ├─ ConfirmModal.jsx
│  └─ forms/
│      └─ TextInput.jsx
│
├─ context/
│  ├─ ContactContext.js
│  └─ ContactProvider.jsx
│
├─ styles/
│  └─ app.css
│
├─ App.jsx
└─ main.jsx
```

## 🧪 اعتبارسنجی فرم

اعتبارسنجی فرم‌ها با استفاده از Yup و React Hook Form انجام شده است.
