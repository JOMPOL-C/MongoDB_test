# 👤 Users API

Simple RESTful API for managing users with file upload and cloud storage integration.  
Built with **Express.js** and **MongoDB (Mongoose)**.

---

## 📦 Tech Stack

<p align="left">
<img src="https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white" /> <img src="https://img.shields.io/badge/Express.js-000000?style=for-the-badge&logo=express&logoColor=white" />
<img src="https://img.shields.io/badge/MongoDB-47A248?style=for-the-badge&logo=mongodb&logoColor=white" />
<img src="https://img.shields.io/badge/Mongoose-880000?style=for-the-badge&logo=mongoose&logoColor=white" />
<img src="https://img.shields.io/badge/Multer-FFCA28?style=for-the-badge&logo=multer&logoColor=black" />
<img src="https://img.shields.io/badge/Cloudinary-3448C5?style=for-the-badge&logo=cloudinary&logoColor=white" />
<img src="https://img.shields.io/badge/Dotenv-ECD53F?style=for-the-badge&logo=dotenv&logoColor=black" />
<img src="https://img.shields.io/badge/Nodemon-76D04B?style=for-the-badge&logo=nodemon&logoColor=white" />
</p>

---

## ความสามารถของระบบ
- สมัครผู้ใช้ใหม่ด้วย `username` และ `email`  
- อัปโหลดรูปโปรไฟล์ (**JPEG/PNG ≤ 10MB**) ผ่าน **Multer**  
- จัดเก็บไฟล์บน **Cloudinary** และบันทึก URL + Cloudinary ID  
- เก็บข้อมูลผู้ใช้ลงใน **MongoDB** ด้วย **Mongoose**

---

## 🚀 Getting Started

### 1. Clone the repository
```bash
git clone <repo-url>
cd users-api
