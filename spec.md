# Spec

Data source: https://dev1-sample.azurewebsites.net/properties.json

Display the properties from the data source above in a card/list view with the following fields. Users should be able to toggle between card/list views.

## Properties (card/list views) fields

* Property Image: `mainImageUrl`
* Address: `address`
* Year Built: `physical.yearBuilt`
* List Price $ (formatted to two decimal places - e.g. `$120,000.00`): `financial.listPrice`
* Monthly Rent $ (formatted to two decimal places - e.g. `$1,234.00`): `financial.monthlyRent`
* Gross Yield % ('Monthly Rent' * 12 / 'List Price') - e.g. `12.55%`: _calculated_

## Property detail

When a user click on a property card view or list view, navigate to property detail route and display

* Address of property: `address`
* Carousel that allows user to navigate between images: `resources.photos`
