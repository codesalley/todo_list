function storage(name) {
  let checkdb = (name) => {
    let db = localStorage.getItem(name);
    if (db) {
      return JSON.parse(db);
    } else {
      db = localStorage.setItem(name, JSON.stringify([]));
      return JSON.parse(db);
    }
  };

  return checkdb(name);
};

function updateStorage(db, content) {
    let data = storage(db);
    data.push(content);
    localStorage.setItem(db, JSON.stringify(data));
    return true;
};

export { storage, updateStorage };