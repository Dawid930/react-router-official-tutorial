import React from 'react'
import { useLocation, useNavigate, useParams } from 'react-router-dom'
import { getInvoice, deleteInvoice } from '../data'

function Invoice() {
    let navigate = useNavigate() //ennek a meghivasaval navigal vissza a kereso felulethez
    let location = useLocation()
    let params = useParams()
    let invoice = getInvoice(parseInt(params.invoiceId, 10))
  return (
    <main style={{ padding: "1rem"}}>
        <h2>Total Due: {invoice.amount}</h2>
        <p> {invoice.name}: {invoice.number}</p>
        <p>Due date: {invoice.due}</p>
        <p>
            <button
            onClick={() => {
                deleteInvoice(invoice.number)
                navigate("/invoices" + location.search)
            }}
            >
                Delete
            </button>
        </p>
    </main>
  )
}

export default Invoice