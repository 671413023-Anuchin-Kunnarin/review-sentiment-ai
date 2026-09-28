# Product Review Sentiment Prediction System using AIForThai
### ระบบทำนายความรู้สึกจากรีวิวสินค้าโดยใช้ AIForThai

[![Python](https://img.shields.io/badge/Python-3.9+-3776AB?style=for-the-badge&logo=python&logoColor=white)](https://www.python.org/)
[![Flask](https://img.shields.io/badge/Flask-3.x-000000?style=for-the-badge&logo=flask&logoColor=white)](https://flask.palletsprojects.com/)
[![AIForThai](https://img.shields.io/badge/AIForThai-S--Sense%20API-10B981?style=for-the-badge)](https://aiforthai.in.th/)
[![Course Project](https://img.shields.io/badge/Mini%20Project-NLP%20%2F%20AI-6366F1?style=for-the-badge)](#)

---

## 📌 รายละเอียดโครงการ (Project Description)

**ระบบทำนายความรู้สึกจากรีวิวสินค้าโดยใช้ AIForThai (Product Review Sentiment Prediction System)** เป็นโครงงานขนาดเล็ก (Mini Project) ทางด้านการประมวลผลภาษาธรรมชาติ (Natural Language Processing: NLP) และการพัฒนาเว็บแอปพลิเคชัน โดยมีวัตถุประสงค์เพื่อจำแนกและวิเคราะห์ขั้วอารมณ์ (Sentiment Analysis) ของข้อความรีวิวสินค้าภาษาไทยของผู้บริโภคบนแพลตฟอร์มอีคอมเมิร์ซ

ระบบเชื่อมต่อกับโมเดลประมวลผลภาษาไทย **S-Sense API** จากแพลตฟอร์ม **AIForThai** (พัฒนาโดยศูนย์เทคโนโลยีอิเล็กทรอนิกส์และคอมพิวเตอร์แห่งชาติ: NECTEC) เพื่อนำข้อความรีวิวมาตัดคำและประเมินขั้วอารมณ์ว่าเป็น **เชิงบวก (Positive)**, **เป็นกลาง (Neutral)** หรือ **เชิงลบ (Negative)** พร้อมคำนวณค่าคะแนนความรู้สึก (Sentiment Score) เพื่อแสดงผลลัพธ์ผ่านหน้าเว็บที่สวยงาม ทันสมัย ใช้งานง่าย และเหมาะสำหรับการนำเสนอผลงานวิชาการ

---

## ✨ ฟีเจอร์เด่น (Key Features)

- 🔍 **Real-time Thai Sentiment Analysis**: ประมวลผลและจำแนกอารมณ์จากข้อความภาษาไทยด้วย AI For Thai S-Sense แบบทันที
- 📊 **Comprehensive Output**: แสดงผลลัพธ์ครอบคลุม 4 มิติ:
  - อีโมจิแสดงอารมณ์ (😊 เชิงบวก, 😐 เป็นกลาง, 😞 เชิงลบ)
  - ผลการจำแนกภาษาไทย (เชิงบวก / เป็นกลาง / เชิงลบ)
  - ขั้วอารมณ์ภาษาอังกฤษ (Polarity: Positive / Neutral / Negative)
  - ค่าคะแนนความรู้สึก (Sentiment Score)
- 💡 **Quick Test Presets**: ปุ่มคลิกเลือกตัวอย่างรีวิวทดสอบ 3 รูปแบบ (บวก, กลาง, ลบ) ช่วยให้การสาธิตและทดสอบทำได้อย่างสะดวกรวดเร็ว
- 🎨 **Adaptive Color Themes**: การ์ดแสดงผลลัพธ์เปลี่ยนโทนสีและสไตล์อัตโนมัติตามประเภทผลลัพธ์ (เขียว/เทา/แดง)
- ⏳ **Interactive Loading State**: แสดงสถานะกำลังประมวลผล ป้องกันการกดย้ำ และให้ Feedback แก่ผู้ใช้ขณะรอ API
- 📱 **Responsive UI**: ออกแบบด้วยสไตล์โมเดิร์น ใช้ Google Fonts (Prompt) รองรับทั้งคอมพิวเตอร์ แท็บเล็ต และสมาร์ตโฟน
- ⚠️ **Clear Error Handling**: แสดงข้อความแจ้งเตือนชัดเจนเมื่อเกิดข้อผิดพลาด เช่น ลืมกรอกข้อความ หรือการเชื่อมต่อเครือข่ายขัดข้อง

---

## 🛠️ เทคโนโลยีที่ใช้ (Technologies Used)

- **Backend**:
  - [Python 3](https://www.python.org/)
  - [Flask 3.x](https://flask.palletsprojects.com/) - ไมโครเว็บเฟรมเวิร์กสำหรับจัดการ Routing และประมวลผลฝั่งเซิร์ฟเวอร์
  - [Requests](https://requests.readthedocs.io/) - HTTP Library สำหรับเรียกใช้งาน REST API ไปยัง AIForThai
  - [python-dotenv](https://github.com/theskumar/python-dotenv) - จัดการตัวแปรสภาพแวดล้อมและ API Key อย่างปลอดภัย
- **Frontend**:
  - HTML5 & Semantic Elements
  - CSS3 (Custom Properties, Flexbox, CSS Grid, Glassmorphic Effects, Keyframe Animations)
  - Vanilla JavaScript (DOM Manipulation, Event Handling, Client Validation)
  - Google Fonts: [Prompt](https://fonts.google.com/specimen/Prompt)
- **AI & NLP Engine**:
  - [AIForThai S-Sense API](https://api.aiforthai.in.th/ssense) (NECTEC)

---

## 🔄 หลักการทำงานของระบบ (How the System Works)

```
[ ผู้ใช้งานกรอกรีวิว ] ──▶ [ หน้าเว็บ Frontend (HTML/JS) ]
                                    │  (HTTP POST)
                                    ▼
                          [ Flask Server (app.py) ]
                                    │
                                    │ (GET Request พร้อม API Key & Text)
                                    ▼
                         [ AIForThai S-Sense API ]
                                    │
                                    │ (ประมวลผล: ตัดคำ, สกัดคีย์เวิร์ด, วิเคราะห์ความรู้สึก)
                                    ▼
                         [ ส่งผลลัพธ์ JSON กลับมา ]
                                    │
                                    ▼
                        [ Flask ประมวลผลและแปลงค่า ]
                         - polarity (positive/negative/neutral)
                         - score
                         - emoji & thai_result
                                    │
                                    ▼
                      [ แสดงผลการ์ดลัพธ์บนหน้าจอ ]
```

1. ผู้ใช้กรอกข้อความรีวิวสินค้าใน Textarea หรือกดเลือกจากปุ่มตัวอย่าง 3 รูปแบบ
2. เมื่อกดปุ่ม **"วิเคราะห์ความรู้สึก"** ฟอร์มจะส่งคำขอแบบ HTTP POST ไปยัง Flask Backend
3. Backend ดึง API Key จากไฟล์ `.env` แล้วส่ง Request ไปยัง Endpoint `https://api.aiforthai.in.th/ssense`
4. บริการ AIForThai S-Sense ทำการตัดคำและวิเคราะห์ขั้วอารมณ์ จากนั้นตอบกลับมาในรูปแบบ JSON
5. Backend นำค่า Polarity และ Score มาจับคู่กับคำแปลภาษาไทยและ Emoji
6. ส่งผลลัพธ์ไปยัง Template `index.html` เพื่อแสดงการ์ดผลลัพธ์ตามธีมสีที่สอดคล้อง

---

## 📁 โครงสร้างโปรเจกต์ (Project Structure)

```text
review-sentiment-ai/
├── app.py              # ไฟล์หลักของ Flask Application (Routing & API Logic)
├── test_api.py         # สคริปต์ทดสอบการเชื่อมต่อ API เบื้องต้น
├── requirements.txt    # รายการ Library ของ Python ที่ต้องติดตั้ง
├── .env.example        # ไฟล์ตัวอย่างสำหรับการตั้งค่า Environment Variables
├── .gitignore          # ระบุไฟล์และโฟลเดอร์ที่ไม่ต้องการนำขึ้น Git (รวม .env)
├── README.md           # เอกสารอธิบายโครงงานและการติดตั้ง
├── templates/
│   └── index.html      # หน้าเว็บหลัก (Jinja2 Template ภาษาไทย)
└── static/
    ├── style.css       # ไฟล์ตกแต่งหน้าตา ดีไซน์สี และ Responsive
    └── script.js       # จัดการ Interaction ปุ่มตัวอย่าง ตัวนับตัวอักษร และ Loading State
```

---

## ⚙️ ขั้นตอนการติดตั้งและการใช้งาน (Installation & Setup)

### 1. โคลนหรือเปิดโฟลเดอร์โปรเจกต์
```bash
cd review-sentiment-ai
```

### 2. สร้างและเปิดใช้งาน Virtual Environment
- **macOS / Linux**:
  ```bash
  python3 -m venv venv
  source venv/bin/activate
  ```
- **Windows**:
  ```cmd
  python -m venv venv
  venv\Scripts\activate
  ```

### 3. ติดตั้ง Dependencies ที่จำเป็น
```bash
pip install -r requirements.txt
```
*(หรือติดตั้งรายแพ็กเกจ: `pip install flask requests python-dotenv`)*

---

## 🔑 การตั้งค่า API Key และไฟล์ `.env` (Environment Setup)

1. สมัครสมาชิกและขอ API Key ได้ฟรีจากเว็บไซต์ [AIForThai (https://aiforthai.in.th/)](https://aiforthai.in.th/)
2. สร้างไฟล์ชื่อ `.env` ขึ้นมาที่โฟลเดอร์หลักของโปรเจกต์ (ตำแหน่งเดียวกับ `app.py`) โดยคัดลอกรูปแบบจาก `.env.example`:
   ```bash
   cp .env.example .env
   ```
3. เปิดไฟล์ `.env` แล้วใส่ API Key ที่ได้รับจากระบบ AIForThai:
   ```env
   AIFORTHAI_API_KEY=ใส่_API_KEY_ของคุณที่นี่
   ```

> [!WARNING]
> ### 🚨 ข้อควรระวังด้านความปลอดภัย (Security Notice)
> - **ห้ามอัปโหลดไฟล์ `.env` หรือเปิดเผย `AIFORTHAI_API_KEY` ขึ้นบน GitHub หรือ Public Repository โดยเด็ดขาด**
> - ตรวจสอบให้แน่ใจว่าชื่อไฟล์ `.env` ถูกระบุไว้ในไฟล์ [`.gitignore`](file:///Users/satu063040gmail.com/Projects/review-sentiment-ai/.gitignore) เสมอ เพื่อป้องกันการรั่วไหลของข้อมูลสิทธิ์การเข้าถึง

---

## 🚀 วิธีการรันโปรเจกต์ (Running the Application)

ทดสอบการเชื่อมต่อ API ก่อนเริ่มรันระบบ (ทางเลือก):
```bash
python test_api.py
```

เริ่มต้นรันเว็บแอปพลิเคชัน:
```bash
python app.py
```

เมื่อระบบเริ่มทำงาน ให้เปิดเว็บบราวเซอร์แล้วไปที่:
👉 **[http://127.0.0.1:5000](http://127.0.0.1:5000)** หรือ **[http://localhost:5000](http://localhost:5000)**

---

## 🌐 การเรียกใช้งาน AIForThai S-Sense API

ระบบส่งคำขอแบบ HTTP GET ไปยัง S-Sense Endpoint:
- **Endpoint URL**: `https://api.aiforthai.in.th/ssense`
- **Request Headers**:
  ```http
  Apikey: <AIFORTHAI_API_KEY>
  ```
- **Query Parameters**:
  ```http
  text: <ข้อความรีวิวภาษาไทย>
  ```
- **ตัวอย่างโครงสร้าง JSON ที่ได้รับกลับมา**:
  ```json
  {
    "sentiment": {
      "polarity": "positive",
      "score": "80",
      "polarity-pos": true,
      "polarity-neg": false
    },
    "preprocess": {
      "input": "สินค้าดีมาก ใช้งานง่าย ส่งเร็วมาก",
      "segmented": ["สินค้า", "ดี", "มาก", "ใช้งาน", "ง่าย", "ส่ง", "เร็ว", "มาก"]
    }
  }
  ```

---

## 💬 ตัวอย่างข้อความรีวิวสำหรับการทดสอบ (Example Reviews)

| ประเภทความรู้สึก | ตัวอย่างข้อความรีวิว | ผลลัพธ์ที่คาดหวัง |
| :--- | :--- | :---: |
| **เชิงบวก (Positive)** | `สินค้าคุณภาพดีมากครับ คุ้มค่าคุ้มราคา การจัดส่งรวดเร็ว แพ็คของมาแน่นหนา แนะนำเลยครับ!` | 😊 เชิงบวก (Positive) |
| **เป็นกลาง (Neutral)** | `ได้รับสินค้าตามรายการที่สั่ง สินค้าอยู่ในสภาพปกติ` | 😐 เป็นกลาง (Neutral) |
| **เชิงลบ (Negative)** | `สินค้าไม่ตรงปกเลย คุณภาพแย่มาก ใช้งานไม่ได้ พัสดุเสียหาย ติดต่อร้านค้าก็ไม่ตอบ ผิดหวังมาก` | 😞 เชิงลบ (Negative) |

*(สามารถทดสอบได้ทันทีผ่านปุ่มตัวอย่างข้อความบนหน้าเว็บ)*

---

## 📸 ภาพตัวอย่างหน้าจอระบบ (Screenshots Placeholder)

<!-- 
ใส่รูปภาพประกอบการนำเสนอ Mini Project ได้ที่นี่
เช่น บันทึกภาพหน้าจอลงในโฟลเดอร์ docs/screenshots/ แล้วแทรก path รูปภาพ
-->

### 1. หน้าจอหลัก (Home Interface)
```
+---------------------------------------------------------------+
|  🎓 Mini Project • Natural Language Processing (NLP)           |
|                ระบบทำนายความรู้สึกจากรีวิวสินค้า                |
|  [●] ประมวลผลด้วยโมเดลภาษาไทย AIForThai S-Sense API (NECTEC)  |
|                                                               |
|  [😊 รีวิวเชิงบวก]    [😐 รีวิวเป็นกลาง]    [😞 รีวิวเชิงลบ]   |
|                                                               |
|  [ กล่องข้อความรีวิวสินค้า ................................. ]  |
|                                                               |
|  [                 ⚡ วิเคราะห์ความรู้สึก                   ]  |
+---------------------------------------------------------------+
```

### 2. ตัวอย่างการแสดงผลเชิงบวก (Positive Result)
> *(ใส่รูปภาพ Screenshot: `![Positive Result](docs/screenshots/positive_sample.png)`)*

### 3. ตัวอย่างการแสดงผลเป็นกลาง (Neutral Result)
> *(ใส่รูปภาพ Screenshot: `![Neutral Result](docs/screenshots/neutral_sample.png)`)*

### 4. ตัวอย่างการแสดงผลเชิงลบ (Negative Result)
> *(ใส่รูปภาพ Screenshot: `![Negative Result](docs/screenshots/negative_sample.png)`)*

---

## 👨‍💻 ข้อมูลโครงงานและการนำเสนอ (Academic Presentation Info)

- **ประเภทโครงงาน**: มินิโปรเจกต์ (Mini Project)
- **สาขาวิชา**: วิทยาการคอมพิวเตอร์ / เทคโนโลยีสารสนเทศ / ปัญญาประดิษฐ์ (AI & Data Science)
- **หัวข้อ**: การวิเคราะห์ความรู้สึกจากข้อความภาษาไทยโดยใช้คลาวด์เอไอเซอร์วิส (Thai Sentiment Analysis using Cloud AI Services)
- **แหล่งข้อมูลอ้างอิง API**: [สำนักงานพัฒนาวิทยาศาสตร์และเทคโนโลยีแห่งชาติ (สวทช.) / NECTEC AIForThai](https://aiforthai.in.th/)
