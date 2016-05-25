import Model from 'ember-data/model';
import { hasMany, belongsTo } from 'ember-data/relationships';

export default Model.extend({
	order: belongsTo('order'),
	adults: hasMany('adult'),
	childs: hasMany('child'),
	babies: hasMany('baby'),
});
