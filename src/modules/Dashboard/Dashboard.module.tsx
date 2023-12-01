import React from 'react'

import { Routes, Route, Navigate } from "react-router-dom";


import { Book } from "../Books/Book";

import Dashboardlayout from './Dashboardlayout'


const DashboardModule = () => {
  return (
    <Dashboardlayout>
      <Routes>
        <Route index element={<Navigate to={'admin'} />} />
        <Route index path="admin" element={<Book />} />
        <Route path="manager" element={<div>manager </div>} />
        <Route path="user" element={<div>user </div>} />
        <Route path="*" element={<div>Error page</div>} />
      </Routes>
    </Dashboardlayout>
  )
}

export default DashboardModule