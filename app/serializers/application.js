import JSONSerializer from 'ember-data/serializers/rest';
import Ember from 'ember';

export default JSONSerializer.extend({
	extractRelationships: function (modelClass, resourceHash) {
	    if (!resourceHash.hasOwnProperty('links')) {
	      resourceHash['links'] = {};
	    }

	    modelClass.eachRelationship(function(key, relationshipMeta) {
	      let payloadRelKey = this.keyForRelationship(key);

	      if (!resourceHash.hasOwnProperty(payloadRelKey)) {
	        return;
	      }

	      if (relationshipMeta.kind === 'hasMany' || relationshipMeta.kind === 'belongsTo') {
	        // Matches strings starting with: https://, http://, //, /
	        var payloadRel = resourceHash[payloadRelKey];
	        if (!Ember.isNone(payloadRel) && !Ember.isNone(payloadRel.match) &&
	          typeof(payloadRel.match) === 'function' && payloadRel.match(/^((https?:)?\/\/|\/)\w/)) {
	          resourceHash['links'][key] = resourceHash[payloadRelKey];
	          delete resourceHash[payloadRelKey];
	        }
	      }
	    }, this);

	    return this._super(modelClass, resourceHash);
  	}
});
