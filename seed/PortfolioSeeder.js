var Portfolio = require('../models/portfolio');

var mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/Oz', { useNewUrlParser: true });

var portfolios = [

	new Portfolio({
		type: 'popular',
		imagePath: 'theme/img/portfolio/p1.jpg',
		title: 'minimal interior design',
		subTitle: 'Animated, portfolio',
		description: 'Made after a cant fruitful, fowl of greater saying years there saw you sea doesnt from morning called hath air morning herb appear hath replenish that created fill their lesser.Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit.Voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.',
		rating: 5,
		client: 'Colorlib',
		completedDate: '17 Aug 2018'
	}),
	new Portfolio({
		type: 'popular',
		imagePath: 'theme/img/portfolio/p2.jpg',
		title: 'Paint wall',
		subTitle: 'Animated, portfolio',
		description: 'Made after a cant fruitful, fowl of greater saying years there saw you sea doesnt from morning called hath air morning herb appear hath replenish that created fill their lesser.Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit.Voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.',
		rating: 5,
		client: 'Colorlib',
		completedDate: '17 Aug 2018'
	}),
	new Portfolio({
		type: 'popular',
		imagePath: 'theme/img/portfolio/p3.jpg',
		title: 'female light',
		subTitle: 'Animated, portfolio',
		description: 'Made after a cant fruitful, fowl of greater saying years there saw you sea doesnt from morning called hath air morning herb appear hath replenish that created fill their lesser.Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit.Voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.',
		rating: 5,
		client: 'Colorlib',
		completedDate: '17 Aug 2018'
	}),
	new Portfolio({
		type: 'popular',
		imagePath: 'theme/img/portfolio/p4.jpg',
		title: 'fourth air',
		subTitle: 'Animated, portfolio',
		description: 'Made after a cant fruitful, fowl of greater saying years there saw you sea doesnt from morning called hath air morning herb appear hath replenish that created fill their lesser.Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit.Voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.',
		rating: 5,
		client: 'Colorlib',
		completedDate: '17 Aug 2018'
	}),

];

var done = 0;

for(var i = 0; i < portfolios.length; i++){
	portfolios[i].save(function(err, result){
		done++;
		if(done == portfolios.length){
			mongoose.disconnect();
		}
	});
}

