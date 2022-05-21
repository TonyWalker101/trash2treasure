const findNewItem = (item, data) => {
  const result = data.filter((x) => {
    return x.name === item.name && x.latitude === item.latitude && x.longitude === item.longitude && x.location === item.location && x.condition === item.condition && x.description === item.description && x.image === item.image
  })
  return result;
} 

export default findNewItem