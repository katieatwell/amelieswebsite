use amelies

db.dropDatabase()

// Seed Cafe Breakfast Items
db.ccmenus.insert([{
    'title': 'Savory Turnover',
    'cafeOrcatering': 'cafe',
    'category': 'breakfast',
    'price': '',
    'description': '<p>Freshly baked puff pastry with savory fillings</p>'
  },
  {
    'title': 'Create your own Breakfast Sandwich',
    'cafeOrcatering': 'cafe',
    'category': 'breakfast',
    'price': '',
    'description': '<p style="text-align: center;"><em>Egg included with all breakfast sandwiches&nbsp;($0.75 for extras)</em></p><p style="text-align: center;"><strong>(Choose your bread) baguette • croissant</strong></p><p style="text-align: center;"><em>select three of the following:</em></p><p style="text-align: center;">(Protein) bacon&nbsp;•&nbsp;sausage&nbsp;•&nbsp;ham</p><p style="text-align: center;">(Vegetable) spinach&nbsp;•&nbsp;tomato&nbsp;•&nbsp;mixed greens</p><p style="text-align: center;">(Cheese) cheddar&nbsp;•&nbsp;asiago&nbsp;•&nbsp;mozzarella&nbsp;•&nbsp;gruyère*&nbsp;•&nbsp;brie*</p><p style="text-align: center;">manchego* (+0.75*)</p>'
  },
  {
    'title': 'Quiche du Jour',
    'cafeOrcatering': 'cafe',
    'category': 'breakfast',
    'price': '',
    'description': '<p>Changes daily + served by the slice</p>'
  },
  {
    'title': 'Pain Purdue',
    'cafeOrcatering': 'cafe',
    'category': 'breakfast',
    'price': '',
    'description': '<p>savory bread pudding</p><p>flavors vary by location</p></p>'
  },
  {
    'title': 'Classic Croissant',
    'cafeOrcatering': 'cafe',
    'category': 'breakfast',
    'price': '',
    'description': ''
  },
  {
    'title': 'Classic Croissant',
    'cafeOrcatering': 'cafe',
    'category': 'breakfast',
    'price': '',
    'description': ''
  },
  {
    'title': 'Chocolate Croissant',
    'cafeOrcatering': 'cafe',
    'category': 'breakfast',
    'price': '',
    'description': ''
  },
  {
    'title': 'Twice Baked Croissant',
    'cafeOrcatering': 'cafe',
    'category': 'breakfast',
    'price': '',
    'description': '<p>Classic almond + Chocolate</p>'
  },
  {
    'title': 'Pecan Sticky Bun',
    'cafeOrcatering': 'cafe',
    'category': 'breakfast',
    'price': '',
    'description': ''
  },
  {
    'title': 'Iced Cinnamon Pull-Apart Bread',
    'cafeOrcatering': 'cafe',
    'category': 'breakfast',
    'price': '',
    'description': ''
  },
  {
    'title': 'Turnover',
    'cafeOrcatering': 'cafe',
    'category': 'breakfast',
    'price': '',
    'description': '<p>Cinnamon baked apple or seasonal</p>'
  },
  {
    'title': 'Blueberry Cream Cheese Muffin',
    'cafeOrcatering': 'cafe',
    'category': 'breakfast',
    'price': '',
    'description': '<p>Seasonal flavors available at select locations</p>'
  },
  {
    'title': 'Fresh Fruit Danish',
    'cafeOrcatering': 'cafe',
    'category': 'breakfast',
    'price': '',
    'description': ''
  },
  {
    'title': 'Tea Cakes*',
    'cafeOrcatering': 'cafe',
    'category': 'breakfast',
    'price': '',
    'description': '<p>Almond, Lemon + Raspberry</p>'
  },
  {
    'title': 'Coconut Macaroons*',
    'cafeOrcatering': 'cafe',
    'category': 'breakfast',
    'price': '',
    'description': ''
  },
  {
    'title': 'Cinnamon Stick',
    'cafeOrcatering': 'cafe',
    'category': 'breakfast',
    'price': '',
    'description': ''
  },
  {
    'title': 'Palmier',
    'cafeOrcatering': 'cafe',
    'category': 'breakfast',
    'price': '',
    'description': '<p>Classic french baked puff pastry cookie</p>'
  },
  {
    'title': 'Meringue Cookie*',
    'cafeOrcatering': 'cafe',
    'category': 'breakfast',
    'price': '',
    'description': '<p>Baked whipped egg white + sugar cookie</p>'
  }
])

// Seed cafe lunch + dinner items
db.ccmenus.insert([{
    'title': 'Seasonal Bouchee',
    'cafeOrcatering': 'cafe',
    'category': 'lunchdinner',
    'price': '',
    'description': '<p>A puff pastry with seasonally inspired savory fillings</p>'
  },
  {
    'title': 'Sandwich a la Carte',
    'cafeOrcatering': 'cafe',
    'category': 'lunchdinner',
    'price': '',
    'description': '<p style="text-align: center;">jambon et fromage • roast beef &amp; manchego • seeded roast beef •</p><p style="text-align: center;">pâté de campagne • croque monsieur • turkey &amp; bacon • turkey &amp; brie</p><p style="text-align: center;">chicken salad • provence B.L.T.&nbsp;</p>'
  },
  {
    'title': 'Half sandwich and choice of side',
    'cafeOrcatering': 'cafe',
    'category': 'lunchdinner',
    'price': '',
    'description': '<p style="text-align: center;">jambon et fromage • roast beef &amp; manchego • seeded roast beef •</p><p style="text-align: center;">pâté de campagne • croque monsieur • turkey &amp; bacon • turkey &amp; brie</p><p style="text-align: center;">chicken salad • provence B.L.T.&nbsp;</p><p style="text-align: center;"><br></p><p style="text-align: center;">Your choice of soup du jour, house salad or seasonal side</p>'
  },
  {
    'title': 'Whole sandwich and choice of side',
    'cafeOrcatering': 'cafe',
    'category': 'lunchdinner',
    'price': '',
    'description': '<p style="text-align: center;">jambon et fromage • roast beef &amp; manchego • seeded roast beef •</p><p style="text-align: center;">pâté de campagne • croque monsieur • turkey &amp; bacon • turkey &amp; brie</p><p style="text-align: center;">chicken salad • provence B.L.T.&nbsp;</p><p style="text-align: center;"><br></p><p style="text-align: center;">your choice of soup du jour, house salad or seasonal side</p>'
  },
  {
    'title': 'Half Tartine',
    'cafeOrcatering': 'cafe',
    'category': 'lunchdinner',
    'price': '',
    'description': '<p style="text-align: center;">spinach &amp;&nbsp;asiago&nbsp;• wild mushroom&nbsp;duxelles&nbsp;• sausage, apple &amp; cheddar • spinach, asparagus &amp; leek&nbsp;• ham &amp; gruyére •&nbsp;tomato pesto</p>'
  },
  {
    'title': 'Full Tartine',
    'cafeOrcatering': 'cafe',
    'category': 'lunchdinner',
    'price': '',
    'description': '<p style="text-align: center;">spinach &amp;&nbsp;asiago&nbsp;• wild mushroom&nbsp;duxelles&nbsp;• sausage, apple &amp; cheddar • spinach, asparagus &amp; leek&nbsp;• ham &amp; gruyére •&nbsp;tomato pesto</p>'
  },
  {
    'title': 'Soups',
    'cafeOrcatering': 'cafe',
    'category': 'lunchdinner',
    'price': '',
    'description': '<p><strong>Cup $3.99 - Bowl $5.59 - Quart (to-go only) $10.59</strong></p><p><br></p><p>Amélie’s offers several in-house made soups daily.&nbsp;<span class="ql-cursor">﻿</span></p><p>(served with a slice of our French baguette)</p><p>Ask about our selections today!&nbsp;</p><p>vegetarian and vegan options available</p>'
  },
  {
    'title': 'Entree Salad',
    'cafeOrcatering': 'cafe',
    'category': 'lunchdinner',
    'price': '',
    'description': '<p>Mixed greens and seasonal selections with in-house made dressings</p>'
  },
  {
    'title': 'Quarter, Half or Whole Baguette',
    'cafeOrcatering': 'cafe',
    'category': 'lunchdinner',
    'price': '',
    'description': '<p>All baguettes are served with your choice of jam and butter and please specify if you would like your baguette sliced and/or toasted!</p>'
  },
  {
    'title': '1 oz. or 8 oz. Spreadable Cheese',
    'cafeOrcatering': 'cafe',
    'category': 'lunchdinner',
    'price': '',
    'description': '<p style="text-align: center;">In-house made daily</p>'
  },
  {
    'title': 'Court of soup du jour',
    'cafeOrcatering': 'cafe',
    'category': 'lunchdinner',
    'price': '',
    'description': 'Your choice of soup du jour (to go only) packaged with a quarter baguette.</p>'
  },
])

db.ccmenus.insert([{
    'title': 'Cafe Allonge',
    'cafeOrcatering': 'cafe',
    'category': 'coffeetea',
    'price': '',
    'description': '<p>This is a description</p>'
  },
  {
    'title': 'Brioche a tete',
    'cafeOrcatering': 'cafe',
    'category': 'dessertspastry',
    'price': '$3.00',
    'description': '<p>This is a description</p>'
  }
])

// Seed Catering Items
db.ccmenus.insert([{
    'title': 'Amelies Coffee Service',
    'cafeOrcatering': 'catering',
    'category': 'beverages',
    'price': '$16.00',
    'description': '<p>This is a description</p>'
  },
  {
    'title': 'Avignon Breakfast',
    'cafeOrcatering': 'catering',
    'category': 'breakfastbrunch',
    'price': '$9.00',
    'description': '<p>This is a description</p>'
  },
  {
    'title': '15 Piece Petite Dessert Mix',
    'cafeOrcatering': 'catering',
    'category': 'desserts',
    'price': '$25.00',
    'description': '<p>This is a description</p>'
  },
  {
    'title': 'French Macaron Box (2)',
    'cafeOrcatering': 'catering',
    'category': 'favorsgiftbaskets',
    'price': '$5.00',
    'description': '<p>This is a description</p>'
  },
  {
    'title': 'Bordeaux Brunch',
    'cafeOrcatering': 'catering',
    'category': 'inhouseeventpackages',
    'price': '$13.00',
    'description': '<p>This is a description</p>'
  },
  {
    'title': 'Brittany Lunch',
    'cafeOrcatering': 'catering',
    'category': 'lunch',
    'price': '$10.00',
    'description': '<p>This is a description</p>'
  },
  {
    'title': 'Crudites',
    'cafeOrcatering': 'catering',
    'category': 'platters',
    'price': '$35.00',
    'description': '<p>This is a description</p>'
  }
])

// Seed custom cake items
db.cakedatas.insert([{
    'menuCategory': 'CustomCakes',
    'descriptor': 'cakeflavor',
    'detail': 'Chocolate Chiffon'
  },
  {
    'menuCategory': 'CustomCakes',
    'descriptor': 'cakeflavor',
    'detail': 'Vanilla Chiffon'
  },
  {
    'menuCategory': 'CustomCakes',
    'descriptor': 'buttercream',
    'detail': 'Chocolate'
  },
  {
    'menuCategory': 'CustomCakes',
    'descriptor': 'buttercream',
    'detail': 'Lemon'
  },
  {
    'menuCategory': 'CustomCakes',
    'descriptor': 'buttercream',
    'detail': 'Orange'
  },
  {
    'menuCategory': 'CustomCakes',
    'descriptor': 'filling',
    'detail': 'Chocolate Mousse'
  },
  {
    'menuCategory': 'CustomCakes',
    'descriptor': 'buttercream',
    'detail': 'Rasberry Mousse'
  },
  {
    'menuCategory': 'CustomCakes',
    'descriptor': 'maskingdecoration',
    'detail': 'Feuilletine'
  },
  {
    'menuCategory': 'CustomCakes',
    'descriptor': 'maskingdecoration',
    'detail': 'Toasted Candied Almonds'
  }
])

// Seed Composed Cake Items
db.cakedatas.insert([{
    'menuCategory': 'ComposedCakes',
    'descriptor': 'Chocolate Rasberry',
    'detail': 'Chocolate Chiffon'
  },
  {
    'menuCategory': 'ComposedCakes',
    'descriptor': 'Chocolate Rasberry',
    'detail': 'Chambord Simple Syrup'
  },
  {
    'menuCategory': 'ComposedCakes',
    'descriptor': 'Fraise',
    'detail': 'Vanilla Chiffon'
  },
  {
    'menuCategory': 'ComposedCakes',
    'descriptor': 'Fraise',
    'detail': 'Gran Marnier Simple Syrup'
  }
])

// Seed Cake Prices
db.cakedatas.insert([{
    'menuCategory': 'CakePrices',
    'descriptor': 'price',
    'detail': '6" round $30.95 serves 6-8'
  },
  {
    'menuCategory': 'CakePrices',
    'descriptor': 'price',
    'detail': '6" round with ganache $32.89 serves 6-8'
  },
  {
    'menuCategory': 'CakePrices',
    'descriptor': 'price',
    'detail': '8" round $38.95 serves 8-12'
  },
  {
    'menuCategory': 'CakePrices',
    'descriptor': 'price',
    'detail': '8" round with ganache $44.89 serves 8-12'
  },
  {
    'menuCategory': 'CakePrices',
    'descriptor': 'price',
    'detail': '10" round  $65.95 serves 12-18'
  },
  {
    'menuCategory': 'CakePrices',
    'descriptor': 'price',
    'detail': '10" round with ganache $75.89 serves 12-18'
  },
  {
    'menuCategory': 'CakePrices',
    'descriptor': 'price',
    'detail': '1/4 sheet $75.95 serves 16-22'
  },
  {
    'menuCategory': 'CakePrices',
    'descriptor': 'price',
    'detail': '1/4 sheet with ganache $85.89 serves 16-22'
  },
  {
    'menuCategory': 'CakePrices',
    'descriptor': 'price',
    'detail': '1/2 sheet $125.95 serves 30-40'
  },
  {
    'menuCategory': 'CakePrices',
    'descriptor': 'price',
    'detail': '1/2 sheet with ganache $135.89 serves 30-40'
  }
])
