import Event from "./event.model.js"
import Category from "./category.model.js"
import User from "./user.model.js"

// A.hasOne(B); // B HasOne A - Se lee de derecha a izquierda
// A.belongsTo(B); // A BelongsTo B - Se lee de izquierda a derecha
// A.hasMany(B); // A HasMany B
// A.belongsToMany(B, { through: 'C' }); // A BelongsToMany B through the junction table C

Event.belongsTo(Category, { foreignKey: "categoryId" })
Event.belongsTo(User, { foreignKey: "userId" })

export {
	Event,
	Category,
	User
}