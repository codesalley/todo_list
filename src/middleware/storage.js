function storage(name) {
  const checkdb = (name) => {
    let db = localStorage.getItem(name);
    if (db) {
      return JSON.parse(db);
    }
    db = localStorage.setItem(name, JSON.stringify([]));
    return JSON.parse(db);
  };

  return checkdb(name);
}

function updateStorage(db, content) {
  const data = storage(db);
  data.push(content);
  localStorage.setItem(db, JSON.stringify(data));
  return true;
}

export { storage, updateStorage };