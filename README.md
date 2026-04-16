# 🌦️ The Weather Live App

## 📌 Project Summary

**The Weather Live App** เป็น Web Application สำหรับตรวจสอบสภาพอากาศแบบเรียลไทม์และพยากรณ์ล่วงหน้า โดยออกแบบมาให้ใช้งานง่าย รวดเร็ว และมี UI ที่ทันสมัย เหมาะสำหรับผู้ใช้งานทั่วไปและใช้เป็น Portfolio สำหรับนักพัฒนา

แอปนี้ดึงข้อมูลจาก API ภายนอก (Open-Meteo) และแสดงผลในรูปแบบที่เข้าใจง่าย เช่น อุณหภูมิ สภาพอากาศ และแนวโน้มรายวัน

---

## ⚙️ การทำงานของแอป

* ผู้ใช้กรอกชื่อเมือง
* ระบบทำการแปลงชื่อเมืองเป็นพิกัด (Geocoding)
* ดึงข้อมูลสภาพอากาศจาก Open-Meteo API
* แสดงผลข้อมูลแบบ:

  * สภาพอากาศปัจจุบัน
  * พยากรณ์ล่วงหน้า 7 วัน
* UI ถูกออกแบบให้สะอาด อ่านง่าย และ Responsive

---

## 🚀 ฟีเจอร์หลัก

### 1. 🔍 ค้นหาสภาพอากาศตามชื่อเมือง

* รองรับการค้นหาหลายประเทศ
* แปลงชื่อเมืองเป็นพิกัดอัตโนมัติ (Geocoding)

---

### 2. 🌤️ แสดงสภาพอากาศปัจจุบัน

* อุณหภูมิแบบเรียลไทม์
* คำอธิบายสภาพอากาศ (แดด, ฝน, เมฆ ฯลฯ)
* Weather Icon แบบ Dynamic

---

### 3. 📅 พยากรณ์อากาศล่วงหน้า 7 วัน

* แสดงผลแบบ Grid Layout
* ข้อมูลที่แสดง:

  * วัน (Mon, Tue, ...)
  * อุณหภูมิสูงสุด / ต่ำสุด
  * ไอคอนสภาพอากาศ
* UI เน้นความสะอาดและอ่านง่าย

---

### 4. 🎨 Modern UI/UX Design

* ใช้ Grid Layout
* Card Design พร้อม Shadow และ Hover Effect
* Responsive รองรับ Mobile
* ดีไซน์แนว Minimal + Premium

---

### 5. 🌙 Dark / Light Mode

* Toggle เปลี่ยนธีมได้
* ใช้ CSS Variables ควบคุม Theme
* ปุ่ม Toggle อยู่มุมบนขวา (Fixed Position)

---

### 6. ⚡ Performance & Structure

* ใช้ **Next.js Server Components** สำหรับ Fetch Data
* แยก Component ชัดเจน:

  * `SearchBox`
  * `WeatherCard`
  * `ForecastCard`
* ใช้ **TypeScript** เพิ่มความปลอดภัยของโค้ด

---

## 🛠️ เทคโนโลยีที่ใช้

| Category | Technology           |
| -------- | -------------------- |
| Frontend | Next.js (App Router) |
| Language | TypeScript           |
| Styling  | CSS (Custom)         |
| API      | Open-Meteo           |
| Tooling  | ESLint               |

---

## ⭐ จุดเด่นของโปรเจกต์

* โครงสร้างโค้ด Scalable และ Maintainable
* UI ทันสมัย เหมาะสำหรับ Portfolio
* แยก Logic และ Presentation ชัดเจน
* รองรับการต่อยอดฟีเจอร์ในอนาคต

---

## 🔮 แนวทางพัฒนาต่อ (Future Improvements)

* เพิ่ม **Hourly Forecast**
* เพิ่ม **Loading Skeleton**
* ใช้ Animation (เช่น Framer Motion)
* เพิ่มระบบ **Favorite Cities**
* พัฒนาเป็น **PWA** (รองรับการติดตั้งบนมือถือ)

---

## 📷 Preview (Optional)

> สามารถเพิ่ม Screenshot หรือ GIF ของแอปในส่วนนี้

---

## 📦 Installation (Optional)

```bash
git clone <your-repo-url>
cd weather-live-app
npm install
npm run dev
```

---

## 📄 License

This project is for educational and portfolio purposes.
