const axios = require("axios"); 

class CromxDB {
  static API_URL = "http://157.90.181.183:21132/";

  constructor(dbId) {
    this.dbId = dbId;
  }

  async _makeRequest(endpoint, method = "get", data = {}) {
    try {
      const config = {
        method,
        url: `${CromxDB.API_URL}${endpoint}`,
        data
      };

      const response = await axios(config);
      return response.data;
    } catch (error) {
      console.error("Database request failed:", error.response?.data || error.message);
      throw error;
    }
  }

  async find(collection, query = {}) {
    this._validateDbAndCollection(collection);
    return this._makeRequest(`api/databases/${this.dbId}/execute/query`, "post", {
      collection,
      command: "find",
      data: query
    });
  }

  async findOne(collection, query = {}) {
    this._validateDbAndCollection(collection);
    return this._makeRequest(`api/databases/${this.dbId}/execute/query`, "post", {
      collection,
      command: "findOne",
      data: query
    });
  }

  async findMany(collection, query = {}) {
    this._validateDbAndCollection(collection);
    return this._makeRequest(`api/databases/${this.dbId}/execute/query`, "post", {
      collection,
      command: "findMany",
      data: query
    });
  }

  async findById(collection, id) {
    this._validateDbAndCollection(collection);
    return this._makeRequest(`api/databases/${this.dbId}/execute/query`, "post", {
      collection,
      command: "findById",
      data: id
    });
  }

  async insertOne(collection, document) {
    this._validateDbAndCollection(collection);
    return this._makeRequest(`api/databases/${this.dbId}/execute/query`, "post", {
      collection,
      command: "insertOne",
      data: document
    });
  }

  async insertMany(collection, documents) {
    this._validateDbAndCollection(collection);
    return this._makeRequest(`api/databases/${this.dbId}/execute/query`, "post", {
      collection,
      command: "insertMany",
      data: documents
    });
  }

  async updateOne(collection, filter, update) {
    this._validateDbAndCollection(collection);
    return this._makeRequest(`api/databases/${this.dbId}/execute/query`, "post", {
      collection,
      command: "updateOne",
      data: { filter, toUpdate: update }
    });
  }

  async updateMany(collection, filter, update) {
    this._validateDbAndCollection(collection);
    return this._makeRequest(`api/databases/${this.dbId}/execute/query`, "post", {
      collection,
      command: "updateMany",
      data: { filter, toUpdate: update }
    });
  }

  async deleteOne(collection, filter) {
    this._validateDbAndCollection(collection);
    return this._makeRequest(`api/databases/${this.dbId}/execute/query`, "post", {
      collection,
      command: "deleteOne",
      data: filter
    });
  }

  async deleteMany(collection, filter) {
    this._validateDbAndCollection(collection);
    return this._makeRequest(`api/databases/${this.dbId}/execute/query`, "post", {
      collection,
      command: "deleteMany",
      data: filter
    });
  }

  async dropCollection(collection) {
    this._validateDbAndCollection(collection);
    return this._makeRequest(`api/databases/${this.dbId}/execute/query`, "post", {
      collection,
      command: "dropCollection",
      data: {}
    });
  }

  _validateDbAndCollection(collection) {
    if (!this.dbId) {
      throw new Error("Database ID is not set. Provide a dbId in constructor.");
    }
    if (!collection) {
      throw new Error("Collection name is required");
    }
  }
}

module.exports = CromxDB;