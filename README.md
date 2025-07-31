# 🏗️ Three-Tier Web Application on AWS (CI/CD + Cloud Monitoring)

This project demonstrates a **production-ready, scalable, and secure 3-tier web application** deployed on AWS using:
- **Frontend:** HTML + Bootstrap served via CloudFront + S3
- **Backend:** Node.js + Express API hosted behind ALB
- **Database:** Amazon RDS (MySQL)
- **CI/CD:** GitHub Actions with OIDC IAM Role
- **Monitoring:** Amazon CloudWatch + SNS Alerts

![Architecture Diagram](architecture.png)

---

## 🚀 Features

- ✅ **3-Tier Architecture**: Clean separation of frontend, backend, and data layers
- ✅ **Elastic Load Balancer**: Handles traffic to backend EC2 instances
- ✅ **Auto Scaling Group**: Automatically adjusts EC2 instances based on load
- ✅ **CloudFront + S3 Hosting**: Fast and reliable static frontend delivery
- ✅ **Amazon RDS**: Durable and scalable MySQL database
- ✅ **GitHub Actions**: CI/CD pipeline using OIDC authentication
- ✅ **CloudWatch Alarms**: Monitors CPU usage with email alerts via SNS

---

## 🧱 Tech Stack

| Layer     | Services Used                                |
|-----------|----------------------------------------------|
| Frontend  | S3, CloudFront, Bootstrap HTML UI            |
| Backend   | EC2, ALB, Node.js (Express API), Auto Scaling |
| Database  | Amazon RDS (MySQL)                           |
| DevOps    | GitHub Actions, IAM Role (OIDC), CloudWatch, SNS |

---

## 🛠️ How It Works

1. **Frontend**: Static HTML is deployed to S3 and served via CloudFront.
2. **Backend**: API requests hit API Gateway which routes to ALB → EC2 → Node.js server.
3. **Database**: Backend securely connects to RDS for user/product data.
4. **CI/CD**: On every push to `main`, GitHub Actions deploys backend code to EC2.
5. **Monitoring**: CloudWatch alarms track CPU utilization and notify via SNS.

---

## 📂 Project Structure

```bash
.
├── backend/
│   ├── server.js
│   └── ...
├── frontend/
│   └── index.html
├── .github/workflows/
│   └── deploy.yml
├── architecture.png
└── README.md
📦 GitHub Actions Setup
IAM Role with OIDC trust established

Secrets required only for optional environment overrides

No AWS credentials stored in the repo

📊 CloudWatch + SNS Setup
CPU > 70% for 2 evaluation periods triggers alarm

Alarm notifies via configured SNS Email Subscriptions

📸 Screenshots
Add UI screenshots and logs if needed

🔐 Security Best Practices
IAM Role with least privilege

RDS is private (no public access)

ALB with security groups

CORS properly configured for frontend ↔ API Gateway

📎 Useful Links
CloudFront Distribution

API Gateway Endpoint

ALB DNS
