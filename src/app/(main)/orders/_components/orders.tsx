import React from 'react'
import OrderBanner from './order-banner'
import OrderTable from './ui/order-table'

const columns = [
  { key: "orderNo", label: "Order No." },
  { key: "amount", label: "Amount" },
  { key: "item", label: "Item" },
  { key: "orderDate", label: "Order date" },
  { key: "status", label: "Status" },
];

const data = [
  { orderNo: "001", amount: "$400", item: "Trident 32Gb Ram", orderDate: "9-Jan-2022", status: "Confirmed" },
  { orderNo: "002", amount: "$400", item: "Trident 32Gb Ram", orderDate: "9-Jan-2022", status: "Canceled" },
  { orderNo: "003", amount: "$400", item: "Trident 32Gb Ram", orderDate: "9-Jan-2022", status: "Delayed" },
  { orderNo: "004", amount: "$550", item: "Corsair 16Gb Ram", orderDate: "12-Jan-2022", status: "Confirmed" },
  { orderNo: "005", amount: "$320", item: "Kingston 8Gb Ram", orderDate: "15-Jan-2022", status: "Confirmed" },
  { orderNo: "006", amount: "$450", item: "G.Skill 32Gb Ram", orderDate: "16-Jan-2022", status: "Canceled" },
  { orderNo: "007", amount: "$375", item: "HyperX 16Gb Ram", orderDate: "20-Jan-2022", status: "Delayed" },
];

function Orders() {
  return (
    <div>
        <OrderBanner/>
        <OrderTable columns={columns} data={data}/>
    </div>
  )
}

export default Orders