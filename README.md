# the_x_order_stumblepanni
RootCode Tech Triathlon - 2024



## stumblepanni-app

### Prerequisites

- **Node.js** (version 16 or higher)

### Getting Started

#### 1. Clone the "dev" branch of the Repository

```bash
git clon -b dev https://github.com/DushanJalath/The_X_Order_StumblePanni.git
```

#### 2. Move to the visa-officer-dashboard directory

```bash
cd ./stumblepanni-app
```

#### 3. Install the dependencies

```bash
npm install
```

#### 4. Run the development server

```bash
npm expo start
```




## visa-officer-dashboard 

### Prerequisites

- **Node.js** (version 16 or higher)

### Getting Started

#### 1. Clone the "dev" branch of the Repository

```bash
git clon -b dev https://github.com/DushanJalath/The_X_Order_StumblePanni.git
```

#### 2. Move to the visa-officer-dashboard directory

```bash
cd ./visa-officer-dashboard
```

#### 3. Install the dependencies

```bash
npm install
```

#### 4. Run the development server

```bash
npm run dev
```

#### 5. Visit `http://localhost:5173`

## backend

### 1. copy the db connection url in the document and paste it in the MongoDB compass to see the database


## backend

### Prerequisites

Make sure you have the following installed on your machine:

- Python 3.12
- pip (Python package installer)

## Setup Instructions

##### 1. Move to the visa-officer-dashboard directory

```bash
cd ./visa-officer-dashboard
```

#### 2. Create a `.env` file

Create a `.env` file in the root of the backend and include the following environment variables:
(values are available in the document)
MONGODB_URI=
SECRET_KEY=
OPENAI_API_KEY= 
AWS_ACCESS_KEY_ID=
AWS_SECRET_ACCESS_KEY=
AWS_REGION=
S3_BUCKET_NAME=


#### 3. Install dependencies

Navigate to the backend folder in your terminal and run the following command to install the required Python packages:

```bash
pip install -r requirements.txt
```
#### 4. Run the development server

```bash
uvicorn main:app --reload
```

#### 5. Visit `http://127.0.0.1:8000` or visit `http://127.0.0.1:8000/docs` for the api documentation.
