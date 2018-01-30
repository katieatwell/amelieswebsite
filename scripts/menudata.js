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

// Seed Cafe Lunch + Dinner Items
db.ccmenus.insert([{
    'title': 'Seasonal Bouchée',
    'cafeOrcatering': 'cafe',
    'category': 'lunchdinner',
    'price': '',
    'description': '<p>A puff pastry with seasonally inspired savory fillings</p>'
  },
  {
    'title': 'Sandwich à la Carte',
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
    'title': 'Entrée Salad',
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
    'title': 'Quart of soup du jour',
    'cafeOrcatering': 'cafe',
    'category': 'lunchdinner',
    'price': '',
    'description': 'Your choice of soup du jour (to go only) packaged with a quarter baguette.</p>'
  }
])

// Seed Cafe Coffee and Tea items
db.ccmenus.insert([{
    'title': 'Café Allongée',
    'cafeOrcatering': 'cafe',
    'category': 'coffeetea',
    'price': '',
    'description': '<p>Rich espresso + water</p>'
  },
  {
    'title': 'Café au Lait',
    'cafeOrcatering': 'cafe',
    'category': 'coffeetea',
    'price': '',
    'description': '<p>Half fresh brewed coffee + half steamed milk</p>'
  },
  {
    'title': 'Café Capuchon',
    'cafeOrcatering': 'cafe',
    'category': 'coffeetea',
    'price': '',
    'description': '<p>European style cappuccino (8oz)</p>'
  },
  {
    'title': 'Café Crème',
    'cafeOrcatering': 'cafe',
    'category': 'coffeetea',
    'price': '',
    'description': '<p>Espresso + steamed milk (12oz)</p>'
  },
  {
    'title': 'Café Filtre',
    'cafeOrcatering': 'cafe',
    'category': 'coffeetea',
    'price': '',
    'description': '<p>Locally roasted brewed coffee</p><p>12oz/16oz</p>'
  },
  {
    'title': 'Café Fouetté',
    'cafeOrcatering': 'cafe',
    'category': 'coffeetea',
    'price': '',
    'description': '<p>Four espresso shots, vanilla bean, shaked with ice and topped with cream</p>'
  },
  {
    'title': 'Café Marcotter',
    'cafeOrcatering': 'cafe',
    'category': 'coffeetea',
    'price': '',
    'description': '<p>An amélie’s signature. vanilla bean simple syrup, steamed milk, espresso, caramel sauce & sea salt (12oz)</p>'
  },
  {
    'title': 'Café Mocha',
    'cafeOrcatering': 'cafe',
    'category': 'coffeetea',
    'price': '',
    'description': '<p>Dark chocolate sauce, espresso + steamed milk (12oz)</p>'
  },
  {
    'title': 'Café Noisette',
    'cafeOrcatering': 'cafe',
    'category': 'coffeetea',
    'price': '',
    'description': '<p>espresso + steamed milk (4oz)</p>'
  },
  {
    'title': 'Chocolat Chaud',
    'cafeOrcatering': 'cafe',
    'category': 'coffeetea',
    'price': '',
    'description': '<p>Dark chocolate sauce and milk (12oz)</p>'
  },
  {
    'title': 'French Press',
    'cafeOrcatering': 'cafe',
    'category': 'coffeetea',
    'price': '',
    'description': '<p>freshly pressed coffee served in a personal carafe.</p><p>complimentary cream and sugar served alongside.</p><p><br></p><p>17oz/32oz</p>'
  },
  {
    'title': 'Petit Café Crème',
    'cafeOrcatering': 'cafe',
    'category': 'coffeetea',
    'price': '',
    'description': '<p>Espresso + steamed milk (8oz)</p>'
  },
  {
    'title': 'Petit Noir',
    'cafeOrcatering': 'cafe',
    'category': 'coffeetea',
    'price': '',
    'description': '<p>Double ristretto espresso (1.5oz)</p>'
  },
  {
    'title': 'Salted Caramel Brownie Café Mocha',
    'cafeOrcatering': 'cafe',
    'category': 'coffeetea',
    'price': '',
    'description': '<p>Dark chocolate, caramel, vanilla bean, espresso milk, whipped cream, caramel sauce and sea salt (12oz)</p>'
  },
  {
    'title': 'Thé Chai Crème',
    'cafeOrcatering': 'cafe',
    'category': 'coffeetea',
    'price': '',
    'description': '<p>Chai, milk and traditional masala spice blend (12oz)</p>'
  },
  {
    'title': 'Pot de Thé',
    'cafeOrcatering': 'cafe',
    'category': 'coffeetea',
    'price': '',
    'description': '<p>loose leaf tea in personal carafe</p><p><br></p><p>complimentary cream and sugar served alongside</p>'
  },
  {
    'title': 'Thé au Lait',
    'cafeOrcatering': 'cafe',
    'category': 'coffeetea',
    'price': '',
    'description': '<p>Loose leaf tea sachet, hot water and steamed milk (12oz)</p>'
  },
  {
    'title': 'Thé Chai Crème',
    'cafeOrcatering': 'cafe',
    'category': 'coffeetea',
    'price': '',
    'description': '<p>Chai, milk and traditional masala spice blend (12oz)</p>'
  },
  {
    'title': 'Thé Chaud',
    'cafeOrcatering': 'cafe',
    'category': 'coffeetea',
    'price': '',
    'description': '<p>Loose leaf tea sachet and hot water (12oz)</p>'
  },
  {
    'title': 'Thé Glacé',
    'cafeOrcatering': 'cafe',
    'category': 'coffeetea',
    'price': '',
    'description': '<p>Our classic black tea over ice (16oz)</p>'
  },
  {
    'title': 'Thé Glacé Uniques',
    'cafeOrcatering': 'cafe',
    'category': 'coffeetea',
    'price': '',
    'description': '<p>Create your own iced tea with any of our loose leaf teas (16oz)</p>'
  },
  {
    'title': 'Café Glacé',
    'cafeOrcatering': 'cafe',
    'category': 'coffeetea',
    'price': '',
    'description': '<p>Our signature magnolia coffee co. cold brew (16oz)</p>'
  },
  {
    'title': 'Créme Brûlée French Soda',
    'cafeOrcatering': 'cafe',
    'category': 'coffeetea',
    'price': '',
    'description': '<p>Vanilla bean, sparkling water, ice, caramel sauce and a kiss of cream. (16oz)</p>'
  },
  {
    'title': 'Lavender + honey soda',
    'cafeOrcatering': 'cafe',
    'category': 'coffeetea',
    'price': '',
    'description': '<p>Lavender syrup, sparkling water, ice + honey.</p>'
  },
  {
    'title': 'Limonade à la Lavande',
    'cafeOrcatering': 'cafe',
    'category': 'coffeetea',
    'price': '',
    'description': '<p>Fresh squeezed lemon juice, lavender bud syrup, ice and sparkling water (16oz)</p>'
  },
  {
    'title': 'Limonade Classique',
    'cafeOrcatering': 'cafe',
    'category': 'coffeetea',
    'price': '',
    'description': '<p>Fresh squeezed lemon juice, classique simple syrup, ice and sparkling water (16oz)</p>'
  },
  {
    'title': 'Thé Glacé',
    'cafeOrcatering': 'cafe',
    'category': 'coffeetea',
    'price': '',
    'description': '<p>Our classic black tea over ice (16oz)</p>'
  },
  {
    'title': 'Thé Glacé',
    'cafeOrcatering': 'cafe',
    'category': 'coffeetea',
    'price': '',
    'description': '<p>Our classic black tea over ice (16oz)</p>'
  },
  {
    'title': 'thé Glacé Uniques',
    'cafeOrcatering': 'cafe',
    'category': 'coffeetea',
    'price': '',
    'description': '<p>Create your own custom iced tea with any of our loose leaf teas (16oz)</p>'
  }
])

//Seed Cafe Dessert and Pastries
db.ccmenus.insert([{
    'title': 'Brioche à Tête',
    'cafeOrcatering': 'cafe',
    'category': 'dessertspastry',
    'price': '',
    'description': '<p>Freshly baked individual size brioche loaves, with sweet seasonally inspired fillings</p>'
  },
  {
    'title': 'Seasonal Bouchée',
    'cafeOrcatering': 'cafe',
    'category': 'dessertspastry',
    'price': '',
    'description': '<p>Freshly baked puff pastry with seasonally inspired savory fillings</p>'
  },
  {
    'title': 'Tea cake*',
    'cafeOrcatering': 'cafe',
    'category': 'dessertspastry',
    'price': '',
    'description': '<p>Raspberry, Lemon, Almond</p>'
  },
  {
    'title': 'Coconut Macaroon',
    'cafeOrcatering': 'cafe',
    'category': 'dessertspastry',
    'price': '',
    'description': ''
  },
  {
    'title': 'Palmier',
    'cafeOrcatering': 'cafe',
    'category': 'dessertspastry',
    'price': '',
    'description': ''
  },
  {
    'title': 'Muffin',
    'cafeOrcatering': 'cafe',
    'category': 'dessertspastry',
    'price': '',
    'description': '<p>Blueberry cream cheese & seasonal flavors</p>'
  },
  {
    'title': 'Cinnamon Sticks',
    'cafeOrcatering': 'cafe',
    'category': 'dessertspastry',
    'price': '',
    'description': ''
  },
  {
    'title': 'Pecan Sticky Bun',
    'cafeOrcatering': 'cafe',
    'category': 'dessertspastry',
    'price': '',
    'description': ''
  },
  {
    'title': 'Turnover',
    'cafeOrcatering': 'cafe',
    'category': 'dessertspastry',
    'price': '',
    'description': '<p>Apple cinnamon or Seasonal</p>'
  },
  {
    'title': 'Meringue Cookie',
    'cafeOrcatering': 'cafe',
    'category': 'dessertspastry',
    'price': '',
    'description': '<p>Plain, Lemon & Chai spice</p>'
  },
  {
    'title': 'Plain Croissant',
    'cafeOrcatering': 'cafe',
    'category': 'dessertspastry',
    'price': '',
    'description': ''
  },
  {
    'title': 'Flavored Croissant',
    'cafeOrcatering': 'cafe',
    'category': 'dessertspastry',
    'price': '',
    'description': '<p>Chocolate, Strawberry cream cheese, Plain cream cheese</p>'
  },
  {
    'title': 'Twice Baked Croissant',
    'cafeOrcatering': 'cafe',
    'category': 'dessertspastry',
    'price': '',
    'description': '<p>Chocolate and Classic almond</p>'
  },
  {
    'title': 'Napoleon',
    'cafeOrcatering': 'cafe',
    'category': 'dessertspastry',
    'price': '',
    'description': '<p>Plain and seasonal options may vary</p>'
  },
  {
    'title': 'Salted Caramel Brownie',
    'cafeOrcatering': 'cafe',
    'category': 'dessertspastry',
    'price': '',
    'description': '<p>Also available in gluten free*</p>'
  },
  {
    'title': 'Layered Torte',
    'cafeOrcatering': 'cafe',
    'category': 'dessertspastry',
    'price': '',
    'description': '<p>Chocolate, Blackberry lemon, Caramel apple and Seasonal flavors</p>'
  },
  {
    'title': 'Crème Brûlée',
    'cafeOrcatering': 'cafe',
    'category': 'dessertspastry',
    'price': '',
    'description': '<p>Vanilla, Chocolate caramel, Cappuccino and Seasonal</p>'
  },
  {
    'title': 'Large Chocolate Mousse Cup',
    'cafeOrcatering': 'cafe',
    'category': 'dessertspastry',
    'price': '',
    'description': '<p>Chocolate cup filled with chocolate mousse, topped with dark chocolate ganache dipped strawberry</p>'
  },
  {
    'title': 'Mini Mousse Cup*',
    'cafeOrcatering': 'cafe',
    'category': 'dessertspastry',
    'price': '',
    'description': '<p>Milk chocolate passion fruit, White chocolate, Cream cheese mousse, Dark chocolate raspberry, Pistachio, Banana mousse, Vanilla chiboust & Seasonal flavors</p>'
  },
  {
    'title': 'Petit Gâteau',
    'cafeOrcatering': 'cafe',
    'category': 'dessertspastry',
    'price': '',
    'description': '<p>Vanilla, Strawberry, Chocolate & Seasonal flavors</p>'
  },
  {
    'title': 'Slice of Cake',
    'cafeOrcatering': 'cafe',
    'category': 'dessertspastry',
    'price': '',
    'description': '<p>Flavors Vary</p>'
  },
  {
    'title': 'Bread Pudding',
    'cafeOrcatering': 'cafe',
    'category': 'dessertspastry',
    'price': '',
    'description': '<p>Flavors Vary</p>'
  },
  {
    'title': 'Eclair',
    'cafeOrcatering': 'cafe',
    'category': 'dessertspastry',
    'price': '',
    'description': '<p>Vanilla or Chocolate</p>'
  },
  {
    'title': 'Cream Puff',
    'cafeOrcatering': 'cafe',
    'category': 'dessertspastry',
    'price': '',
    'description': '<p>Vanilla</p>'
  },
  {
    'title': 'French Macaroon',
    'cafeOrcatering': 'cafe',
    'category': 'dessertspastry',
    'price': '',
    'description': '<p>Lemon, Orange, Raspberry, Mixed berry, Salted caramel, Cinnamon ganache, Pistachio, Honey buttercream & Seasonal flavors</p>'
  },
  {
    'title': 'Petit-Four',
    'cafeOrcatering': 'cafe',
    'category': 'dessertspastry',
    'price': '',
    'description': '<p>Chocolate peanut butter, Dark chocolate raspberry, Pistachio, Strawberry & seasonal flavors</p>'
  },
  {
    'title': 'Mini Tart',
    'cafeOrcatering': 'cafe',
    'category': 'dessertspastry',
    'price': '',
    'description': '<p>Pecan, Fresh fruit, Lemon raspberry, Key lime, Mirror, Mixed berry, Seasonal</p>'
  },
  {
    'title': 'Fresh Fruit Tart',
    'cafeOrcatering': 'cafe',
    'category': 'dessertspastry',
    'price': '',
    'description': ''
  },
  {
    'title': 'Tart',
    'cafeOrcatering': 'cafe',
    'category': 'dessertspastry',
    'price': '',
    'description': '<p>Apple, pear, apricot, peach, chocolate hazelnut, pecan, key lime, lemon raspberry, salted caramel, mixed berry, chocolate raspberry & seasonal</p>'
  }
])

// Seed Catering Beverages Items
db.ccmenus.insert([{
    'title': 'Amélie\'s Coffee Service',
    'cafeOrcatering': 'catering',
    'category': 'beverages',
    'price': '$16.00',
    'description': '<p>Regular and decaffeinated (roasted by Magnolia Coffee Co.)</p><p>Insulated box containing 96 ounces of coffee, cream, sweeteners &amp; cups included</p>'
  },
  {
    'title': 'Amélie\'s Hot Tea Service',
    'cafeOrcatering': 'catering',
    'category': 'beverages',
    'price': '$18.00',
    'description': '<p>your choice of signature single flavored tin with 20 tea sachets</p><p>paris</p><p>classic earl grey</p><p>peppermint</p><p>cream, sweeteners, stirrers &amp; cups included</p>'
  },
  {
    'title': 'Belvoir Fruit Farms',
    'cafeOrcatering': 'catering',
    'category': 'beverages',
    'price': '$3.29',
    'description': '<p>Elderflower Pressé</p><p>Lime &amp; Lemongrass</p><p>Pomegranate Raspberry</p><p>Ginger beer</p>'
  },
  {
    'title': 'Bottled Water/Canned Soda',
    'cafeOrcatering': 'catering',
    'category': 'beverages',
    'price': '$1.50',
    'description': '<p>Dasani</p><p>Coca-Cola</p><p>Diet Coca-Cola</p><p>Sprite</p>'
  },
  {
    'title': 'Iced Tea',
    'cafeOrcatering': 'catering',
    'category': 'beverages',
    'price': '$10.00',
    'description': '<p>Sweet &amp Unsweet</p>'
  },
  {
    'title': 'Lemonade',
    'cafeOrcatering': 'catering',
    'category': 'beverages',
    'price': '$12.00',
    'description': '<p>Classic &amp Lavender</p>'
  },
  {
    'title': 'Orange Juice',
    'cafeOrcatering': 'catering',
    'category': 'beverages',
    'price': '$15.00',
    'description': '<p>One Gallon</p>'
  },
  {
    'title': 'Sparkling Water',
    'cafeOrcatering': 'catering',
    'category': 'beverages',
    'price': '$2.00',
    'description': '<p>Perrier, 16 ounce bottles</p>'
  }
])

// Seed Catering Breakfast and Brunch Items
db.ccmenus.insert([{
    'title': 'Avignon Breakfast',
    'cafeOrcatering': 'catering',
    'category': 'breakfastbrunch',
    'price': '$9.00',
    'description': '<p>Granola fruit parfait, assorted breakfast pastries (turnovers, croissants, cream cheese pockets, pecan &amp; seasonal danishes), coffee (regular or decaf) 1 gallon per 10 guests included</p><p><br></p><p><em>A Catered Breakfast &amp; Brunch Package,&nbsp;minimum 15 per order</em></p><p><em>Selections are subject to change based on availability</em></p><p><em>Chef\'s selection and seasonal items are at the discretion of the bakery*</em></p>'
  },
  {
    'title': 'Lorraine Breakfast',
    'cafeOrcatering': 'catering',
    'category': 'breakfastbrunch',
    'price': '$9.00',
    'description': '<p>Your choice of signature quiche:</p><p>Classic lorraine, sausage &amp; cheddar or&nbsp;portobello, spinach &amp; thyme</p><p>Side of seasonal fruit and coffee (regular or decaf) 1 gallon per 10 guest included</p><p><br></p><p><em>A Catered Breakfast &amp; Brunch Package,&nbsp;minimum 15 per order</em></p><p><em>selections are subject to change based on availability</em></p><p><em>chef\'s selection and seasonal items are at the discretion of the bakery*</em></p>'
  },
  {
    'title': 'Provence Breakfast',
    'cafeOrcatering': 'catering',
    'category': 'breakfastbrunch',
    'price': '$9.00',
    'description': '<p>Choose from our breakfast sandwich flavors or assortment of the following:</p><p>bacon, cheddar &amp; egg</p><p>spinach, asiago &amp; egg</p><p>sausage, mozzarella &amp; egg</p><p>side of seasonal fruit and coffee (regular or decaf) 1 gallon per 10 guest included</p><p><br></p><p><em>A Catered Breakfast &amp; Brunch Package,&nbsp;minimum 15 per order</em></p><p><em>selections are subject to change based on availability</em></p><p><em>chef\'s selection and seasonal items are at the discretion of the bakery*</em></p>'
  },
  {
    'title': 'Breakfast Sandwich',
    'cafeOrcatering': 'catering',
    'category': 'breakfastbrunch',
    'price': '$6.00',
    'description': '<p>Choose from our breakfast sandwich flavors or assortment of the following:</p><p>bacon, cheddar &amp; egg</p><p>spinach, asiago &amp; egg</p><p>sausage, mozzarella &amp; egg</p><p>side of seasonal fruit and coffee (regular or decaf) 1 gallon per 10 guest included</p><p><br></p><p><em>A Catered Breakfast &amp; Brunch Package,&nbsp;minimum 15 per order</em></p><p><em>selections are subject to change based on availability</em></p><p><em>chef\'s selection and seasonal items are at the discretion of the bakery*</em></p>'
  },
  {
    'title': 'Fresh Fruit Tray',
    'cafeOrcatering': 'catering',
    'category': 'breakfastbrunch',
    'price': '$50.00',
    'description': '<p>Serves 15-20</p><p>Pineapple, grapes &amp; berries with honey lime dipping sauce</p><p><br></p><p><em>Catered Breakfast &amp; Brunch Addition,&nbsp;all items served on platters*</em></p>'
  },
  {
    'title': 'Tea Time',
    'cafeOrcatering': 'catering',
    'category': 'breakfastbrunch',
    'price': '$36.00',
    'description': '<p>24 pieces</p><p>Tea cakes, coconut macaroons &amp; palmiers</p><p><br></p><p><em>Catered Breakfast &amp; Brunch Addition,&nbsp;all items served on platters*</em></p>'
  },
  {
    'title': 'Mini Tarts',
    'cafeOrcatering': 'catering',
    'category': 'breakfastbrunch',
    'price': '$36.00',
    'description': '<p>18 pieces</p><p>Pecan, fresh fruit, key lime, mixed berry &amp; lemon raspberry&nbsp;</p><p><br></p><p><em>Catered Breakfast &amp; Brunch Addition,&nbsp;all items served on platters*</em></p>'
  },
  {
    'title': 'Quiche',
    'cafeOrcatering': 'catering',
    'category': 'breakfastbrunch',
    'price': '$32.00',
    'description': '<p>12" 8-10 slices</p><p>Classic lorraine (caramelized onion, bacon and gruyére)</p><p>Sausage &amp; cheddar</p><p>Portobello, spinach &amp; time</p><p><br></p><p><em>Catered Breakfast &amp; Brunch Addition,&nbsp;all items served on platters*</em></p>'
  },
  {
    'title': 'Danishes',
    'cafeOrcatering': 'catering',
    'category': 'breakfastbrunch',
    'price': '$50.00',
    'description': '<p>24 pieces</p><p>Pecan &amp; seasonal danishes, cream cheese puffs &amp; croissants</p><p><br></p><p><em>Catered Breakfast &amp; Brunch Addition,&nbsp;all items served on platters*</em></p>'
  },
  {
    'title': 'Croissants',
    'cafeOrcatering': 'catering',
    'category': 'breakfastbrunch',
    'price': '$40.00',
    'description': '<p>12 pieces</p><p>Plain, chocolate, strawberry cream cheese, classic &amp; chocolate twice baked croissants</p><p><br></p><p><em>Catered Breakfast &amp; Brunch Addition,&nbsp;all items served on platters*</em></p>'
  }
])

// Seed Catering Desserts Items
db.ccmenus.insert([{
    'title': '15 Piece Petite Dessert Mix',
    'cafeOrcatering': 'catering',
    'category': 'desserts',
    'price': '$25.00',
    'description': '<p>Petite Dessert Mix includes mini mousse cups, salted caramel brownie halves, petit fours, mini cream puffs & french macarons (no substitutions)</p>'
  },
  {
    'title': '25 Piece Petite Dessert Mix',
    'cafeOrcatering': 'catering',
    'category': 'desserts',
    'price': '$40.00',
    'description': '<p>Petite Dessert Mix includes mini mousse cups, salted caramel brownie halves, petit fours, mini cream puffs & french macarons (no substitutions)</p>'
  },
  {
    'title': '36 Pieces Petite Dessert Mix',
    'cafeOrcatering': 'catering',
    'category': 'desserts',
    'price': '$52.00',
    'description': '<p>Petite Dessert Mix includes mini mousse cups, salted caramel brownie halves, petit fours, mini cream puffs & french macarons (no substitutions)</p>'
  },
  {
    'title': '50 Piece Petite Dessert Mix',
    'cafeOrcatering': 'catering',
    'category': 'desserts',
    'price': '$75.00',
    'description': '<p>Petite Dessert Mix includes mini mousse cups, salted caramel brownie halves, petit fours, mini cream puffs & french macarons (no substitutions)</p>'
  },
  {
    'title': '65 Piece Petite Dessert Mix',
    'cafeOrcatering': 'catering',
    'category': 'desserts',
    'price': '$100.00',
    'description': '<p>Petite Dessert Mix includes mini mousse cups, salted caramel brownie halves, petit fours, mini cream puffs & french macarons (no substitutions)</p>'
  },
  {
    'title': '75 Piece Petite Dessert Mix',
    'cafeOrcatering': 'catering',
    'category': 'desserts',
    'price': '$115.00',
    'description': '<p>Petite Dessert Mix includes mini mousse cups, salted caramel brownie halves, petit fours, mini cream puffs & french macarons (no substitutions)</p>'
  },
  {
    'title': 'French Macarons',
    'cafeOrcatering': 'catering',
    'category': 'desserts',
    'price': '$2.29',
    'description': '<p>Flavors will vary by season and location</p>'
  },
  {
    'title': 'Mini Tarts',
    'cafeOrcatering': 'catering',
    'category': 'desserts',
    'price': '$2.50',
    'description': '<p>Mirror (chocolate raspberry), pecan, fresh fruit, key lime, mixed berry, lemon raspberry</p>'
  },
  {
    'title': 'Palmiers',
    'cafeOrcatering': 'catering',
    'category': 'desserts',
    'price': '$1.00',
    'description': '<p>A scroll shaped cookie made with puff pastry</p>'
  },
  {
    'title': 'Salted Caramel Brownies',
    'cafeOrcatering': 'catering',
    'category': 'desserts',
    'price': '$2.29',
    'description': '<p>Our signature dessert</p>'
  },
  {
    'title': 'Petit Gâteaux',
    'cafeOrcatering': 'catering',
    'category': 'desserts',
    'price': '$5.79',
    'description': '<p>Serves 1 - 2</p><p><br></p><p>Made with three layers of chiffon cake, simple syrup &amp; buttercream (can be served as ‘smash’ cakes)</p><p><br></p><p>Your choice of flavor:</p><p>Strawberry vanilla</p><p>Chocolate</p><p>Seasonal variety</p>'
  },
])

// Seed Catering Favors and Gift Baskets
db.ccmenus.insert([{
    'title': 'French Macaron Box (2)',
    'cafeOrcatering': 'catering',
    'category': 'favorsgiftbaskets',
    'price': '$5.00',
    'description': '<p>2 Macarons in a clear box with an Amélie\'s logo sticker</p><p><br></p><p><em>*black and white ribbon is $0.50 per box additional charge</em></p>'
  },
  {
    'title': 'French Macaron Box (6)',
    'cafeOrcatering': 'catering',
    'category': 'favorsgiftbaskets',
    'price': '$15.00',
    'description': '<p>6 Macarons in a white windowed box with an Amélie\'s logo sticker</p><p>*black and white ribbon is $0.50 per box additional charge</p>'
  },
  {
    'title': 'Flavored Coffee',
    'cafeOrcatering': 'catering',
    'category': 'favorsgiftbaskets',
    'price': '$18.95',
    'description': '<p>Cremé Brulée</p>'
  },
  {
    'title': 'Gift Box',
    'cafeOrcatering': 'catering',
    'category': 'favorsgiftbaskets',
    'price': '',
    'description': '<p style="text-align: center;">$75 | $100 | $150</p><p style="text-align: center;"><br></p><p style="text-align: center;">Customized gift baskets are available (some items not available for shipping)</p><p style="text-align: center;">Seasonal, holiday and corporate baskets available</p><p style="text-align: center;">Minimum of 72 hours required for all orders</p>'
  }
])

// Seed Catering In-House Event Packages
db.ccmenus.insert([{
    'title': 'Bordeaux Brunch',
    'cafeOrcatering': 'catering',
    'category': 'inhouseeventpackages',
    'price': '$13.00',
    'description': '<p>Quiche du jour, petite baked pastry, side of seasonal fruit,</p><p>12oz brewed coffee, iced water, 12oz of orange juice per person</p><p><br></p><p><em>in-house events only. buffets are portioned per person and are not unlimited portions</em></p>'
  },
  {
    'title': 'Paris Lunch',
    'cafeOrcatering': 'catering',
    'category': 'inhouseeventpackages',
    'price': '$15.00',
    'description': '<p>Petite sandwich, tartine, petite baked pastry, petite dessert, iced water, 12oz of in-house made lemonade, 12oz of iced tea per person</p><p><br></p><p><em>in-house events only. buffets are portioned per person and are not unlimited portions</em></p>'
  },
  {
    'title': 'Seasonal Salad',
    'cafeOrcatering': 'catering',
    'category': 'inhouseeventpackages',
    'price': '$4.00',
    'description': '<p>In-house made dressing served on the side</p><p><br></p><p><em>Seasonal salads will vary four times per year</em></p><p><em>Mixed greens topped with seasonal selections with our in-house made dressings</em></p>'
  },
  {
    'title': 'Soup du Jour',
    'cafeOrcatering': 'catering',
    'category': 'inhouseeventpackages',
    'price': '$3.50 & up',
    'description': '<p>$3.50 cup</p><p>$4.00 bowl</p><p><br></p><p>Soup du jour: spinach ,asparagus and leek is available at all locations every day</p><p><br></p><p><em>Each location will offer a variety of other soups in addition to the spinach, asparagus and leek.&nbsp;soups will change seasonally and vary by location.</em></p>'
  },
  {
    'title': 'Petite Beef & Blue Brioche',
    'cafeOrcatering': 'catering',
    'category': 'inhouseeventpackages',
    'price': '$4.00',
    'description': '<p>Roast beef, caramelized onions & crumbled blue cheese ona a petite brioche roll</p>'
  },
  {
    'title': 'Bouchée',
    'cafeOrcatering': 'catering',
    'category': 'inhouseeventpackages',
    'price': '$4.00',
    'description': '<p>Chef\'s selection of savory puff pastry</p>'
  },
  {
    'title': 'Seasonal Compote & Brie Crostini',
    'cafeOrcatering': 'catering',
    'category': 'inhouseeventpackages',
    'price': '$3.00',
    'description': '<p>Seasonal fruit compote topped with melted brie on crostini</p>'
  }
])

// Seed Catering Lunch items
db.ccmenus.insert([{
    'title': 'Brittany Lunch',
    'cafeOrcatering': 'catering',
    'category': 'lunch',
    'price': '$10.00',
    'description': '<p>Bowl of soup du jour and seasonal salad</p><p>Includes a quarter baguette and basil butter,</p><p>assorted petite desserts &amp; iced tea</p>'
  },
  {
    'title': 'Champ Élysées Lunch',
    'cafeOrcatering': 'catering',
    'category': 'lunch',
    'price': '$10.50',
    'description': '<p>Your choice of seasonal entrée salad with protein</p><p>(chicken, salmon* or portobello mushroom)</p><p>with in-house made dressing on the side,</p><p>assorted petite desserts &amp; iced tea</p><p><br></p><p><em>*salmon selection in-house only</em></p>'
  },
  {
    'title': 'Lyon Lunch',
    'cafeOrcatering': 'catering',
    'category': 'lunch',
    'price': '$10.00',
    'description': '<p>Assorted petite desserts &amp; iced tea</p><p>Assorted sandwiches with a cup of soup du jour, seasonal salad or seasonal side</p><p>(this package can be served on platters or as an individual boxed lunch)</p>'
  },
  {
    'title': 'Sandwich Options',
    'cafeOrcatering': 'catering',
    'category': 'lunch',
    'price': '$10.00',
    'description': '<p>Jambon et fromage on a baguette&nbsp;</p><p>Turkey, brie &amp; seasonal compote on a baguette&nbsp;</p><p>Signature chicken salad on a croissant</p><p>Roast beef &amp; manchego on a croissant&nbsp;</p><p>Tomato, manchego &amp; greens on a croissant</p>'
  }
])

// Seed Catering Platter Items
db.ccmenus.insert([{
    'title': 'Crudités',
    'cafeOrcatering': 'catering',
    'category': 'platters',
    'price': '$35.00',
    'description': '<p>Serves 15 - 20</p><p><br></p><p>Cherry tomatoes, carrots, broccoli, celery &amp; cucumbers</p><p>with a lemon herbes de provence dipping sauce</p><p><br></p><p><em>Available for catering or in-house</em></p><p><em>paper products are not included for catering or pick up orders</em></p>'
  },
  {
    'title': 'Fresh Fruit Tray',
    'cafeOrcatering': 'catering',
    'category': 'platters',
    'price': '$60.00',
    'description': '<p>Serves 15 - 20</p><p><br></p><p>Pineapple, grapes and berries with honey lime dipping sauce</p>'
  },
  {
    'title': 'Charcuterie',
    'cafeOrcatering': 'catering',
    'category': 'platters',
    'price': '$50.00',
    'description': '<p>Serves 15 - 20</p><p><br></p><p>Sliced paté, saucisson sec, cornichons, seasonla preserves, grapes, dijon mustard &amp; crostini</p><p><br></p><p><em>Available for catering or in-house</em></p><p><em>paper products are not included for catering or pick up orders</em></p>'
  },
  {
    'title': 'Cheese Board',
    'cafeOrcatering': 'catering',
    'category': 'platters',
    'price': '$50.00',
    'description': '<p>Serves 15 - 20</p><p><br></p><p>Manchego, gruyére, brie, goat cheese rolled in pistachios &amp; crostini</p><p><br></p><p><em>Available for catering or in-house</em></p><p><em>paper products are not included for catering or pick up orders</em></p>'
  },
  {
    'title': 'Brie En Croûte',
    'cafeOrcatering': 'catering',
    'category': 'platters',
    'price': '$30.00',
    'description': '<p>Serves 15 - 20</p><p><br></p><p>Brie wrapped in puff pastry and topped with seasonal compote</p><p><br></p><p><em>Only available in house</em></p>'
  },
  {
    'title': 'Petite Sandwiches',
    'cafeOrcatering': 'catering',
    'category': 'platters',
    'price': '$3.00',
    'description': '<p>Chicken salad on croissant</p><p>Turkey &amp; greens on croissant</p><p>Roast beef &amp; manchego on croissant</p><p>Tomato pesto on baguette</p>'
  },
  {
    'title': 'Party Tartines',
    'cafeOrcatering': 'catering',
    'category': 'platters',
    'price': '$2.00',
    'description': '<p>Spinach &amp; asiago</p><p>Ham &amp; gruyére</p><p>Wild mushroom duxelles</p><p>Tomato pesto mozzarella</p><p><br></p><p><em>Only available in-house</em></p>'
  },
  {
    'title': 'Breads & Spreads',
    'cafeOrcatering': 'catering',
    'category': 'platters',
    'price': '$2.00',
    'description': '<p>(serves 15-20) 3 baguettes &amp; 2 spreads $22</p><p>(serves 20-30) 6 baguettes &amp; 3 spreads $46</p><p><br></p><p>Freshly baked baguettes with your choice of spreads:</p><p><br></p><p>Pimento</p><p>Roasted garlic feta</p><p>Truffle honey</p><p>Basil butter</p><p>Sundried tomato basil pesto</p>'
  },
  {
    'title': 'Danishes',
    'cafeOrcatering': 'catering',
    'category': 'platters',
    'price': '$50.00',
    'description': '<p>24 pieces</p><p><br></p><p>Pecan and seasonal danishes, cream cheese puffs &amp; croissants</p>'
  },
  {
    'title': 'Croissants',
    'cafeOrcatering': 'catering',
    'category': 'platters',
    'price': '$40.00',
    'description': '<p>12 pieces</p><p><br></p><p>Plain, chocolate, strawberry cream cheese, classic &amp; chocolate twice baked croissants</p>'
  },
  {
    'title': 'Tea Time',
    'cafeOrcatering': 'catering',
    'category': 'platters',
    'price': '$36.00',
    'description': '<p>24 pieces</p><p><br></p><p>Tea cakes, coconut macaroons &amp; palmiers</p>'
  },
  {
    'title': 'Mini Tarts',
    'cafeOrcatering': 'catering',
    'category': 'platters',
    'price': '$36.00',
    'description': '<p>18 pieces</p><p><br></p><p>Pecan, fresh fruit, key lime, mixed berry &amp; lemon raspberry</p>'
  }
])

// Seed Custom Cake Flavor Items
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
    'descriptor': 'cakeflavor',
    'detail': 'Lemon Chiffon'
  },
  {
    'menuCategory': 'CustomCakes',
    'descriptor': 'cakeflavor',
    'detail': 'Almond (gluten free)'
  }
])

// Seed Custom Cake Buttercream Items
db.cakedatas.insert([{
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
    'descriptor': 'buttercream',
    'detail': 'Citrus'
  },
  {
    'menuCategory': 'CustomCakes',
    'descriptor': 'buttercream',
    'detail': 'Hazelnut'
  },
  {
    'menuCategory': 'CustomCakes',
    'descriptor': 'buttercream',
    'detail': 'Coffee'
  },
  {
    'menuCategory': 'CustomCakes',
    'descriptor': 'buttercream',
    'detail': 'Mocha'
  },
  {
    'menuCategory': 'CustomCakes',
    'descriptor': 'buttercream',
    'detail': 'Pistachio'
  },
  {
    'menuCategory': 'CustomCakes',
    'descriptor': 'buttercream',
    'detail': 'Raspberry'
  },
  {
    'menuCategory': 'CustomCakes',
    'descriptor': 'buttercream',
    'detail': 'Traditional'
  }

])

// Seed Custom Cake Filling Items
db.cakedatas.insert([{

    'menuCategory': 'CustomCakes',
    'descriptor': 'filling',
    'detail': 'Chocolate Mousse'
  },
  {
    'menuCategory': 'CustomCakes',
    'descriptor': 'filling',
    'detail': 'Rasberry Mousse'
  },
  {
    'menuCategory': 'CustomCakes',
    'descriptor': 'filling',
    'detail': 'Passion Fruit Mousse'
  },
  {
    'menuCategory': 'CustomCakes',
    'descriptor': 'filling',
    'detail': 'Strawberry Mousse'
  },
  {
    'menuCategory': 'CustomCakes',
    'descriptor': 'filling',
    'detail': 'Cream Cheese Mousse'
  },
  {
    'menuCategory': 'CustomCakes',
    'descriptor': 'filling',
    'detail': 'Lemon Cream Cheese Mousse'
  },
  {
    'menuCategory': 'CustomCakes',
    'descriptor': 'filling',
    'detail': 'Banana Mousse'
  },
  {
    'menuCategory': 'CustomCakes',
    'descriptor': 'filling',
    'detail': 'Blood Orange Mousse'
  },
  {
    'menuCategory': 'CustomCakes',
    'descriptor': 'filling',
    'detail': 'Milk Chocolate Mousse'
  },
  {
    'menuCategory': 'CustomCakes',
    'descriptor': 'filling',
    'detail': 'Cappuccino Mousse'
  },
  {
    'menuCategory': 'CustomCakes',
    'descriptor': 'filling',
    'detail': 'White Chocolate Mousse'
  },
  {
    'menuCategory': 'CustomCakes',
    'descriptor': 'filling',
    'detail': 'Blackberry Mousse'
  },
  {
    'menuCategory': 'CustomCakes',
    'descriptor': 'filling',
    'detail': 'Coconut Mousse'
  },
  {
    'menuCategory': 'CustomCakes',
    'descriptor': 'filling',
    'detail': 'Irish Cream Mousse'
  },
  {
    'menuCategory': 'CustomCakes',
    'descriptor': 'filling',
    'detail': 'Vanilla Pastry Cream'
  },
  {
    'menuCategory': 'CustomCakes',
    'descriptor': 'filling',
    'detail': 'Chocolate Pastry Cream'
  },
  {
    'menuCategory': 'CustomCakes',
    'descriptor': 'filling',
    'detail': 'Hazelnut Pastry Cream'
  },
  {
    'menuCategory': 'CustomCakes',
    'descriptor': 'filling',
    'detail': 'Coffee Pastry Cream'
  },
  {
    'menuCategory': 'CustomCakes',
    'descriptor': 'filling',
    'detail': 'Lemon Pastry Cream'
  },
  {
    'menuCategory': 'CustomCakes',
    'descriptor': 'filling',
    'detail': 'Lime Pastry Cream'
  },
  {
    'menuCategory': 'CustomCakes',
    'descriptor': 'filling',
    'detail': 'Fresh Fruit Pastry Cream'
  },
  {
    'menuCategory': 'CustomCakes',
    'descriptor': 'filling',
    'detail': 'Vanilla Chiboust'
  },
  {
    'menuCategory': 'CustomCakes',
    'descriptor': 'filling',
    'detail': 'Pumpkin Chiboust'
  },
  {
    'menuCategory': 'CustomCakes',
    'descriptor': 'filling',
    'detail': 'Cinnamon Chiboust'
  },
  {
    'menuCategory': 'CustomCakes',
    'descriptor': 'filling',
    'detail': 'Ganache'
  },
  {
    'menuCategory': 'CustomCakes',
    'descriptor': 'filling',
    'detail': 'Caramel'
  },
  {
    'menuCategory': 'CustomCakes',
    'descriptor': 'filling',
    'detail': 'Diplomat Cream'
  }
])

// Seed Custom Cake Masking and Decoration Items
db.cakedatas.insert([{

    'menuCategory': 'CustomCakes',
    'descriptor': 'maskingdecoration',
    'detail': 'Feuilletine'
  },
  {
    'menuCategory': 'CustomCakes',
    'descriptor': 'maskingdecoration',
    'detail': 'Toasted Candied Almonds'
  },
  {
    'menuCategory': 'CustomCakes',
    'descriptor': 'maskingdecoration',
    'detail': 'Toasted Coconut'
  },
  {
    'menuCategory': 'CustomCakes',
    'descriptor': 'maskingdecoration',
    'detail': 'Chocolate Curls'
  },
  {
    'menuCategory': 'CustomCakes',
    'descriptor': 'maskingdecoration',
    'detail': 'Ganache Candied Citrus'
  },
  {
    'menuCategory': 'CustomCakes',
    'descriptor': 'maskingdecoration',
    'detail': 'Fresh Fruit'
  },
  {
    'menuCategory': 'CustomCakes',
    'descriptor': 'maskingdecoration',
    'detail': 'Chocolate Dipped Strawberries'
  },
  {
    'menuCategory': 'CustomCakes',
    'descriptor': 'maskingdecoration',
    'detail': 'Custom decorations also available for additional charge'
  }
])

// Seed Composed Cake Items
db.cakedatas.insert([{
    'menuCategory': 'ComposedCakes',
    'descriptor': 'Chocolate Rasberry',
    'detail': '<p>Chocolate Chiffon</p><p>Chambord Simple Syrup</p><p>Raspberry Mousse</p><p>Chocolate Buttercream</p><p>Chocolate Ganache</p><p>Raspberries</p><p>Chocolate Curls</p>'
  },
  {
    'menuCategory': 'ComposedCakes',
    'descriptor': 'Fraise',
    'detail': '<p>Vanilla Chiffon</p><p>Gran Marnier Simple Syrup</p><p>Pastry Cream with Fresh Strawberry Pieces</p><p>Traditional Buttercream</p><p>Toasted Candied Almonds</p><p>Topped with Glazed Strawberries</p>'
  },
  {
    'menuCategory': 'ComposedCakes',
    'descriptor': 'Lemon Raspberry',
    'detail': '<p>Lemon Chiffon</p><p>Chambord Simple Syrup</p><p>Raspberry Mousse</p><p>Lemon Buttercream</p><p>Raspberries</p><p>Feulletine</p>'
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
