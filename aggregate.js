db.createCollection("orders")
db.orders.insertMany(
         [
              {product: "toothbrush", total: 4.75, customer: "Mike"},
              {product: "guitar", total: 199.99, customer: "Tom"},
              {product: "milk", total: 11.33, customer: "Mike"},
              {product: "pizza", total: 8.50, customer: "Karen"},
              {product: "toothbrush", total: 4.75, customer: "Karen"},
              {product: "pizza", total: 4.75, customer: "Dave"},
              {product: "toothbrush", total: 4.75, customer: "Mike"},
         ]
    );
    
// Ujicoba 1 : find out how many toothbrushes were sold
db.orders.count({product: "toothbrush"})

// Ujicoba 2 : Find list of all products sold
db.orders.distinct("product")

// Ujicoba 3 : Find the total amount of money spent by each customer
db.orders.aggregate(
         [
              {$group: {customer: "$customer", total: { $sum: "$total"} } }
         ]
    );

// Ujicoba 4 : Find how much has been spent on each product and sort it by price
db.orders.aggregate(
     [
          {$group: {_id: "$product", total: { $sum: "$total"} } },
          {$sort: {total: -1}}
     ]
);

// Ujicoba 5 : Find how much money each customer has spent on toothbrushes and pizza
db.orders.aggregate(
     [
          {$match: {product: {$in: ["toothbrush", "pizza"]} } },
          {$group: {_id: "$product", total: { $sum: "$total"} } },
     ]
);
    
db.orders.aggregate(
    [
        {$match:{customer:"Mike"}},
        {$group: {_id: "$product", total: { $sum: "$total"} } }
    ]
)