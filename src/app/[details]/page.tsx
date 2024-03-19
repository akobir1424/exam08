'use client'
import Det from '@/components/productDetails/Det'
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import "./details.css"

const page = ({params}:{
    params:{details:string}
}) => {
    const [p,setp]=useState([])
    const {details}=params
    const getpro= async()=>{
        const res= await axios.get(`https://65f88071df151452460f8b91.mockapi.io/products`)
        const data= await res.data
        setp(data)
        console.log(data);
    }
    useEffect(()=>{
        getpro()
    },[])
    
  return (
    <div>
        
       <div className="dee">
       {p.filter((p: any) => {
        return p.id ==details; 
    }).map((p: any) => (
      <div key={p.id} className="detailst">
        
      <img className='imgg' src={p.avatar} alt="" />

      <div className="details__right">
        <h1>The Dandy Chair
£250</h1>
      <h1>{p.name}</h1>
      <h1>£ {p.price}</h1>
      <br />

      <h2>Description</h2>
      <br />
      <h3>{p.description}</h3>
      <h3>{p.title}</h3>
      <div className="info">
        <div className="info1">
        <h3>Amount</h3> <div className="pilus"> <h3>-</h3><h2>1</h2><h3>+</h3>   </div>
        </div>
        <button>Add to cart</button>
      </div>
    </div>
  </div>
  ))}
       </div>
        <Det/>
    </div>
  )
}

export default page