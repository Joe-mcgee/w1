var salesTaxRates = {
  AB: 0.05,
  BC: 0.12,
  SK: 0.10
};

var companySalesData = [{
  name: "Telus",
  province: "BC",
  sales: [100, 200, 400]
},
{
  name: "Bombardier",
  province: "AB",
  sales: [80, 20, 10, 100, 90, 500]
},
{
  name: "Telus",
  province: "SK",
  sales: [500, 100]
}
];

function companyGenerator(salesData) {
  var output = {};
  salesData.forEach(function(entry) {
    if (!output.hasOwnProperty(entry['name'])) {
      output[entry['name']] = {};
    }


  });
  return output;
}

function totalSales(salesData, company) {
  var output = 0;

  salesData.forEach(function(entry) {
    if (entry['name'] === company) {
      var salesArray = entry['sales'];
      salesArray.forEach(function(revenue) {
        output += revenue;
      });
    }
  });
  return output;
}

function calculateTax(salesData, taxRates, company) {
  var output = 0;
  salesData.forEach(function(entry) {
    if (entry['name'] === company) {
      var salesArray = entry['sales'];
      var provSales = salesArray.reduce(function(a, b) {
        return a + b;
      }, 0);
      for (rate in taxRates) {
        if (rate === entry['province']) {
          output += taxRates[rate] * provSales;
        }
      }
    }
  });
  return output;
}



function calculateSalesTax(salesData, taxRates) {
  var output = companyGenerator(salesData);
  for (company in output) {
    output[company]['totalSales'] = totalSales(salesData, company);
    output[company]['totalTaxes'] = calculateTax(salesData, taxRates, company);
  }
  return output;
}

var results = calculateSalesTax(companySalesData, salesTaxRates);
console.log(results);



/* Expected Results:
{
  Telus: {
    totalSales: 1300
    totalTaxes: 144
  },
  Bombardier: {
    totalSales: 800,
    totalTaxes: 40
  }
}
*/
