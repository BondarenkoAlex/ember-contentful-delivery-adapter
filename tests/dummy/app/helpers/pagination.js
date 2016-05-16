import Ember from 'ember';

export function pagination(params, hash) {
	let pages = Math.ceil(hash.total/hash.limit);
	let pagination = [];
	let activeClass,
		skipIn;
	for (let i=0; i<pages; i++){
		skipIn = i*hash.limit;
		activeClass = '';
		if ( skipIn === hash.skip){
			activeClass = 'active';
		}
		pagination.push({
			skip: skipIn,
			limit: hash.limit,
			activeClass: activeClass
		});
	}
	return pagination;
	// let total = hash.total;
	// let skip = hash.skip;
	// let limit = hash.limit;
	// let pages = Math.ceil(total/limit);
	// let html = '';
	// for (let i=0; i<pages; i++){
	// 	let p = i+1;
	// 	let sk = i*limit;
	// 	if ( sk === skip){

	// 		html=html+'<span class="active"><b>'+p+'</b></span>';
	// 	}
	// 	else{
	// 		html=html+'<span>'+p+'</span>';
	// 	}
	// }
 //  	return new Ember.Handlebars.SafeString(html);
}

export default Ember.Helper.helper(pagination);
