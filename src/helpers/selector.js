export function getDataById (listData, id) {
  return listData.filter(data => data.id === id)
}

export function getUserNameByItemId (userData, itemData, id) {
  if (id === null) {return}

  const itemId = itemData.filter(data => data.id === id);
  
  const user = userData.filter(data => data.id === itemId[0].user_id);

  return user[0].user_name;
}

export function getCommentsByItemId (commentsData, id) {
  if (id === null) {return null}

  const comments = commentsData.filter(all => all.donation_id === id);

  if (!comments[0]) {return null};

  return comments.sort((a, b) => a.created_at - b.created_at)
}

export function getUserNameByCommentId (userData, id) {
  if (id === null) {return}

  const user = userData.filter(data => data.id === id);

  return user[0].user_name;
}