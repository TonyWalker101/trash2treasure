export function getDataById (listData, id) {
  return listData.filter(data => data.id === id)
}