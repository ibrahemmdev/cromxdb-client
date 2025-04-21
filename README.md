# 📦 CromxDB

A simple and lightweight Node.js client for interacting with the CromxDB REST API.

---

## 🚀 Installation

```bash
npm install cromxdb-client
```

---

## 🧠 Usage

```js
const CromxDB = require("cromxdb-client");

const db = new CromxDB("your-database-id");

(async () => {
  // Insert a document
  await db.insertOne("users", { name: "John", age: 30 });

  // Find documents
  const users = await db.find("users", { age: 30 });
  console.log(users);
})();
```

---

## 🔧 API Reference

Each method requires:
- A **collection name**
- And optionally a **query**, **filter**, or **document**

### 🔍 Find

```js
db.find(collection, query)
```
Returns all documents matching the query.

### 🔍 Find One

```js
db.findOne(collection, query)
```
Returns the first matching document.

### 🔍 Find Many

```js
db.findMany(collection, query)
```
Returns multiple documents (same as `find` for now).

### 🔍 Find by ID

```js
db.findById(collection, id)
```

---

### ➕ Insert One

```js
db.insertOne(collection, document)
```

### ➕ Insert Many

```js
db.insertMany(collection, [documents])
```

---

### ✏️ Update One

```js
db.updateOne(collection, filter, update)
```

### ✏️ Update Many

```js
db.updateMany(collection, filter, update)
```

---

### ❌ Delete One

```js
db.deleteOne(collection, filter)
```

### ❌ Delete Many

```js
db.deleteMany(collection, filter)
```

---

### 🧨 Drop Collection

```js
db.dropCollection(collection)
```

---

## 📌 Notes

- All operations are asynchronous and return Promises.
- Make sure to pass a valid CromxDB database ID when initializing.

---

## 🛡 License

MIT

---

## ✨ Author

**Ibrahem Mohamed** — Backend Engineer 
Feel free to contribute or suggest improvements!
