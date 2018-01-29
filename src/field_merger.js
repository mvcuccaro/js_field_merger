class fieldMerger { 
	constructor(){
		this.prefix 			= '###';
		this.suffix 			= '###';
		this.input 				= '';
		this.original_input 	= '';
		this.merge_fields 		= [];
		this.output 			= '';
	}

	/**
	 * add a new merge key value pair
	 * @param {string} arg_field_name name of the field to merge
	 * @param {string} arg_value      value to merge field with
	 */
	setField(arg_field_name, arg_value){
		this.merge_fields.push({field_name: arg_field_name, value: arg_value});
	}

	/**
	 * set the input string to be processed
	 * @param {string} arg_input the input string to be processed
	 */
	setInput(arg_input){
		this.input 				= arg_input;
	}

	/**
	 * merge the field names to the assigned values
	 * @return {string} return the merged string
	 */
	merge(){
		this.output = this.input;
		this.merge_fields.forEach(mf => {
			var field_name = this.prefix + mf.field_name + this.suffix;
			console.log(field_name);
			console.log(mf.value);
			this.output = this.output.replace(field_name, mf.value);
		});

		return this.output;
	}
}

//Example
// var merger = new fieldMerger();
// var merger2 = new fieldMerger();

// var test_input = 'Now is the time for ###field_1### good men to come to the ###field_2### of their country';

// merger.setInput(test_input);
// merger.setField('field_1', 'ALL');
// merger.setField('field_2', 'AID');
